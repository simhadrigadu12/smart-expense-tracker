pipeline {

    agent any

    stages {

        stage('Clone Repository') {

            steps {

                git branch: 'main',
                url: https://github.com/simhadrigadu12/smart-expense-tracker.git

            }
        }

        stage('Build Docker Image') {

            steps {

                bat 'docker build -t expense-tracker .'

            }
        }

        stage('Stop Old Container') {

            steps {

                bat 'docker stop expense-container || exit 0'
                bat 'docker rm expense-container || exit 0'

            }
        }

        stage('Run Container') {

            steps {

                bat 'docker run -d -p 5000:5000 --name expense-container expense-tracker'

            }
        }
    }
}