<template>
  <div class="mx-32 justify-center">
    <div class="mt-8 text-4xl font-bold">
      <span>Add question:</span>
    </div>
    <question-form
      v-model:question="question.data"
      v-model:question-answer="question.data.QuestionAnswer.data"
      v-model:questions-proposition="question.data.QuestionPropositions.data"
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
import { defineComponent, reactive } from 'vue'
import { INSERT_QUESTION } from '@/graphql/graphql'
import { useRouter } from 'vue-router'
import FabButton from '@/components/buttons/FabButton.vue'
import QuestionForm from '@/components/form/QuestionForm.vue'
import { useMutation } from 'villus'

export default defineComponent({
  components: {
    FabButton,
    QuestionForm,
  },
  setup() {
    const router = useRouter()
    const initQuestion = () => {
      return {
        Libelle: '',
        QuestionAnswer: {
          data: {
            Libelle: '',
          },
        },
        QuestionPropositions: {
          data: [
            {
              Libelle: '',
            },
            {
              Libelle: '',
            },
            {
              Libelle: '',
            },
          ],
        },
      }
    }
    const question = reactive({ data: initQuestion() })
    const { execute: executeSaveQuestion } = useMutation(INSERT_QUESTION)

    const saveQuestion = () => {
      const variable = { Question: question.data }
      executeSaveQuestion(variable)
      question.data = initQuestion()
    }

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
