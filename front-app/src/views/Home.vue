<template>
  <div class="mx-32 justify-center">
    <div class="mt-8 text-4xl font-bold">
      <span>Questions list:</span>
    </div>

    <div
      class="mt-3 py-2 text-white font-semibold bg-blue-600 flex rounded-t-md"
    >
      <div class="flex flex-1 max-w-xs justify-center" style="max-width: 200px">
        <span class="px-3">Type</span>
      </div>
      <div class="flex flex-1 justify-center">
        <span class="px-3">Question</span>
      </div>
      <div class="flex flex-1 justify-center">
        <span class="px-3">Response</span>
      </div>
      <div class="flex flex-1 justify-center">
        <span class="px-3">Propositions</span>
      </div>
      <div class="flex flex-1 justify-center">
        <span class="px-3">IsPublie</span>
      </div>
      <div class="flex flex-1 justify-center" style="max-width: 100px">
        <span class="px-3">Action</span>
      </div>
    </div>
    <div class="p-1 bg-blue-200 space-y-1 rounded-b-md">
      <span v-if="isFetching">Loading...</span>
      <div
        v-else-if="questions.Questions.length"
        class="flex"
        v-for="question in questions.Questions"
        :key="question.Id"
      >
        <div class="p-1 flex flex-1 bg-gray-200 rounded-md">
          <div
            class="flex flex-1 max-w-sm justify-center"
            style="max-width: 200px"
          >
            <span class="px-3">{{ question.QuestionCategory.Libelle }}</span>
          </div>
          <div class="flex flex-1">
            <span class="px-3">{{ question.Libelle }}</span>
          </div>
          <div class="flex flex-1 justify-center">
            <span class="px-3">{{ question.QuestionAnswer.Libelle }}</span>
          </div>
          <div class="flex flex-1 justify-center">
            <span class="px-3">{{
              computePropositions(question.QuestionPropositions)
            }}</span>
          </div>
          <div class="flex flex-1 justify-center items-center">
            <input
              class="h-5 w-5"
              type="checkbox"
              v-model="question.IsPublie"
              disabled
            />
          </div>
          <div class="flex-1" style="max-width: 100px">
            <div class="flex justify-center">
              <icon
                class="mr-2"
                name="edit-2"
                color="#2563EB"
                :clickable="true"
                @on-click="editQuestion(question.Id)"
              ></icon>
              <icon
                class="ml-2"
                name="trash-2"
                color="#EF4444"
                :clickable="true"
                @on-click="deleteQuestion(question.Id)"
              ></icon>
            </div>
          </div>
        </div>
      </div>
      <span v-else>No question to diplay</span>
    </div>
    <fab-button icon="plus" @on-click="goToAdding"></fab-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  useGetAllQuestionQuery,
  useDeleteQuestionByPkMutation,
  QuestionPropositions,
} from '../generated/graphql'
import Icon from '@/components/icons/Icon.vue'
import FabButton from '@/components/buttons/FabButton.vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

export default defineComponent({
  components: {
    Icon,
    FabButton,
  },
  setup() {
    const router = useRouter()
    const toast = useToast()

    const showDeleteModal = ref(false)
    const getAllQuestionQuery = useGetAllQuestionQuery({
      requestPolicy: 'network-only',
    })

    const editQuestion = (id: number) => {
      router.push({ name: 'Edit', params: { id: id } })
    }

    const {
      executeMutation: deleteQuestionMutation,
    } = useDeleteQuestionByPkMutation()

    const deleteQuestion = (id: number) => {
      if (id)
        deleteQuestionMutation({ Id: id })
          .then(() => toast.success('Question deleted with success'))
          .catch(() => toast.error('Question deleted with error'))
    }

    const computePropositions = (propositions: any) => {
      let response = ''
      propositions.forEach(
        (proposition: QuestionPropositions, index: number) => {
          response += `${proposition.Libelle}${
            index == propositions.length - 1 ? '' : ' | '
          }`
        },
      )
      return response
    }

    const goToAdding = () => {
      router.push({ name: 'Add' })
    }

    return {
      questions: getAllQuestionQuery.data,
      isFetching: getAllQuestionQuery.fetching,
      isDone: getAllQuestionQuery.stale,
      computePropositions,
      editQuestion,
      showDeleteModal,
      deleteQuestion,
      goToAdding,
    }
  },
})
</script>
