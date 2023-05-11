function reactive(target = {}) {
  if (typeof target !== 'object' || target == null) {
    return target
  }
  // 代理配置
  const proxyConf = {
    get(target, key, receiver) {
      // 只处理本身(非原型)的属性
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log('get', key)
      }

      const result = Reflect.get(target, key, receiver)
      // 只有 get 的时候才会递归，所有性能会好很多
      return reactive(result) // 返回结果
    },
    set(target, key, val, receiver) {
      // 不重复修改数据
      const oldVal = target[key]
      if (val === oldVal) return true

      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log('已有的 key', key)
      } else {
        log
      }

      const result = Reflect.set(target, key, val, receiver)
      console.log('set', key, val)
      return result // 是否设置成功
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key)
      console.log('delete property', key)
      return result // 是否设置成功
    }
  }
  // 生成代理对象
  const observed = new Proxy(target, proxyConf)
  return observed
}

const data = {
  name: 'yuanke',
  age: 20,
  info: {
    city: 'beijing'
  }
}

const proxyData = reactive(data)

proxyData.info.city = 'guangzhou'
