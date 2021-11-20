import React from 'react'

const useWindowDimensions = () => {
  const hasWindow = typeof window !== 'undefined'

  const getWindowDimensions = () => {
    const width = hasWindow ? window.innerWidth : null
    const height = hasWindow ? window.innerHeight : null
    return {
      width,
      height,
    }
  }

  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  )

  React.useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [hasWindow])

  return windowDimensions
}

export default useWindowDimensions
