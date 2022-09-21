import { useState, FC, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IoArrowUp } from 'react-icons/io5'
import { styled } from '@css/theme.config'

const Button = styled(motion.button, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  bottom: 32,
  right: 32,
  fontSize: 20,
  borderRadius: 99,
  cursor: 'pointer',
  backgroundColor: '$grey0',
  color: '$grey900',
  position: 'fixed',
})

const BackToTop: FC = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setShowButton(window.pageYOffset > 500)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {showButton && (
        <Button
          className='flex justify-center items-center p-5 bottom-8 right-8 text-xl rounded-full cursor-pointer bg-white text-gray-900 fixed'
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <IoArrowUp size={24} />
        </Button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
