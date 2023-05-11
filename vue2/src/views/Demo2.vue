<script>
const Tree = {
  name: "Tree",
  props: {
    // 后台传来的树结构
    data: Array,
    // 树距离左侧的距离
    offset: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      // 将后台传来的数组的第一层设为 false
      showChildren: this.data.map(() => false)
    };
  },
  methods: {
    change(index) {
      this.$set(this.showChildren, index, !this.showChildren[index]);
    }
  },
  render() {
    const { data, offset, showChildren, change } = this;
    return (
      <div class="tree-box">
        {data.map((node, index) => {
          if (node.children && node.children.length) {
            return (
              <div class="father-node">
                <div
                  class="node-label"
                  onClick={() => change(index)}
                  style={{ paddingLeft: offset + "px" }}
                >
                  <span class="icon">{showChildren[index] ? "↓" : "→"}</span>
                  <span>{node.label}</span>
                </div>
                {showChildren[index] ? (
                  <Tree data={node.children} offset={offset + 20}></Tree>
                ) : null}
              </div>
            );
          }
          return (
            <div class="node-label" style={{ paddingLeft: offset + 16 + "px" }}>
              {node.label}
            </div>
          );
        })}
      </div>
    );
  }
};
export default {
  data() {
    return {
      treeData: [
        {
          label: "1",
          children: [
            {
              label: "1-1"
            },
            {
              label: "1-2",
              children: [
                {
                  label: "1-2-1"
                },
                {
                  label: "1-2-2"
                }
              ]
            }
          ]
        },
        {
          label: "2",
          children: [
            {
              label: "2-1"
            },
            {
              label: "2-2"
            },
            {
              label: "2-3"
            }
          ]
        },
        {
          label: "3"
        }
      ]
    };
  },
  render() {
    return <Tree data={this.treeData} />;
  }
};
</script>

<style scoped>
.tree-box {
  color: rgba(0, 0, 0, 0.64);
}
.icon {
  display: inline-block;
  width: 16px;
  font-size: 12px;
  transform: scale(0.8);
  color: #b5b5b5;
}
.node-label {
  height: 20px;
  cursor: pointer;
}
.node-label:hover {
  background: #f7f7f7;
}
</style>
