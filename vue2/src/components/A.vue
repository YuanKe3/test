<template>
  <div>state A</div>
</template>

<script>
export default {
  mounted() {
    console.log('A mounted')
  },
  destroyed() {
    console.log('A destroyed')
  }
}
</script>

<style scoped></style>
