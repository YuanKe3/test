<script>
import Vue from 'vue'
export default {
  name: "Child",
  data() {
    return {
      count: 0,
      list: [
        {
          id: 1,
          name: "yuanke",
          age: 18
        },
        {
          id: 2,
          name: "zhangsan",
          age: 20
        }
      ]
    };
  },
  methods: {
    clickCount() {
      console.log(this.count, Vue.globalName, this.age);
      this.$getName()
    }
  },
  props: {},
  directives: {},
  render() {
    return (
      <div>
        <button onClick={this.clickCount}>数量 {this.count}</button>
        {this.list.map(item => {
          return (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.age}</p>
            </div>
          );
        })}
      </div>
    );
  }
};
</script>
