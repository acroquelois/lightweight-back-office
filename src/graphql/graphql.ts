import gql from 'graphql-tag'
import { Query_Root, Questions_Insert_Input } from '@/generated/graphql'

export const GET_QUESTIONS = gql`
  query getAllQuestion {
    Questions {
      Id
      Libelle
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

export interface QuestionResponse {
  Questions_by_pk: Questions_Insert_Input
}

export const GET_QUESTION_BY_ID = gql`
  query getQuestionbyId($Id: Int!) {
    Questions_by_pk(Id: $Id) {
      Id
      Libelle
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

export const INSERT_QUESTION = gql`
  mutation insertQuestion($Question: Questions_insert_input!) {
    insert_Questions_one(object: $Question) {
      Id
    }
  }
`
