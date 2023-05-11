<template>
  <div>
    <input v-model="name" />
    <input v-model="info.city" />
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      name: 'yuanke',
      info: {
        city: 'guangzhou'
      }
    }
  },
  watch: {
    name(oldVal, val) {
      console.log(oldVal, val)
    },
    info: {
      handler(oldVal, val) {
        console.log(oldVal, val)
      },
      deep: true
    }
  }
}
</script>

<style scoped></style>
