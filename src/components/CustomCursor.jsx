import { useEffect, useState } from 'react'

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const move = (event) => setPosition({ x: event.clientX, y: event.clientY })
    const onDown = () => setActive(true)
    const onUp = () => setActive(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  return (
    <>
      <span className={`cursor-ring ${active ? 'active' : ''}`} style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }} />
      <span className="cursor-dot" style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }} />
    </>
  )
}

export default CustomCursor
