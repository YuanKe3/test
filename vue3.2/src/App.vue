<template>
  <div class="header">
    <div class="a">{{ arr }}</div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const title = ref('haha')
const arr = reactive(['haha', 1])
</script>

<style scoped></style>
