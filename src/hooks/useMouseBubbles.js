import { useEffect, useRef } from 'react'

export function useMouseBubbles() {
  const bubblesRef = useRef([])
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return

      // Create bubble at mouse position
      const bubble = document.createElement('div')
      bubble.className = 'mouse-bubble'
      
      // Random size between 4px and 12px
      const size = Math.random() * 8 + 4
      bubble.style.width = size + 'px'
      bubble.style.height = size + 'px'
      bubble.style.left = e.clientX + 'px'
      bubble.style.top = e.clientY + 'px'
      
      containerRef.current.appendChild(bubble)

      // Remove bubble after animation completes
      setTimeout(() => {
        bubble.remove()
      }, 1500)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return containerRef
}
