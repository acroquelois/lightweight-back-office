import gql from 'graphql-tag'

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
