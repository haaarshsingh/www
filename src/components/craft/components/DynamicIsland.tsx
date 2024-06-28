'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Post from '../Post'

export default () => {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState(0)

  const select = (i: number) => {
    console.log(buttons[i].dimensions?.h)

    // if (ref.current) {
    //   const keyframes = [
    //     {
    //       height: `${buttons[state].dimensions?.h}px`,
    //       width: `${buttons[state].dimensions?.w}px`,
    //     },
    //     {
    //       height: `${buttons[i].dimensions?.h}px`,
    //       width: `${buttons[i].dimensions?.w}px`,
    //     },
    //   ]

    //   const options: KeyframeAnimationOptions = {
    //     duration: 100,
    //     easing: 'ease-in-out',
    //     fill: 'forwards',
    //   }

    //   ref.current.animate(keyframes, options)
    // }

    setState(i)
  }

  const buttons = [
    {
      label: 'Idle',
      onClick: () => select(0),
      dimensions: { w: 96, h: 28 },
    },
    {
      label: 'Face ID',
      onClick: () => select(1),
      dimensions: { w: 96, h: 96 },
    },
    {
      label: 'Call',
      onClick: () => setState(2),
      dimensions: { w: 96, h: 96 },
    },
    {
      label: 'Music',
      onClick: () => setState(3),
      dimensions: { w: 96, h: 96 },
    },
  ]

  return (
    <Post
      title='Dynamic Island'
      description="Recreation of Apple's dynamic island for the web."
      tags={['react', 'tailwindcss', 'framer motion']}
      className='relative overflow-hidden'
    >
      <motion.div
        initial={{ width: 100, height: 28 }}
        animate={{
          width: buttons[state].dimensions.w,
          height: buttons[state].dimensions.h,
        }}
        className='absolute mt-6 top-0 flex items-center justify-center rounded-[28px] bg-black mb-36'
        ref={ref}
      >
        {state === 1 && <FaceId />}
      </motion.div>
      <div className='absolute bottom-0 gap-x-2 w-full border-t border-t-neutral-200 bg-neutral-100 py-3 flex items-center justify-center'>
        {buttons.map((button, index) => (
          <button
            className='text-sm bg-neutral-50 rounded px-3 border border-neutral-400/50 py-1'
            onClick={button.onClick}
            key={index}
          >
            {button.label}
          </button>
        ))}
      </div>
    </Post>
  )
}

const FaceId = () => (
  <svg
    width='50'
    height='50'
    viewBox='0 0 50 50'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12.2222 2H7.11111C4.28832 2 2 4.28832 2 7.11111V12.2222'
      stroke='#D9D9D9'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M37.7778 2H42.8889C45.7117 2 48 4.28832 48 7.11111V12.2222'
      stroke='#D9D9D9'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M35.2222 14.7778V19.8889'
      stroke='#D9D9D9'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M14.7778 14.7778V19.8889'
      stroke='#D9D9D9'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M17.3333 35.2222C17.3333 35.2222 19.8889 37.7777 25 37.7777C30.1111 37.7777 32.6666 35.2222 32.6666 35.2222'
      stroke='#D9D9D9'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M24.9999 14.7778V27.5556H22.4444'
      stroke='#D9D9D9'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M12.2222 48H7.11111C4.28832 48 2 45.7118 2 42.8889V37.7778'
      stroke='#D9D9D9'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M37.7778 48H42.8889C45.7117 48 48 45.7118 48 42.8889V37.7778'
      stroke='#D9D9D9'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
)
