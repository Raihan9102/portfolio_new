pipeline {
    agent any

    options {
        timeout(time: 1, unit: 'HOURS')
        disableConcurrentBuilds()
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    triggers {
        pollSCM('H/2 * * * *')
    }

    environment {
        BUILDER_IMAGE = "portfolio-builder:${env.BUILD_NUMBER}"
        SONAR_COMPOSE = "/home/ubuntu/sonarqube/docker-compose.yml"
    }

    stages {
        stage('Pull SCM') {
            steps {
                sh 'git log -1 --pretty="Commit: %h | %s | %an"'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build --target builder -t $BUILDER_IMAGE .'
            }
        }

        stage('Testing') {
            steps {
                sh 'docker run --rm $BUILDER_IMAGE npm run lint'
                sh '''
                  docker rm -f cov-$BUILD_NUMBER || true
                  docker run --name cov-$BUILD_NUMBER $BUILDER_IMAGE npm test
                  rm -rf coverage
                  docker cp cov-$BUILD_NUMBER:/app/coverage ./coverage
                  docker rm -f cov-$BUILD_NUMBER
                '''
            }
        }

        stage('Code Review') {
            steps {
                withCredentials([string(credentialsId: 'sonar-token', variable: 'SONAR_TOKEN')]) {
                    sh '''
                      docker compose -f $SONAR_COMPOSE up -d
                      for i in $(seq 1 60); do
                        curl -s http://sonarqube:9000/api/system/status | grep -q '"status":"UP"' && break
                        sleep 5
                      done
                        docker run --rm --network cinet --volumes-from jenkins -w "$WORKSPACE" \
                        -e SONAR_HOST_URL=http://sonarqube:9000 \
                        -e SONAR_TOKEN=$SONAR_TOKEN \
                        sonarsource/sonar-scanner-cli
                    '''
                }
            }
        }

        stage('Deliver') {
            steps {
                timeout(time: 30, unit: 'MINUTES') {
                    input message: 'Siap production? Build lolos Testing dan Code Review.',
                          ok: 'Yes, deploy'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose -p portfolio_new up -d --build'
                sh 'docker image prune -f'
                sh '''
                  for i in $(seq 1 15); do 
                    if docker exec portfolio-app wget -qO- http://localhost > /dev/null 2>&1; then 
                      echo "Web OK" 
                      exit 0
                    fi 
                    sleep 2 
                  done 
                  echo "Web tidak merespons"
                  docker logs --tail 30 portfolio-app 
                  exit 1 
                '''
                
            }
        }
    }

    post {
        always {
            sh 'docker compose -f $SONAR_COMPOSE stop || true'
            sh 'docker rmi $BUILDER_IMAGE || true'
        }
    }
}