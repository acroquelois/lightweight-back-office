<template>
  <form
    @submit.prevent="$emit('save')"
    class="p-3 bg-blue-600 flex rounded-md flex-wrap space-y-3"
  >
    <div class="flex w-full">
      <input
        v-model="props.question.Libelle"
        type="text"
        placeholder="Question ?"
        class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
      />
    </div>
    <div class="flex w-2/5" v-if="categories">
      <select
        v-model="props.question.QuestionCategorieId"
        class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
      >
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
        style="transition: all 0.15s ease"
        type="button"
        @click="showModal = true"
      >
        Add
      </button>
    </div>
    <div class="flex w-full ml-2">
      <label class="font-semibold mt-1" for="isPublie">Publish :</label>
      <input
        class="h-8 w-8 ml-3"
        type="checkbox"
        id="isPublie"
        v-model="props.question.IsPublie"
      />
    </div>
    <div class="flex w-full space-x-3">
      <div class="flex-1">
        <input
          v-model="props.questionAnswer.Libelle"
          type="text"
          placeholder="Response"
          class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
        />
      </div>
      <div v-for="index in 3" :key="index" class="flex-1">
        <input
          v-model="props.questionsProposition[index - 1].Libelle"
          type="text"
          :placeholder="`Proposition ${index}`"
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
  </form>
  <question-categorie :show-modal="showModal" @close="closeModal">
  </question-categorie>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import QuestionCategorie from '@/components/modals/QuestionCategorieModal.vue'
import {
  QuestionAnswers_Insert_Input,
  QuestionPropositions_Insert_Input,
  Questions_Insert_Input,
  useGetQuestionCategoriesQuery,
} from '../../generated/graphql'

export default defineComponent({
  components: {
    QuestionCategorie,
  },
  props: {
    question: {
      type: Object as PropType<Questions_Insert_Input>,
      default: null,
    },
    questionAnswer: {
      type: Object as PropType<QuestionAnswers_Insert_Input>,
      default: null,
    },
    questionsProposition: {
      type: Object as PropType<Array<QuestionPropositions_Insert_Input>>,
      default: null,
    },
  },
  emits: ['save'],
  setup(props) {
    const showModal = ref(false)
    const { data: categories } = useGetQuestionCategoriesQuery()
    const closeModal = () => {
      showModal.value = false
    }
    return {
      props,
      categories,
      closeModal,
      showModal,
    }
  },
})
</script>

<style scoped></style>
