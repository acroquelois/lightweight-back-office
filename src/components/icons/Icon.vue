<template>
  <div
    v-html="require(`../../assets/icons/${props.name}.svg`)"
    class="w-4 h-4"
    :style="`color: ${props.color};${props.clickable ? 'cursor:pointer' : ''}`"
    @click="$emit('on-click')"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  emits: ['on-click'],
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'black',
    },
    clickable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return { props }
  },
})
</script>
