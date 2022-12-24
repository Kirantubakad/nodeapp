pipeline{
    agent {label "slave1"}
    environment{
        HUB_CREDENTIALS = crdentials('dockerhub-kiran')
    }
    stages{
        stage('checkout scm'){
            steps{
               git credentialsId: 'github_credential', poll: false, url: 'https://github.com/Kirantubakad/nodeapp.git'
            }
        }
        stage('build image'){
            steps{
                sh '''
                  
                  docker build -t daemon/nodeapp:$BUILD_NUMBER .
                  docker tag daemon/nodeapp:$BUILD_NUMBER kirankumartubakad/pub_repo:$BUILD_NUMBER
                  
                  '''
            }
        }
        stage('loginto-hub'){
            steps{
                 sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('push image to hub'){
            steps{
                 sh 'docker push kirankumartubakad/pub_repo:$BUILD_NUMBER'
            }
        }
    }
    post {
         success {
            sh 'docker logout'
        }
    }
}

