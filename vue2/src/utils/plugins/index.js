import Child from "../../components/Child";
import Loading from "../../components/Loading";
import Vue from "vue";

const renderComponent = component => {
  // 接收组件实例，返回组件的真实 Dom 树和组件实例
  const Constructor = Vue.extend(component);
  // 这是组件实例，还不是 vnode，还没有挂载
  const instance = new Constructor();
  // 获取真实 dom 节点
  const dom = instance.$mount(document.createElement('div')).$el;
  return { instance, dom };
};

export default {
  install(Vue, options) {
    // 1.全局注册组件
    Vue.component("Child", Child);
    // 2.添加实例方法
    Vue.prototype.$getName = function() {
      console.log("my name is " + options.name);
    };
    // 3.添加全局的方法或属性
    Vue.globalName = "yuanke";
    // 4.添加全局混入
    Vue.mixin({
      data() {
        return {
          age: 18
        };
      }
    });
    // 5.注册自定义指令
    const { instance, dom } = renderComponent(Loading);
    Vue.directive("loading", {
      bind(el, binding) {
        // 获取绑定指令的元素的计算样式
        const style = window.getComputedStyle(el);
        if (style.position === "static") el.style.position = "relative";
        el.appendChild(dom);
        // 组件实例是可以直接读取 data 上面的值的
        instance.visible = Boolean(binding.value);
        // el.instance = instance;
      },
      update(el, binding) {
        // el.instance.visible = Boolean(binding.value);
      }
    });
  }
};
