'use client'

import { FC, useEffect } from 'react'

const Error: FC<{ error: Error }> = ({ error }) => {
  useEffect(() => console.error(error), [error])

  return (
    <div>
      <p>Something fucked up — try refreshing.</p>
      <p>Computers were made to solve errors that didn't before</p>
      <p>
        After wanting to create a nonpareil website, I found love in minimalism.
        On this site, subtle animations, simple colors and simplicity work
        together to reflect my new values of design of accessibility and
        performance.
      </p>
    </div>
  )
}

export default Error
