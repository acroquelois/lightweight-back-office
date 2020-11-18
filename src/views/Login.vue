<template>
  <div class="h-screen flex justify-center">
    <div class="self-center text-gray-700 bg-gray-200 rounded-md">
      <form action="#" @submit.prevent="submit">
        <div class="space-y-4 px-8 py-4">
          <span class="text-4xl font-bold">Sign In</span>
          <input
            v-model="username"
            type="text"
            placeholder="Username"
            class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
          />
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
          />
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
import { Vue } from 'vue-class-component'
import firebase from 'firebase'

export default class Login extends Vue {
  username = ''
  password = ''

  $router: any

  submit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.username, this.password)
      .then(() => {
        this.$router.replace({ name: 'Home' })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
