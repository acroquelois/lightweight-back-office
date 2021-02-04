import { AxiosRequestConfig } from "axios";
import { hasuraURL, elacticURL } from "./config";

const axios = require("axios");
const express = require("express");

const app = express();

app.use(express.json());

function getQuestionIdFromPayload(payload: any) {
  const {
    event: {
      data: {
        new: { Id, IsPublie },
      },
    },
  } = payload;
  return {
    Id: Id,
    IsPublie: IsPublie,
  };
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
`;
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
}`;
}

async function getQuestionByPk(questionId: any) {
  // TODO: env var
  const options: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": "questionsecretkey",
    },
  };
  return axios.default
    .post(`${hasuraURL}/v1/graphql`, buildGetBody(questionId), options)
    .then((body: any) => {
      const {
        data: {
          data: { Questions_by_pk },
        },
      } = body;
      return Questions_by_pk;
    })
    .catch(() => {
      console.log(`[ERROR] : Can't get question: ${questionId}`);
    });
}
async function indexQuestion(questionId: any) {
  const question = await getQuestionByPk(questionId);
  return axios.default.post(`${elacticURL}/questions/_doc/`, question);
}

async function removeIndexQuestion(questionId: any): Promise<any> {
  return axios.default.post(
    `${elacticURL}/questions/_delete_by_query`,
    buildDeleteBody(questionId)
  );
}
app.post("/index-question", function (req: any, res: any) {
  try {
    const { Id, IsPublie } = getQuestionIdFromPayload(req.body);
    if (IsPublie) {
      indexQuestion(Id)
        .then(() => {
          console.log(`[INFO] : Question ${Id} was indexed`);
          res.status(200).json({ msg: "Question indexation success" });
        })
        .catch(() => {
          console.log(`[WARNING] : Indexation failed for question: ${Id}`);
          res.status(500).json({ msg: "Question indexation failed" });
        });
    } else {
      removeIndexQuestion(Id)
        .then(() => {
          console.log(`[INFO] : Question ${Id} was deindexed`);
          res.status(200).json({ msg: "Question deindexed success" });
        })
        .catch(() => {
          console.log(`[WARNING] : Deindexation failed for question: ${Id}`);
          res.status(500).json({ msg: "Question deindexed failed" });
        });
    }
  } catch (e) {
    console.log(`[ERROR] : Error in the payload`);
    res.status(500).json({ msg: "Error in the payload" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
