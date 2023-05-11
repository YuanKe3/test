<template>
  <button @click="changeValue">{{ value }}</button>
  {{ nickName }}
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(20)
const emit = defineEmits(['sayHello'])
const changeValue = () => {
  emit('sayHello', 30)
}

defineProps<{ nickName: number }>()
</script>
