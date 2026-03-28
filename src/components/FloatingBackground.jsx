import { useEffect, useMemo, useRef } from 'react'
import { floatingApps } from '../data/storeData'

const clamp = (value, min, max) => Math.max(min, Math.min(max, value))

function FloatingBackground() {
  const cardsRef = useRef([])
  const itemsRef = useRef([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef(0)

  const items = useMemo(() => Array.from({ length: 12 }).map((_, index) => ({
    ...floatingApps[index % floatingApps.length],
    key: `${floatingApps[index % floatingApps.length].title}-${index}`
  })), [])

  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight

    itemsRef.current = items.map((item) => ({
      ...item,
      x: Math.random() * (width - 180),
      y: Math.random() * Math.max(320, height - 220),
      vx: (Math.random() - 0.5) * 0.58,
      vy: (Math.random() - 0.5) * 0.58,
      size: 124 + Math.random() * 24,
      rotate: (Math.random() - 0.5) * 12,
      depth: 0.82 + Math.random() * 0.16,
      drift: Math.random() * Math.PI * 2,
      opacity: 0.18 + Math.random() * 0.14,
    }))

    const onMove = (event) => {
      mouseRef.current = { x: event.clientX, y: event.clientY }
    }

    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    const onResize = () => {
      const nextWidth = window.innerWidth
      const nextHeight = window.innerHeight
      itemsRef.current = itemsRef.current.map((item) => ({
        ...item,
        x: clamp(item.x, 0, nextWidth - item.size),
        y: clamp(item.y, 0, nextHeight - item.size),
      }))
    }

    const tick = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const mouse = mouseRef.current
      const now = Date.now()

      let nextItems = itemsRef.current.map((item) => {
        let vx = item.vx + Math.sin(now * 0.0005 + item.drift) * 0.003
        let vy = item.vy + Math.cos(now * 0.00055 + item.drift) * 0.003
        let x = item.x + vx * item.depth
        let y = item.y + vy * item.depth

        const centerX = x + item.size / 2
        const centerY = y + item.size / 2
        const dx = centerX - mouse.x
        const dy = centerY - mouse.y
        const distance = Math.hypot(dx, dy)

        if (distance < 180) {
          const force = (180 - distance) / 180
          const safeDistance = Math.max(distance, 1)
          vx += (dx / safeDistance) * force * 1.22
          vy += (dy / safeDistance) * force * 1.22
        }

        if (x <= 0 || x >= w - item.size) vx *= -1
        if (y <= 0 || y >= h - item.size - 40) vy *= -1

        x = clamp(x, 0, w - item.size)
        y = clamp(y, 0, Math.max(240, h - item.size - 40))

        return { ...item, x, y, vx: vx * 0.988, vy: vy * 0.988 }
      })

      // prevent cards from overlapping; nearby cards push each other away
      for (let i = 0; i < nextItems.length; i += 1) {
        for (let j = i + 1; j < nextItems.length; j += 1) {
          const a = nextItems[i]
          const b = nextItems[j]
          const ax = a.x + a.size / 2
          const ay = a.y + a.size / 2
          const bx = b.x + b.size / 2
          const by = b.y + b.size / 2
          const dx = bx - ax
          const dy = by - ay
          const distance = Math.hypot(dx, dy) || 0.001
          const minDistance = (a.size + b.size) * 0.44

          if (distance < minDistance) {
            const overlap = (minDistance - distance) / 2
            const nx = dx / distance
            const ny = dy / distance
            a.x -= nx * overlap
            a.y -= ny * overlap
            b.x += nx * overlap
            b.y += ny * overlap
            a.vx -= nx * 0.018
            a.vy -= ny * 0.018
            b.vx += nx * 0.018
            b.vy += ny * 0.018

            a.x = clamp(a.x, 0, w - a.size)
            a.y = clamp(a.y, 0, Math.max(240, h - a.size - 40))
            b.x = clamp(b.x, 0, w - b.size)
            b.y = clamp(b.y, 0, Math.max(240, h - b.size - 40))
          }
        }
      }

      nextItems.forEach((item, index) => {
        const card = cardsRef.current[index]
        if (card) {
          card.style.transform = `translate3d(${item.x}px, ${item.y}px, 0) rotate(${item.rotate + item.vx * 6}deg) scale(${item.depth})`
          card.style.opacity = `${item.opacity}`
        }
      })

      itemsRef.current = nextItems
      rafRef.current = window.requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('resize', onResize)
    rafRef.current = window.requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('resize', onResize)
      window.cancelAnimationFrame(rafRef.current)
    }
  }, [items])

  return (
    <div className="floating-background" aria-hidden="true">
      <div className="ambient-glow ambient-one" />
      <div className="ambient-glow ambient-two" />
      {items.map((item, index) => (
        <div
          key={item.key}
          ref={(node) => {
            cardsRef.current[index] = node
          }}
          className="bg-floating-card"
        >
          <img src={item.image} alt="" />
          <div className="bg-floating-copy">
            <strong>{item.title}</strong>
            <span>{item.tag}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FloatingBackground
