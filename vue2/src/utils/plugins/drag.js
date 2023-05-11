export default {
  bind(el, binding, vnode, oldVnode) {
    const value = binding.value
    if (value === false) return
    el.style.cursor = 'move'
    el.style.position = 'relative'
    const mouseDown = e => {
      // 获取鼠标在块内的坐标(左上为 0,0)
      const x = e.clientX - el.offsetLeft
      const y = e.clientY - el.offsetTop
      const move = e => {
        el.style.left = e.clientX - x + 'px'
        el.style.top = e.clientY - y + 'px'
      }
      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', move)
      })
    }
    el.addEventListener('mousedown', mouseDown)
  },
  unbind(el, binding) {
    document.removeEventListener('mousedown')
  }
}
