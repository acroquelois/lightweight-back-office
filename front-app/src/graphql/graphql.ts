import gql from 'graphql-tag'

gql`
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

gql`
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

gql`
  query getQuestionCategories {
    QuestionCategories {
      Id
      Libelle
    }
  }
`

gql`
  mutation deleteQuestion($id: Int) {
    delete_Questions(where: { Id: { _eq: $id } }) {
      returning {
        Id
        Libelle
      }
    }
  }
`

gql`
  mutation insertQuestionCategorie(
    $QuestionCategorie: QuestionCategories_insert_input!
  ) {
    insert_QuestionCategories_one(object: $QuestionCategorie) {
      Id
    }
  }
`

gql`
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

gql`
  mutation insertQuestionOne($Question: Questions_insert_input!) {
    insert_Questions_one(object: $Question) {
      Id
    }
  }
`
