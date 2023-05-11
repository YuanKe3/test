const obj = {}
let newVal = ''
Object.defineProperty(obj, 'name', {
  get() {
    console.log('get')
    return newVal
  },
  set(val) {
    console.log('set')
    newVal = val
  }
})

obj.name = 'es'
console.log(obj.name)

export default {
  obj
}