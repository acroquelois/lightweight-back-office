<template>
  <div class="mx-32 justify-center">
    <div class="mt-8 text-4xl font-bold">
      <span>Add question:</span>
    </div>
    <div v-if="question">
      <question-form
        v-model:question="question.Questions_by_pk"
        v-model:question-answer="question.Questions_by_pk.QuestionAnswer"
        v-model:questionsProposition="
          question.Questions_by_pk.QuestionPropositions
        "
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
import { Query_RootQuestions_By_PkArgs } from '@/generated/graphql'
import { GET_QUESTION_BY_ID, QuestionResponse } from '@/graphql/graphql'
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
    const { data } = useQuery<QuestionResponse, Query_RootQuestions_By_PkArgs>({
      query: GET_QUESTION_BY_ID,
      variables: { Id: Number(router.currentRoute.value.params.id) },
      cachePolicy: 'network-only',
    })
    const question = data
    const goToHome = () => {
      router.push({ name: 'Home' })
    }

    return {
      question,
      goToHome,
    }
  },
})
</script>

<style scoped></style>
