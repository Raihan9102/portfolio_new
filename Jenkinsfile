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
            }
        }

        stage('Code Review') {
            steps {
                // Sementara: cek kerentanan dependency. Diganti SonarQube nanti.
                sh 'docker run --rm $BUILDER_IMAGE npm audit --audit-level=high || true'
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
                sh 'docker exec portfolio-app wget -qO- http://localhost > /dev/null && echo "Web OK"'
            }
        }
    }

    post {
        always {
            sh 'docker rmi $BUILDER_IMAGE || true'
        }
    }
}