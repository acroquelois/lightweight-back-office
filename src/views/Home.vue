<template>
  <p>{{ data }}</p>
</template>

<script lang="ts">
import { useQuery } from 'villus'

export default {
  setup() {
    const { data } = useQuery({
      query: '{ Questions { Id \n Libelle \n }}',
    })

    return { data }
  },
}
</script>

<style scoped>
.base-width {
  width: 500px;
}
</style>
