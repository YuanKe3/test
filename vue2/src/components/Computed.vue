<template>
  <div>
    <input v-model="double2" />
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      num: 20
    }
  },
  computed: {
    double2: {
      get() {
        return this.num * 2
      },
      set(val) {
        this.num = val
      }
    }
  }
}
</script>

<style scoped></style>
