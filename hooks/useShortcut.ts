import { useCallback, useEffect, useState } from 'react'

const useShortcut = (
  targetKey: string,
  shift?: boolean,
  ctrl?: boolean
): boolean => {
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = useCallback((event) => {
    if (event.key === targetKey) {
      if (shift && event.shiftKey) {
        event.preventDefault()
        setKeyPressed(true)
      } else if (ctrl && event.ctrlKey) {
        event.preventDefault()
        setKeyPressed(true)
      } else if (!shift && !ctrl) {
        event.preventDefault()
        setKeyPressed(true)
      }
    }
  }, [])

  const upHandler = useCallback((event) => {
    if (event.key === targetKey) setKeyPressed(false)
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [])

  return keyPressed
}

export default useShortcut
