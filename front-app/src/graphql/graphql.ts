import gql from 'graphql-tag'
import {
  Maybe,
  Query_Root,
  QuestionAnswers_Insert_Input,
} from '../generated/graphql'

export const GET_QUESTIONS = gql`
  query getAllQuestion {
    Questions {
      Id
      Libelle
      IsPublie
      QuestionAnswer {
        Libelle
      }
      QuestionCategory {
        Libelle
      }
      QuestionPropositions {
        Libelle
      }
    }
  }
`

export const GET_QUESTION_BY_ID = gql`
  query getQuestionbyId($Id: Int!) {
    Questions_by_pk(Id: $Id) {
      Id
      Libelle
      IsPublie
      QuestionAnswer {
        Id
        Libelle
      }
      QuestionCategorieId
      QuestionPropositions {
        Id
        Libelle
      }
    }
  }
`

export interface QuestionCategoriesResponse {
  QuestionCategories: Query_Root['QuestionCategories']
}

export const GET_QUESTION_CATEGORIES = gql`
  query getQuestionCategories {
    QuestionCategories {
      Id
      Libelle
    }
  }
`
export const GET_TOKEN = gql`
  mutation getToken($username: String!, $password: String!) {
    getToken(arg: { password: $password, username: $username }) {
      accessToken
    }
  }
`

export const DELETE_QUESTIONS = gql`
  mutation deleteQuestion($id: Int) {
    delete_Questions(where: { Id: { _eq: $id } }) {
      returning {
        Id
        Libelle
      }
    }
  }
`

export const INSERT_QUESTION_CATEGORIE = gql`
  mutation insertQuestionCategorie(
    $QuestionCategorie: QuestionCategories_insert_input!
  ) {
    insert_QuestionCategories_one(object: $QuestionCategorie) {
      Id
    }
  }
`

export type InsertQuestion = {
  Id?: Maybe<number>
  Libelle?: Maybe<string>
  IsPublie?: Maybe<boolean>
  QuestionCategorieId?: Maybe<number>
  QuestionAnswer?: QuestionAnswers_Insert_Input
  QuestionPropositions?: Array<QuestionAnswers_Insert_Input>
}

export const UPDATE_QUESTION = gql`
  mutation insertQuestion(
    $Id: Int!
    $Libelle: String
    $IsPublie: Boolean!
    $QuestionCategorieId: Int!
    $QuestionAnswer: QuestionAnswers_insert_input!
    $QuestionPropositions: [QuestionPropositions_insert_input!]!
  ) {
    insert_Questions_one(
      object: {
        Id: $Id
        Libelle: $Libelle
        IsPublie: $IsPublie
        QuestionCategorieId: $QuestionCategorieId
        QuestionAnswer: {
          data: $QuestionAnswer
          on_conflict: {
            constraint: PK_QuestionAnswers
            update_columns: Libelle
          }
        }
        QuestionPropositions: {
          data: $QuestionPropositions
          on_conflict: {
            constraint: PK_QuestionPropositions
            update_columns: Libelle
          }
        }
      }
      on_conflict: {
        constraint: PK_Questions
        update_columns: [Libelle, IsPublie, QuestionCategorieId]
      }
    ) {
      Id
    }
  }
`

export const INSERT_QUESTION = gql`
  mutation insertQuestion($Question: Questions_insert_input!) {
    insert_Questions_one(object: $Question) {
      Id
    }
  }
`
