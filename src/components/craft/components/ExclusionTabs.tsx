'use client'

import { useRef, useState } from 'react'
import Post from '../Post'
import clsx from 'clsx'

export default () => {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const onSelectTab = (i: number) => {
    if (ref.current) {
      const keyframes = [
        {
          clipPath: `inset(4px calc(100% - (${tabs[active].clip.offset}px + ${tabs[active].clip.w}px)) calc(100% - (0px + 32px)) ${tabs[active].clip.offset}px round 20px)`,
        },
        {
          clipPath: `inset(4px calc(100% - (${tabs[i].clip.offset}px + ${tabs[i].clip.w}px)) calc(100% - (0px + 32px)) ${tabs[i].clip.offset}px round 20px)`,
        },
      ]

      const options: KeyframeAnimationOptions = {
        duration: 200,
        easing: 'ease-in-out',
        fill: 'forwards',
      }

      ref.current.animate(keyframes, options)
    }

    setActive(i)
  }

  const tabs = [
    {
      label: 'Overview',
      onClick: () => setActive(0),
      clip: { w: 86.5, offset: 3.5 },
    },
    {
      label: 'Integrations',
      onClick: () => setActive(1),
      clip: { w: 103, offset: 90 },
    },
    {
      label: 'Activity',
      onClick: () => setActive(2),
      clip: { w: 73.7, offset: 193 },
    },
    {
      label: 'Domains',
      onClick: () => setActive(3),
      clip: { w: 81.3, offset: 266.7 },
    },
    {
      label: 'Usage',
      onClick: () => setActive(4),
      clip: { w: 66.3, offset: 348 },
    },
  ]

  return (
    <Post
      title='Exclusion Tabs'
      description='Tabs that use clipping to blend between inactive and active.'
      tags={['react', 'tailwindcss', 'waapi']}
      className='relative'
    >
      <div
        className={clsx('relative flex w-fit items-center rounded-full p-1')}
      >
        {tabs.map((item, i) => (
          <button
            key={i}
            className={clsx(
              'z-10 rounded-full px-3 py-1 text-sm text-neutral-900 transition-colors hover:text-neutral-500 dark:text-neutral-600'
            )}
            onClick={() => {
              onSelectTab(i)
              item.onClick()
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        className={clsx(
          '[will-change: clip-path] pointer-events-none absolute left-1/2 -translate-x-1/2 z-20 flex w-fit items-center bg-neutral-950 p-1'
        )}
        style={{
          clipPath: `inset(4px calc(100% - (${tabs[0].clip.offset}px + ${tabs[0].clip.w}px)) calc(100% - (0px + 32px)) ${tabs[0].clip.offset}px round 20px)`,
        }}
        ref={ref}
        aria-hidden
      >
        {tabs.map((item, i) => (
          <span
            key={i}
            className={clsx(
              'z-20 rounded-full px-3 py-1 text-sm text-neutral-50 transition-colors'
            )}
            aria-hidden
          >
            {item.label}
          </span>
        ))}
      </div>
    </Post>
  )
}
