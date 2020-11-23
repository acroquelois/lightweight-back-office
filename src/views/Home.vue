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
        <span class="px-3">Réponse</span>
      </div>
      <div class="flex flex-1 justify-center">
        <span class="px-3">Propositions</span>
      </div>
      <div class="flex flex-1 justify-center" style="max-width: 100px">
        <span class="px-3">Action</span>
      </div>
    </div>
    <template v-if="questions">
      <div class="p-1 bg-blue-200 space-y-1">
        <div
          class="flex"
          v-for="question in questions.Questions"
          :key="question.Id"
        >
          <div class="p-1 flex flex-1 bg-gray-200 rounded-md">
            <div class="flex flex-1 max-w-sm justify-center" style="max-width: 200px">
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
            <div class="flex-1" style="max-width: 100px">
              <div class="flex justify-center">
                <icon
                  class="mr-2"
                  name="edit-2"
                  color="#2563EB"
                  :clickable="true"
                  @on-click="editQuestion"
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
      </div>
    </template>
    <delete-modal
      title="Delete"
      message="Do you want delete this question ?"
      :show-modal="showDeleteModal"
      @close="showDeleteModal = false"
      @accept="deleteQuestion"
    ></delete-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, watch } from 'vue'
import { UnwrapRef } from 'vue-demi'
import { useMutation, useQuery } from 'villus'
import {
  Query_RootQuestionsArgs,
  Query_Root,
  QuestionPropositions,
  Questions,
} from '@/generated/graphql'
import { GET_QUESTIONS, DELETE_QUESTIONS } from '@/graphql/graphql'
import Icon from '@/components/icons/Icon.vue'
import DeleteModal from '@/components/modals/DeleteModal.vue'

interface QuestionsResponse {
  Questions: Query_Root['Questions']
}

export default defineComponent({
  components: {
    Icon,
    DeleteModal,
  },
  setup() {
    const showDeleteModal = ref(false)
    const { data, execute: executeGet } = useQuery<
      QuestionsResponse,
      Query_RootQuestionsArgs
    >({
      query: GET_QUESTIONS,
      cachePolicy: 'network-only',
    })
    const questions = data

    const editQuestion = () => {
      console.log('ping icon')
    }
    const { execute: executeDelete, isDone: doneDelete } = useMutation(
      DELETE_QUESTIONS,
    )
    const deleteQuestion = (id: number) => {
      if (id) {
        const variables = {
          id: id,
        }
        executeDelete(variables)
      }
    }

    watchEffect(() => {
      if (doneDelete.value) {
        executeGet()
        doneDelete.value = false
      }
    })

    const computePropositions = (
      propositions: UnwrapRef<Questions['QuestionPropositions']>,
    ) => {
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
    return {
      questions,
      computePropositions,
      editQuestion,
      showDeleteModal,
      deleteQuestion,
    }
  },
})
</script>

<style scoped></style>
