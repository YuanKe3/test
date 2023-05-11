<template>
  <div>
    <input v-model="title" />
    <button @click="addTitle">add</button>
  </div>
</template>

<script>
import event from '../event'
export default {
  name: '',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTitle() {
      this.$emit('add', this.title)
      // 调用自定义事件 - 触发兄弟组件
      event.$emit('onAddTitle', this.title)
      this.title = ''
    }
  }
}
</script>

<style scoped></style>
