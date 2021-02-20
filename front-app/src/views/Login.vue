<template>
  <div class="h-screen flex justify-center">
    <div class="self-center text-gray-700 bg-gray-200 rounded-md shadow-lg">
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
              {{ isLoading ? 'Loading' : 'Sign in' }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'
import firebase from 'firebase'
import Icon from '@/components/icons/Icon.vue'

export default defineComponent({
  components: {
    Icon,
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const toaster = useToast()

    const isLoading = ref(false)
    const userAuth = reactive({
      username: '',
      password: '',
    })

    const submit = async () => {
      isLoading.value = true
      firebase
        .auth()
        .signInWithEmailAndPassword(userAuth.username, userAuth.password)
        .then((data: any) => {
          data.user?.getIdTokenResult().then(async (idToken: any) => {
            await store.dispatch('setToken', idToken.token)
            await router.push({ name: 'Home' })
          })
        })
        .catch(() => {
          toaster.error('Wrong username or password')
        })
        .finally(() => {
          isLoading.value = false
        })
    }

    return {
      userAuth,
      submit,
      isLoading,
    }
  },
})
</script>
