'use client'

import { useState, FC, useEffect } from 'react'
import { IoArrowUp } from 'react-icons/io5/index'
import styles from '@css/common.module.css'

const BackToTop: FC = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => setShowButton(window.pageYOffset > 200)
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <button
      className={styles.top}
      onClick={() =>
        window.scrollTo({
          top: showButton ? 0 : document.body.scrollHeight,
          behavior: 'smooth',
        })
      }
      style={{ transform: showButton ? 'rotate(0deg)' : 'rotate(180deg)' }}
      aria-label='Back to top'
    >
      <IoArrowUp size={24} />
    </button>
  )
}

export default BackToTop
