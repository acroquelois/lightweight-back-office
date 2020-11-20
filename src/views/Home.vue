<template>
  <p>Home</p>
  <button
    class="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
    style="transition: all 0.15s ease"
    @click="goToAdding"
  >
    Add
  </button>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const goToAdding = () => {
      router.push({ name: 'Add' })
    }

    return {
      goToAdding,
    }
  },
}
</script>

<style scoped>
.base-width {
  width: 500px;
}
</style>
