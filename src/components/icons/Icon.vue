<template>
  <div
    v-html="require(`../../assets/icons/${props.name}.svg`)"
    class="icon"
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

<style scoped>
.icon {
  height: 1em;
  width: 1em;
  vertical-align: -0.125em;
}
</style>
