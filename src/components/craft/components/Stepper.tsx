'use client'

import { useEffect, useRef, useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import Post from '../Post'
import clsx from 'clsx'

export default () => {
  const [count, setCount] = useState(0)
  const [prevCount, setPrevCount] = useState(0)

  const prevCountRef = useRef<HTMLElement>(null)
  const nextCountRef = useRef<HTMLElement>(null)
  const prevCountTens = useRef<HTMLElement>(null)
  const nextCountTens = useRef<HTMLElement>(null)
  const prevCountHunds = useRef<HTMLElement>(null)
  const nextCountHunds = useRef<HTMLElement>(null)

  const add = () => {
    if (count < 999) {
      setPrevCount(count)
      setCount((prevCount) => prevCount + 1)
    }
  }

  const subtract = () => {
    if (count > 0) {
      setPrevCount(count)
      setCount((prevCount) => prevCount - 1)
    }
  }

  useEffect(() => {
    const prev = prevCountRef.current
    const next = nextCountRef.current
    const prevTens = prevCountTens.current
    const nextTens = nextCountTens.current
    const prevHunds = prevCountTens.current
    const nextHunds = nextCountTens.current

    if (prev && next) {
      if (count > prevCount) {
        prev.classList.add('slide-out-up')
        next.classList.add('slide-in-up')
      } else {
        prev.classList.add('slide-out-down')
        next.classList.add('slide-in-down')
      }

      const handleAnimationEnd = () => {
        prev.classList.remove('slide-out-up', 'slide-out-down')
        next.classList.remove('slide-in-up', 'slide-in-down')
        prev.removeEventListener('animationend', handleAnimationEnd)
      }

      prev.addEventListener('animationend', handleAnimationEnd)
    }

    if (
      prevTens &&
      nextTens &&
      Math.floor(count / 10) !== Math.floor(prevCount / 10)
    ) {
      if (Math.floor(count / 10) > Math.floor(prevCount / 10)) {
        prevTens.classList.add('slide-out-up')
        nextTens.classList.add('slide-in-up')
      } else if (Math.floor(count / 10) < Math.floor(prevCount / 10)) {
        prevTens.classList.add('slide-out-down')
        nextTens.classList.add('slide-in-down')
      }

      const handleAnimationEndTens = () => {
        prevTens.classList.remove('slide-out-up', 'slide-out-down')
        nextTens.classList.remove('slide-in-up', 'slide-in-down')
        prevTens.removeEventListener('animationend', handleAnimationEndTens)
      }

      prevTens.addEventListener('animationend', handleAnimationEndTens)
    }

    if (
      prevHunds &&
      nextHunds &&
      Math.floor(count / 100) !== Math.floor(prevCount / 100)
    ) {
      if (Math.floor(count / 100) > Math.floor(prevCount / 100)) {
        prevHunds.classList.add('slide-out-up')
        nextHunds.classList.add('slide-in-up')
      } else if (Math.floor(count / 100) < Math.floor(prevCount / 100)) {
        prevHunds.classList.add('slide-out-down')
        nextHunds.classList.add('slide-in-down')
      }

      const handleAnimationEndTens = () => {
        prevHunds.classList.remove('slide-out-up', 'slide-out-down')
        nextHunds.classList.remove('slide-in-up', 'slide-in-down')
        prevHunds.removeEventListener('animationend', handleAnimationEndTens)
      }

      prevHunds.addEventListener('animationend', handleAnimationEndTens)
    }
  }, [count, prevCount])

  return (
    <Post
      title='Stepper'
      description='Animated stepper component using smooth transitions and blur.'
      tags={['react', 'tailwindcss']}
    >
      <div className='rounded-full border border-neutral-300 flex items-center gap-x-2.5 px-1 overflow-hidden bg-neutral-200/50'>
        <button
          className='p-1.5 rounded-full bg-neutral-300 hover:bg-neutral-400/50 active:bg-neutral-400/60 transition-colors disabled:cursor-not-allowed disabled:bg-neutral-300/50 disabled:hover:bg-neutral-300/50 disabled:active:bg-neutral-300/50 disabled:text-neutral-400'
          onClick={subtract}
          disabled={count === 0}
        >
          <FiMinus />
        </button>
        <div
          className={clsx(
            'flex items-center justify-center h-[34px] gap-x-[0.5px] overflow-hidden transition-all'
          )}
          style={{ width: count > 9 ? (count > 99 ? 30 : 20) : 10 }}
        >
          <div
            className={clsx(
              'flex-col items-center justify-center h-[34px] w-2.5 pointer-events-none overflow-hidden relative',
              count > 99 ? 'flex' : 'hidden'
            )}
          >
            <span
              className='absolute w-full text-center transition-transform duration-300'
              ref={prevCountHunds}
              style={{ transform: `translateY(-100%)` }}
            >
              {Math.floor(prevCount / 100)}
            </span>
            <span
              className='absolute w-full text-center transition-transform duration-300'
              ref={nextCountHunds}
              style={{ transform: `translateY(0%)` }}
            >
              {Math.floor(count / 100)}
            </span>
          </div>
          <div
            className={clsx(
              'flex-col items-center justify-center h-[34px] w-2.5 pointer-events-none overflow-hidden relative',
              count > 9 ? 'flex' : 'hidden'
            )}
          >
            <span
              className='absolute w-full text-center transition-transform duration-300'
              ref={prevCountTens}
              style={{ transform: `translateY(-100%)` }}
            >
              {Math.floor(prevCount / 10) % 10}
            </span>
            <span
              className='absolute w-full text-center transition-transform duration-300'
              ref={nextCountTens}
              style={{ transform: `translateY(0%)` }}
            >
              {Math.floor(count / 10) % 10}
            </span>
          </div>
          <div className='flex flex-col items-center justify-center h-[34px] w-2.5 pointer-events-none overflow-hidden relative'>
            <span
              className='absolute w-full text-center transition-transform duration-300'
              ref={prevCountRef}
              style={{ transform: `translateY(-100%)` }}
            >
              {prevCount % 10}
            </span>
            <span
              className='absolute w-full text-center transition-transform duration-300'
              ref={nextCountRef}
              style={{ transform: `translateY(0%)` }}
            >
              {count % 10}
            </span>
          </div>
        </div>
        <button
          className='p-1.5 rounded-full bg-neutral-300 hover:bg-neutral-400/50 active:bg-neutral-400/60 transition-colors disabled:cursor-not-allowed disabled:bg-neutral-300/50 disabled:hover:bg-neutral-300/50 disabled:active:bg-neutral-300/50 disabled:text-neutral-400'
          onClick={add}
          disabled={count === 999}
        >
          <FiPlus />
        </button>
      </div>
    </Post>
  )
}
