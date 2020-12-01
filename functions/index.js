const express = require('express')
const bodyParser = require('body-parser')

//TODO: replace request(is deprecated)
const request = require('request')

const app = express()

function getQuestionIdFromPayload(payload) {
  const {
    event: {
      data: {
        new: { Id: questionId },
      },
    },
  } = payload
  return questionId
}

function buildBody(id) {
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

async function getQuestionByPk(questionId) {
  const clientServerOptions = {
    uri: `${process.env.HASURA_SERV_URL}/v1/graphql`,
    body: buildBody(questionId),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': 'questionsecretkey',
    },
  }
  return new Promise(function (resolve, reject) {
    request(clientServerOptions, function (error, res, body) {
      if (!error && res.statusCode === 200) {
        const {
          data: { Questions_by_pk },
        } = JSON.parse(body)
        resolve(JSON.stringify(Questions_by_pk))
      } else {
        reject()
      }
    })
  })
}
async function indexQuestion(questionId) {
  const clientServerOptions = {
    uri: `${process.env.ELASTIC_SERV_URL}/questions/_doc/`,
    body: await getQuestionByPk(questionId),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return new Promise(function (resolve, reject) {
    request(clientServerOptions, function (error, res, body) {
      if (!error && res.statusCode === 201) {
        resolve(body)
      } else {
        reject(error)
      }
    })
  })
}

app.use(bodyParser.json())

app.post('/index-question', async function (req, res) {
  try {
    const questionId = getQuestionIdFromPayload(req.body)
    indexQuestion(questionId)
      .then(() => {
        console.log(`[INFO]: Question ${questionId} was indexed`)
        res.status(201).json({ msg: 'Question indexation success' })
      })
      .catch(() => {
        console.log(`[WARNING]: Indexation failed for question: ${questionId}`)
        res.status(500).json({ msg: 'Question indexation failed' })
      })
  } catch (e) {
    console.log(`[ERROR]: Error in the payload`)
    res.status(500).json({ msg: 'Error in the payload' })
  }
})

app.get('/', function (req, res) {
  res.send('Hello World - For Event Triggers, try a POST request?')
})

const server = app.listen(process.env.PORT, function () {
  console.log(`Server start on port: ${process.env.PORT}`)
  console.log(`Hasura adress: ${process.env.HASURA_SERV_URL}`)
  console.log(`Elastic adress: ${process.env.ELASTIC_SERV_URL}`)
})
