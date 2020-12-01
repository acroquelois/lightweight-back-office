const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

function getQuestionIdFromPayload(payload) {
  const {
    payload: {
      event: {
        data: {
          new: { Id: questionId },
        },
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
  // TODO: url env variable
  const clientServerOptions = {
    uri: `http://localhost:9100/v1/graphql`,
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
  // TODO: url env variable
  const clientServerOptions = {
    uri: `http://localhost:9200/questions/_doc/`,
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
        res.status(201).json({ msg: 'Question indexation success' })
      })
      .catch(() => {
        res.status(500).json({ msg: 'Question indexation failed' })
      })
  } catch (e) {
    res.status(500).json({ msg: 'Error in the payload' })
  }
})

app.get('/', function (req, res) {
  res.send('Hello World - For Event Triggers, try a POST request?')
})

//TODO: env variable for port
const server = app.listen(5001, function () {
  console.log(`Server start on port: ${5001}`)
})
