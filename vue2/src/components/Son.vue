<template>
  <div>
    {{ son }}
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      son: 1
    };
  },
  methods: {
    changeSon() {
      this.son = 118
    }
  }
};
</script>

<style scoped></style>
