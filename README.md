# CI/CD GitHub Actions Google Cloud Run workshop

## what is this ?

DevOps practices workshop using GitHub Actions and Google Cloud Run.

## prerequisites

- Node.js installed on your machine
- Docker Desktop installed on your machine

## steps

- after having created your repo, the first thing you need to do is to **protect your main branch**
- to build a Docker image => `docker build -t workshop:0.0.1 .`
- to run a Docker container => `docker run -p 80:8080 workshop:0.0.1`
