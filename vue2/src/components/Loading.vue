<template>
  <div v-show="visible">加载中...</div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      visible: true,
      ageeeee: 18
    }
  }
}
</script>

<style scoped>
div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: white;
}
</style>
