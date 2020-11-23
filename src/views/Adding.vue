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
      <div class="flex w-2/5">
        <input
          type="text"
          placeholder="Categorie"
          class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
        />
      </div>
      <!--      <div class="flex w-1/2">-->
      <!--        <span class="w-full text-white text-sm font-semibold"-->
      <!--          >Add question categorie:</span-->
      <!--        >-->
      <!--        <input-->
      <!--          type="text"-->
      <!--          placeholder="New categorie"-->
      <!--          class="w-full px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"-->
      <!--        />-->
      <!--      </div>-->
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
          class="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="submit"
          style="transition: all 0.15s ease"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watchEffect, defineComponent } from 'vue'
import { Query_RootQuestionsArgs } from '@/generated/graphql'
import { GET_QUESTIONS } from '@/graphql/graphql'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {},
})
</script>

<style scoped></style>
