# Lightweight-back-office

In this following project, I wanted to build a back office, with [Hasura](https://hasura.io/), to manage a pool of question. I would like provide various questions to my quizz game, so I need to frequently add new questions and delete others. In my case I want to rotate questions, a question could be publish(available in the game) or not publish. I also want have a follow-up on questions statistic(occurency, good/bad answer...). API calls will be securized by JWT token.

List of services I used:

- VueJs+TailwindCSS: to build a juicy web interface
- Firebase: used for authentification service
- NodeJs & Express: to build webhook
- Postgres: used to store all questions
- Elastic: used to index questions and store statistic
- Hasura: used as API gateway

**Architecture schema:**

![archi](https://imgur.com/h4SidH5.png)
## Project setup

**Run the project:**
>docker-compose up -d

### Hasura

**Launch console:**
> hasura console  --endpoint http://localhost:9100 --admin-secret questionsecretkey
>
**Apply migration:**
> hasura migrate apply --endpoint http://localhost:9100 --admin-secret questionsecretkey

**Apply metadata:**
> hasura metadata apply --endpoint http://localhost:9100 --admin-secret questionsecretkey
