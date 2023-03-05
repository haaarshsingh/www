'use client'

import { FC, useEffect } from 'react'

const Error: FC<{ error: Error }> = ({ error }) => {
  useEffect(() => console.error(error), [error])

  return (
    <div>
      <p>Something fucked up — try refreshing.</p>
    </div>
  )
}

export default Error
