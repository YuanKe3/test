<template>
  <div>
    <p>文本插值 {{ message }}</p>
    <p>JS 表达式 {{ flag ? 'yes' : 'no' }}</p>
    <p :id="dynamicId">动态属性</p>
    <hr />
    <p v-html="rawHtml">
      <span>有 xss 风险</span>
      <span>使用 v-html 之后，将会覆盖子元素</span>
    </p>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      message: 'hello vue',
      rawHtml: '指令 - 原始 html <b>加粗</b> <i>斜体</i>',
      dynamicId: `id-${Date.now()}`,
      flag: true
    }
  }
}
</script>

<style scoped></style>
