import { AxiosRequestConfig } from 'axios'

const functions = require('firebase-functions')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios').default

//initialize express server
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors({ origin: true }))

// Expose Express API as a single Cloud Function:
exports.indexQuestion = functions.region('europe-west1').https.onRequest(app)

function getQuestionIdFromPayload(payload: any) {
  const {
    event: {
      data: {
        new: { Id, IsPublie },
      },
    },
  } = payload
  return {
    Id: Id,
    IsPublie: IsPublie,
  }
}

function buildGetBody(id: any) {
  return `{
  "query":
    "query MyQuery {
      Questions_by_pk(Id:${id}) {
      Id
      IsPublie
      Libelle
      QuestionAnswer {
        Id
        Libelle
      }
      QuestionPropositions {
        Id
        Libelle
      }
      QuestionCategory {
        Id
        Libelle
      }
    }
  }"
}
`
}

function buildDeleteBody(questionId: any) {
  return `{
  "query": {
      "term": {
        "Id": {
          "value": ${questionId}
          }
        }
  }
}`
}

async function getQuestionByPk(questionId: any) {
  const options: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': 'questionsecretkey',
    },
  }
  // TODO: ADD env variable
  return axios
    .post(`http://localhost:9100/v1/graphql`, buildGetBody(questionId), options)
    .then((body: any) => {
      const {
        data: {
          data: { Questions_by_pk },
        },
      } = body
      return Questions_by_pk
    })
    .catch(() => {
      console.log(`[ERROR]: Can't get question: ${questionId}`)
    })
}
async function indexQuestion(questionId: any) {
  const question = await getQuestionByPk(questionId)
  // TODO: ADD env variable
  return axios.post(`http://localhost:9200/questions/_doc/`, question)
}

async function removeIndexQuestion(questionId: any): Promise<any> {
  // TODO: ADD env variable
  return axios.post(
    `http://localhost:9200/questions/_delete_by_query`,
    buildDeleteBody(questionId),
  )
}

app.use(bodyParser.json())

app.post('/', async function (req: any, res: any) {
  try {
    const { Id, IsPublie } = getQuestionIdFromPayload(req.body)
    if (IsPublie) {
      indexQuestion(Id)
        .then(() => {
          console.log(`[INFO]: Question ${Id} was indexed`)
          res.status(200).json({ msg: 'Question indexation success' })
        })
        .catch(() => {
          console.log(`[WARNING]: Indexation failed for question: ${Id}`)
          res.status(500).json({ msg: 'Question indexation failed' })
        })
    } else {
      removeIndexQuestion(Id)
        .then(() => {
          console.log(`[INFO]: Question ${Id} was deindexed`)
          res.status(200).json({ msg: 'Question deindexed success' })
        })
        .catch(() => {
          console.log(`[WARNING]: Indexation failed for question: ${Id}`)
          res.status(500).json({ msg: 'Question deindexed failed' })
        })
    }
  } catch (e) {
    console.log(`[ERROR]: Error in the payload`)
    res.status(500).json({ msg: 'Error in the payload' })
  }
})

app.get('/', function (req: any, res: any) {
  res.send('Hello World - For Event Triggers, try a POST request?')
})
