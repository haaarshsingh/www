import React from 'react'

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event
      setMousePosition({ x: clientX, y: clientY })
    }
    document.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return mousePosition
}
