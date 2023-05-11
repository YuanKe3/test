import { useEffect, useState } from 'react'

export function useMousePosition() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    function mouseMoveHandler(event) {
      setX(event.clientX)
      setY(event.clientY)
    }
    document.body.addEventListener('mousemove', mouseMoveHandler)
    return () => document.body.removeEventListener('mousemove', mouseMoveHandler)
  }, [])

  return [x, y]
}
