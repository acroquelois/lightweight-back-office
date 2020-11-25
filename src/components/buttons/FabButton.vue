<template>
  <button
    :class="`${props.left ? 'left-0 ml-10' : 'right-0 mr-10'}
    absolute bottom-0 mb-10 bg-blue-600 active:bg-blue-700 text-white rounded-full h-16 w-16 flex justify-center shadow hover:shadow-lg outline-none focus:outline-none`"
    style="transition: all 0.15s ease"
    @click="$emit('on-click')"
  >
    <icon class="self-center mr-2 mb-1" :name="icon" color="white"></icon>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '@/components/icons/Icon.vue'

export default defineComponent({
  components: {
    Icon,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    left: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['on-click'],
  setup(props) {
    return {
      props,
    }
  },
})
</script>

<style scoped></style>
