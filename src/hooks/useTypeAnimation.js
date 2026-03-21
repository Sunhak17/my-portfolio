import { useState, useEffect } from 'react'

export function useTypeAnimation(text, speed = 100, delay = 0) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [loop, setLoop] = useState(0)

  useEffect(() => {
    let timeout
    let charIndex = 0

    const typeNextChar = () => {
      if (charIndex < text.length) {
        setDisplayedText(text.substring(0, charIndex + 1))
        charIndex++
        timeout = setTimeout(typeNextChar, speed)
      } else {
        setIsComplete(true)
        timeout = setTimeout(() => {
          setLoop(prev => prev + 1)
        }, 1000)
      }
    }

    const startTimeout = setTimeout(typeNextChar, delay)

    return () => {
      clearTimeout(timeout)
      clearTimeout(startTimeout)
    }
  }, [text, speed, delay, loop])

  return { displayedText, isComplete }
}
