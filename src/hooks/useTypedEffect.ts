import { useEffect, useState } from 'react'

type Options = {
  typeSpeed?: number
  deleteSpeed?: number
  pauseAfterType?: number
  pauseBeforeType?: number
}

export function useTypedEffect(
  words: readonly string[],
  {
    typeSpeed = 65,
    deleteSpeed = 35,
    pauseAfterType = 1400,
    pauseBeforeType = 300,
  }: Options = {},
) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing')

  useEffect(() => {
    if (words.length === 0) return

    const current = words[wordIndex % words.length]

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          typeSpeed,
        )
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('pausing'), pauseAfterType)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'pausing') {
      setPhase('deleting')
      return
    }

    if (phase === 'deleting') {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed((d) => d.slice(0, -1)),
          deleteSpeed,
        )
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => {
          setWordIndex((i) => (i + 1) % words.length)
          setPhase('typing')
        }, pauseBeforeType)
        return () => clearTimeout(t)
      }
    }
  }, [displayed, phase, wordIndex, words, typeSpeed, deleteSpeed, pauseAfterType, pauseBeforeType])

  return displayed
}
