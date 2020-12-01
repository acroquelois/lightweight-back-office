<template>
  <div class="mx-32 justify-center">
    <div class="mt-8 text-4xl font-bold">
      <span>Edit question:</span>
    </div>
    <div v-if="question">
      <question-form
        v-model:question="question.Questions_by_pk"
        v-model:question-answer="question.Questions_by_pk.QuestionAnswer"
        v-model:questionsProposition="
          question.Questions_by_pk.QuestionPropositions
        "
        @save="saveQuestion"
      ></question-form>
    </div>
    <fab-button
      :left="true"
      icon="arrow-left"
      @on-click="goToHome"
    ></fab-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  Query_Root,
  Query_RootQuestions_By_PkArgs,
  QuestionAnswers_Insert_Input,
} from '@/generated/graphql'
import {
  GET_QUESTION_BY_ID,
  UPDATE_QUESTION,
  InsertQuestion,
} from '@/graphql/graphql'
import { useRouter } from 'vue-router'
import FabButton from '@/components/buttons/FabButton.vue'
import QuestionForm from '@/components/form/QuestionForm.vue'
import { useMutation, useQuery } from 'villus'

export default defineComponent({
  components: {
    FabButton,
    QuestionForm,
  },
  setup() {
    const router = useRouter()
    const { data } = useQuery<Query_Root, Query_RootQuestions_By_PkArgs>({
      query: GET_QUESTION_BY_ID,
      variables: { Id: Number(router.currentRoute.value.params.id) },
      cachePolicy: 'network-only',
    })
    const question = data

    const { execute: executeSaveQuestion } = useMutation(UPDATE_QUESTION)

    const saveQuestion = () => {
      //TODO: Voir la cast des objects query in mutation obj
      const variable: InsertQuestion = {
        Id: question.value.Questions_by_pk?.Id,
        Libelle: question.value.Questions_by_pk?.Libelle,
        IsPublie: question.value.Questions_by_pk?.IsPublie,
        QuestionCategorieId:
          question.value.Questions_by_pk?.QuestionCategorieId,
        QuestionAnswer: (question.value.Questions_by_pk
          ?.QuestionAnswer as unknown) as QuestionAnswers_Insert_Input,
        QuestionPropositions:
          question.value.Questions_by_pk?.QuestionPropositions,
      }
      executeSaveQuestion(variable)
    }

    const goToHome = () => {
      router.push({ name: 'Home' })
    }

    return {
      question,
      goToHome,
      saveQuestion,
    }
  },
})
</script>

<style scoped></style>