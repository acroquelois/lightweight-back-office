# Lightweight-back-office

This project is a lightweight back office to manage a dataset of question.
It run with Vuejs 3.

## Project setup

### Hasura

**Apply migration:**
> hasura migrate apply --endpoint http://localhost:9100 --admin-secret questionsecretkey

**Apply metadata:**
> hasura metadata apply --endpoint http://localhost:9100 --admin-secret questionsecretkey
