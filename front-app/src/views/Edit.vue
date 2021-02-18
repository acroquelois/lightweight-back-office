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
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import {
  QuestionPropositions_Insert_Input,
  useGetQuestionbyIdQuery,
  useUpdateQuestionMutation,
} from '../generated/graphql'
import FabButton from '@/components/buttons/FabButton.vue'
import QuestionForm from '@/components/form/QuestionForm.vue'

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

    const { data: question } = useGetQuestionbyIdQuery({
      variables: { Id: Number(router.currentRoute.value.params.id) },
    })

    const {
      executeMutation: updateQuestionMutation,
    } = useUpdateQuestionMutation()
    const saveQuestion = () =>
      question.value && question.value.Questions_by_pk
        ? updateQuestionMutation({
            Id: question.value.Questions_by_pk.Id,
            Libelle: question.value.Questions_by_pk.Libelle,
            IsPublie: question.value.Questions_by_pk.IsPublie ?? false,
            QuestionCategorieId:
              question.value.Questions_by_pk.QuestionCategorieId,
            QuestionAnswer: question.value.Questions_by_pk.QuestionAnswer,
            QuestionPropositions: question.value.Questions_by_pk
              .QuestionPropositions as QuestionPropositions_Insert_Input,
          })
            .then(() => toast.success('Question updated with success'))
            .catch(() => toast.error('Question updated error'))
        : {}

    return {
      question,
      goToHome,
      saveQuestion,
    }
  },
})
</script>

<style scoped></style>
