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
        IMAGE         = "muhammadraihanthaffanh/portfolio"
        TAG           = "${env.BUILD_NUMBER}"
        SONAR_COMPOSE = "/home/ubuntu/sonarqube/docker-compose.yml"
    }

    stages {
        stage('Pull SCM') {
            steps {
                sh 'docker run --rm --privileged -v /:/host node:22-alpine chroot /host warp-cli disconnect || true'
                sh 'docker run --rm --privileged -v /:/host node:22-alpine chroot /host systemctl disable --now warp-svc || true'
                sh 'git log -1 --pretty="Commit: %h | %s | %an"'
            }
        }

        stage('Build Builder') {
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

        stage('Build & Push Image') {
            steps {
                sh 'docker build -t $IMAGE:$TAG -t $IMAGE:latest .'
                withCredentials([usernamePassword(credentialsId: 'registry-cred',
                    usernameVariable: 'REG_USER', passwordVariable: 'REG_PASS')]) {
                    sh 'echo $REG_PASS | docker login -u $REG_USER --password-stdin'
                    sh 'docker push $IMAGE:$TAG'
                    sh 'docker push $IMAGE:latest'
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

        stage('Deploy to Kubernetes') {
            steps {
                sshagent(['vps-ssh']) {
                    sh """
                    ssh -o StrictHostKeyChecking=no ubuntu@43.173.15.95 \\
                        "kubectl set image deployment/portfolio-app portfolio=\${IMAGE}:\${TAG} -n portfolio-production && kubectl rollout status deployment/portfolio-app -n portfolio-production"
                    """
                }
            }
        }
    }

    post {
        always {
            sh 'docker compose -f $SONAR_COMPOSE stop || true'
            sh 'docker rmi $BUILDER_IMAGE || true'
            sh 'docker logout || true'
        }
    }
}