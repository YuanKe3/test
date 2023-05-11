<script>
export default {
  name: "demo1",
  data() {
    return {
      title: "demo1",
      num: 2
    };
  },
  // h 就是 createElement
  render: function(h) {
    console.log(this);
    return h(
      "h1",
      {
        style: {
          color: "red"
        }
      },
      "haha"
    );
  }
};
</script>

<style scoped></style>
