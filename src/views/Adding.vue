<template>
  <div class="mx-32 justify-center">
    <div class="mt-8 text-4xl font-bold">
      <span>Add question:</span>
    </div>
    <div class="p-3 bg-blue-600 flex rounded-md flex-wrap space-y-3">
      <div class="flex w-full">
        <input
          type="text"
          placeholder="Question ?"
          class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
        />
      </div>
      <div class="flex w-2/5" v-if="categories">
        <select
          class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
        >
          <option value="">--Choose an option--</option>
          <option
            v-for="categorie in categories.QuestionCategories"
            :key="categorie.Id"
            :value="categorie.Id"
          >
            {{ categorie.Libelle }}
          </option>
        </select>
      </div>
      <div class="flex ml-3">
        <button
          class="bg-yellow-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
          type="submit"
          style="transition: all 0.15s ease"
          @click="showModal = true"
        >
          Add
        </button>
      </div>
      <div class="flex w-full space-x-3">
        <div class="flex-1">
          <input
            type="text"
            placeholder="Response"
            class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
          />
        </div>
        <div class="flex-1">
          <input
            type="text"
            placeholder="Proposition 1"
            class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
          />
        </div>
        <div class="flex-1">
          <input
            type="text"
            placeholder="Proposition 2"
            class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
          />
        </div>
        <div class="flex-1">
          <input
            type="text"
            placeholder="Proposition 3"
            class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
          />
        </div>
      </div>
      <div class="flex w-full justify-center">
        <button
          class="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
          type="submit"
          style="transition: all 0.15s ease"
        >
          Save
        </button>
      </div>
    </div>
    <question-categorie :show-modal="showModal" @close="closeModal">
    </question-categorie>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'
import {
  Query_Root,
  Query_RootQuestionsArgs,
  Questions,
} from '@/generated/graphql'
import { GET_QUESTION_CATEGORIES, INSERT_QUESTION } from '@/graphql/graphql'
import { useRouter } from 'vue-router'
import QuestionCategorie from '@/components/modals/QuestionCategorieModal.vue'
import { useMutation, useQuery } from 'villus'

interface QuestionCategoriesResponse {
  QuestionCategories: Query_Root['QuestionCategories']
}

export default defineComponent({
  components: {
    QuestionCategorie,
  },
  setup() {
    const showModal = ref(false)
    const question = ref(null)
    const { execute } = useMutation(INSERT_QUESTION)
    const saveQuestion = () => {
      const variable = { Question: question }
      execute(variable)
    }

    const { data: categoriesResponse, execute: executeGetCategorie } = useQuery<
      QuestionCategoriesResponse,
      any
    >({
      query: GET_QUESTION_CATEGORIES,
      cachePolicy: 'network-only',
    })
    const categories = categoriesResponse

    const closeModal = () => {
      showModal.value = false
      executeGetCategorie()
    }

    return {
      question,
      showModal,
      categories,
      closeModal,
    }
  },
})
</script>

<style scoped></style>
