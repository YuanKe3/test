<template>
  <div></div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'child',
  methods: {
    // 函数名和 vuex 定义的一样时
    ...mapMutations(['getName']),
    ...mapMutations({
      set: 'setName'
    })
  },
  mounted() {
    this.set({ name: 'haha' })
    this.getName()
  }
}
</script>
