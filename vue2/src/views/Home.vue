<template>
  <div id="demo">
    <button @click="toAnotherPage1">点我进另一个页面1</button>
    <button @click="addQuery1">点我给页面1添加参数</button>
    <button @click="toAnotherPage2">点我进另一个页面2</button>
    <input v-model="watchQuery" />
    <router-view></router-view>
    <div class="block" v-drag="true">我是可拖拽的块</div>

    {{ obj }}
    <button @click="changeObj">change obj</button>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      watchQuery: "",
      obj: {
        name: "zhangsan",
        info: {
          hobby: "basketball"
        }
      }
    };
  },
  created() {
    this.watchQuery = this.$route.query.name || "";
  },
  watch: {
    $route: {
      handler(newVal, oldVal) {
        this.watchQuery = this.$route.query.name || "";
      },
      immediate: true
    },
    watchQuery(newVal, oldVal) {
      this.$router.replace({ query: { name: newVal } });
    }
  },
  methods: {
    changeObj() {
      // this.obj.age = 18
      // this.$set(this.obj, 'age', 18)
      this.obj = { ...this.obj, age: 18, address: 'guangzhou' };
    },
    toAnotherPage1() {
      this.$router.push("/demo1");
    },
    addQuery1() {
      if (!window.location.search) {
        this.$router.replace({
          query: { name: "zhangsan！……%……5￥……54#$%^^&&*(()__+)" }
        });
      }
    },
    toAnotherPage2() {
      this.$router.push("/demo2");
    }
  }
};
</script>

<style scoped>
.block {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>
