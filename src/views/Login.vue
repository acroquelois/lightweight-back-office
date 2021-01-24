<template>
  <div class="h-screen flex justify-center">
    <div class="self-center text-gray-700 bg-gray-200 rounded-md">
      <form action="#" @submit.prevent="submit">
        <div class="space-y-4 px-8 py-4">
          <span class="text-4xl font-bold">Sign In</span>
          <div class="relative flex w-full flex-wrap items-stretch mb-3">
            <span
              class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
            >
              <icon name="user" color="#D1D5DB"></icon>
            </span>
            <input
              type="text"
              v-model="userAuth.username"
              placeholder="Username"
              class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
            />
          </div>
          <div class="relative flex w-full flex-wrap items-stretch mb-3">
            <span
              class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
            >
              <icon name="lock" color="#D1D5DB"></icon>
            </span>
            <input
              v-model="userAuth.password"
              type="password"
              placeholder="Password"
              class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
            />
          </div>
          <div class="flex justify-center">
            <button
              class="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="submit"
              style="transition: all 0.15s ease"
            >
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Icon from '@/components/icons/Icon.vue'

export default defineComponent({
  components: {
    Icon,
  },
  setup() {
    const router = useRouter()
    const store = useStore()

    const userAuth = reactive({
      username: '',
      password: '',
    })

    const submit = async () => {
      await store.dispatch('logIn', userAuth)
      await router.push({ name: 'Home' })
    }

    return {
      userAuth,
      submit,
    }
  },
})
</script>
