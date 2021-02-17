<template>
  <div class="mx-32 justify-center">
    <div class="mt-8 text-4xl font-bold">
      <span>Add question:</span>
    </div>
    <question-form
      v-model:question="question"
      v-model:question-answer="question.QuestionAnswer"
      v-model:questions-proposition="question.QuestionPropositions"
      @save="saveQuestion"
    ></question-form>
    <fab-button
      :left="true"
      icon="arrow-left"
      @on-click="goToHome"
    ></fab-button>
  </div>
</template>

<script lang="ts">
import FabButton from '@/components/buttons/FabButton.vue'
import QuestionForm from '@/components/form/QuestionForm.vue'

import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import {
  useInsertQuestionMutation,
  Questions_Insert_Input,
} from '../generated/graphql'

export default defineComponent({
  components: {
    FabButton,
    QuestionForm,
  },
  setup() {
    const router = useRouter()
    const question = reactive({} as Questions_Insert_Input)

    const {
      executeMutation: insertQuestionMutation,
    } = useInsertQuestionMutation()
    const saveQuestion = () => insertQuestionMutation({ Question: question })

    const goToHome = () => {
      router.push({ name: 'Home' })
    }

    return {
      question,
      saveQuestion,
      goToHome,
    }
  },
})
</script>

<style scoped></style>
