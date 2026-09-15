import { useEffect, useRef } from 'react'

function AnimatedBackground() {
  const canvasRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const glow = glowRef.current
    const ctx = canvas.getContext('2d')

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let w = 0
    let h = 0
    let raf = 0
    let last = performance.now()
    let lastRipple = 0
    let particles = []
    const ripples = []
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(Math.min(110, (w * h) / 16000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }))
    }

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      const now = performance.now()
      if (now - lastRipple > 70) {
        lastRipple = now
        ripples.push({ x: e.clientX, y: e.clientY, r: 0 })
      }
      if (glow) {
        glow.style.opacity = '1'
        glow.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`
      }
    }

    const onLeave = (e) => {
      if (!e.relatedTarget) {
        mouse.x = -9999
        mouse.y = -9999
        if (glow) glow.style.opacity = '0'
      }
    }

    const tick = (now) => {
      const dt = Math.min(32, now - last)
      last = now
      const step = dt / 16

      ctx.clearRect(0, 0, w, h)

      const px = mouse.x
      const py = mouse.y

      for (const p of particles) {
        const dx = p.x - px
        const dy = p.y - py
        const d2 = dx * dx + dy * dy
        const max = 120
        if (d2 < max * max && d2 > 0.01) {
          const d = Math.sqrt(d2)
          const f = ((max - d) / max) * 0.5 * step
          p.x += (dx / d) * f
          p.y += (dy / d) * f
        }
        p.x += p.vx * step
        p.y += p.vy * step
        if (p.x < -12) p.x = w + 12
        else if (p.x > w + 12) p.x = -12
        if (p.y < -12) p.y = h + 12
        else if (p.y > h + 12) p.y = -12
      }

      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < 9800) {
            ctx.strokeStyle = `rgba(103, 153, 254, ${0.11 * (1 - d2 / 9800)})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      ctx.fillStyle = 'rgba(157, 184, 255, 0.55)'
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, 6.283)
        ctx.fill()
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i]
        r.r += 2.4 * step
        if (r.r > 240) {
          ripples.splice(i, 1)
          continue
        }
        const a = 1 - r.r / 240
        ctx.strokeStyle = `rgba(103, 153, 254, ${a * 0.28})`
        ctx.beginPath()
        ctx.arc(r.x, r.y, r.r, 0, 6.283)
        ctx.stroke()
      }

      raf = requestAnimationFrame(tick)
    }

    resize()
    if (reduced) {
      ctx.fillStyle = 'rgba(157, 184, 255, 0.35)'
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, 6.283)
        ctx.fill()
      }
    } else {
      window.addEventListener('resize', resize)
      window.addEventListener('pointermove', onMove, { passive: true })
      document.documentElement.addEventListener('mouseleave', onLeave)
      raf = requestAnimationFrame(tick)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <>
      <canvas className="bg-fx" ref={canvasRef} aria-hidden="true" />
      <div className="bg-fx__glow" ref={glowRef} aria-hidden="true" />
    </>
  )
}

export default AnimatedBackground