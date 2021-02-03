<template>
  <div>
    <div
      v-if="props.showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="relative w-auto my-6 mx-auto max-w-sm">
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <div
            class="flex items-start justify-between px-5 py-3 border-b border-solid border-gray-300 rounded-t"
          >
            <h3 class="text-2xl font-semibold">Add question categorie</h3>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              @click="close"
            >
              <span
                class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
              >
                ×
              </span>
            </button>
          </div>
          <div class="relative p-6 flex-auto">
            <input
              v-model="categorie"
              type="text"
              placeholder="New categorie"
              class="w-full px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>
          <div
            class="flex items-center justify-end p-4 border-t border-solid border-gray-300 rounded-b"
          >
            <button
              class="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1"
              type="button"
              style="transition: all 0.15s ease"
              @click="close"
            >
              Close
            </button>
            <button
              class="text-blue-500 background-transparent font-bold uppercase text-sm outline-none hover:bg-blue-500 hover:text-white rounded focus:outline-none px-6 py-3 mr-1"
              type="button"
              style="transition: all 0.15s ease"
              @click="saveCategorie"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="props.showModal"
      class="opacity-25 fixed inset-0 z-40 bg-black"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { INSERT_QUESTION_CATEGORIE } from '../../graphql/graphql'
import { useMutation } from 'villus'

export default defineComponent({
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close'],
  setup(props, emits) {
    const categorie = ref('')
    const { execute } = useMutation(INSERT_QUESTION_CATEGORIE)

    const saveCategorie = () => {
      if (categorie.value.length) {
        const variable = {
          QuestionCategorie: {
            Libelle: categorie.value,
          },
        }
        execute(variable).then(() => {
          emits.emit('close')
        })
        categorie.value = ''
      }
    }

    const close = () => {
      categorie.value = ''
      emits.emit('close')
    }

    return {
      props,
      saveCategorie,
      categorie,
      close,
    }
  },
})
</script>
