<template>
  <div class="layout flex items-center justify-end bg-blue-600">
    <icon
      class="mb-2 mr-6"
      name="logout"
      color="rgba(229, 231, 235, 1)"
      :clickable="true"
      @on-click="logout"
    ></icon>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Icon from '@/components/icons/Icon.vue'

export default defineComponent({
  components: {
    Icon,
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const logout = () => {
      store.dispatch('removeToken')
      router.push({ name: 'Login' })
    }

    return {
      logout,
    }
  },
})
</script>

<style scoped>
.layout {
  height: 40px;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
}
</style>
