<template>
  <div class="box" style="background: yellow; width: 20px; height: 20px; cursor: pointer;" @click="show"></div>
</template>

<script setup lang='ts'>
import mitt from 'mitt'

type Events = {
  foo: string
}

const emitter = mitt<Events>()
const show = () => {
  emitter.emit('foo', '你好,我是大傻逼')
  console.log('已经结束咧')
}

</script>

<style scoped>

</style>