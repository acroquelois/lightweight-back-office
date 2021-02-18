<template>
  <div class="mx-32 justify-center">
    <div class="mt-8 text-4xl font-bold">
      <span>Add question:</span>
    </div>
    <question-form
      v-model:question="question"
      v-model:question-answer="question.QuestionAnswer.data"
      v-model:questions-proposition="question.QuestionPropositions.data"
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

import { defineComponent, reactive, UnwrapRef } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
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
    const toast = useToast()

    const goToHome = () => {
      router.push({ name: 'Home' })
    }

    const createEmptyQuestion = (): Questions_Insert_Input => {
      return {
        QuestionAnswer: { data: {} },
        QuestionPropositions: {
          data: [{}, {}, {}],
        },
      }
    }
    const question: UnwrapRef<Questions_Insert_Input> = reactive(
      createEmptyQuestion(),
    )

    const {
      executeMutation: insertQuestionMutation,
    } = useInsertQuestionMutation()

    const saveQuestion = () =>
      insertQuestionMutation({ Question: question })
        .then(() => {
          toast.success('Question added with success')
          goToHome()
        })
        .catch(() => {
          toast.error('Question added error')
        })

    return {
      question,
      saveQuestion,
      goToHome,
    }
  },
})
</script>

<style scoped></style>
