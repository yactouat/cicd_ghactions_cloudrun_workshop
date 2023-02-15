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
- you need to create a service account on the GCP for the GitHub deployment action that will invoke Cloud Run with the following roles:

![GCP roles](./sa_permissions.webp)

- once you have deployed your service using the GitHub action, you need to update it manually in order to explicitely allow for (billable) unauthenticated requests => `gcloud run deploy workshop --image=${{ secrets.GCP_ARTIFACT_REPO }}/workshop:SOME_TAG --allow-unauthenticated --region=europe-west1 --port=8080`
