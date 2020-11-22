<template>
  <div class="mx-32 justify-center">
    <div class="text-gray-700 bg-gray-300 flex">
      <div class="flex-1">
        <span class="px-3">Type</span>
      </div>
      <div class="flex-1">
        <span class="px-3">Question</span>
      </div>
      <div class="flex-1">
        <span class="px-3">Réponse</span>
      </div>
      <div class="flex-1">
        <span class="px-3">Propositions</span>
      </div>
      <div class="flex-1">
        <span class="px-3">Action</span>
      </div>
    </div>
    <template v-if="questions">
      <div
        class="flex"
        v-for="question in questions.Questions"
        :key="question.Id"
      >
        <div class="flex flex-1 bg-gray-200">
          <div class="flex-1">
            <span class="px-3">{{ question.QuestionCategory.Libelle }}</span>
          </div>
          <div class="flex-1">
            <span class="px-3">{{ question.Libelle }}</span>
          </div>
          <div class="flex-1">
            <span class="px-3">{{ question.QuestionAnswer.Libelle }}</span>
          </div>
          <div class="flex-1">
            <span class="px-3">{{ question.QuestionPropositions }}</span>
          </div>
          <div class="flex-1">
            <span class="px-3"></span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useQuery } from 'villus'
import { Query_RootQuestionsArgs, Query_Root } from '@/generated/graphql'
import gql from 'graphql-tag'

interface QuestionsResponse {
  Questions: Query_Root['Questions']
}

export default defineComponent({
  // props: {
  //   questions: {
  //     type: Object as Query_Root['Questions'],
  //     required: false,
  //     default: {},
  //   },
  // },
  setup() {
    const { data } = useQuery<QuestionsResponse, Query_RootQuestionsArgs>({
      query: gql`
        {
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
      `,
      variables: {},
    })
    const questions = data
    return { questions }
  },
})
</script>

<style scoped></style>
