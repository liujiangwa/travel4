pipeline {
  agent {
    node {
      label 'test_server'
    }

  }
  stages {
    stage('checkout') {
      steps {
        sh 'echo checkout'
        sh 'echo checkout2'
      }
    }
    stage('build') {
      steps {
        sh 'echo build01'
        sh 'echo build02'
      }
    }
  }
}