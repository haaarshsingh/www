import React from 'react'
import useMousePosition from '@hooks/useMousePosition'
import { MouseContext } from '@lib/Mouse/MouseContext'

import { styled } from '@css/theme.config'

const Ring = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: 50,
  height: 50,
  border: '2px solid white',
  borderRadius: '100%',
  transform: 'translate(-50%, -50%)',
  transition: '0.2s ease-out',
  zIndex: 999,
  pointerEvents: 'none',
  '@iPad': {
    display: 'none',
  },
})

const Dot = styled('div', {
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: 10,
  height: 10,
  backgroundColor: 'white',
  borderRadius: '100%',
  transform: 'translate(-50%, -50%)',
  zIndex: 999,
  pointerEvents: 'none',
  '@iPad': {
    display: 'none',
  },
})

const Cursor: React.FC = () => {
  const { x, y } = useMousePosition()
  const { cursorType, cursorChangeHandler } = React.useContext(MouseContext)

  React.useEffect(() => {
    document.addEventListener('mousedown', () => cursorChangeHandler('hovered'))
    document.addEventListener('mouseup', () => cursorChangeHandler(''))

    const links = Array.from(document.getElementsByTagName('a'))
    links.forEach((element) => {
      element.addEventListener('mouseover', () =>
        cursorChangeHandler('hovered')
      )
      element.addEventListener('mouseout', () => cursorChangeHandler(''))
    })
  })

  return (
    <>
      <Ring
        className={'ring ' + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></Ring>
      <Dot
        className={'dot ' + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></Dot>
    </>
  )
}

export default Cursor
