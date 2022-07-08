import { NextPage } from 'next'
import Link from 'next/link'
import Menu from '@components/Cmdk'
import { useCallback, useEffect, useState } from 'react'

const Cmdk: NextPage = () => {
  const [open, setOpen] = useState(false)
  const toggle = useCallback((event) => {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault()
      setOpen((open) => !open)
    }

    if (event.key === 'Escape') {
      event.preventDefault()
      setOpen(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', toggle)
    return () => window.removeEventListener('keydown', toggle)
  }, [])

  return (
    <div className='flex flex-col items-center justify-center h-screen select-none !overflow-hidden'>
      <Menu open={open} close={() => setOpen(false)} />
      <h1 className='text-9xl w-fit !text-transparent !bg-clip-text !from-gradient-100 !to-gradient-200 !bg-gradient-to-r'>
        React JAX
      </h1>
      <p className='mt-5 text-2xl'>
        Learn more at:{' '}
        <Link href='https://hxrsh.in/cmdk' passHref>
          <a className='link'>hxrsh.in/cmdk</a>
        </Link>
      </p>
    </div>
  )
}

export default Cmdk
