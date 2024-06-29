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
        { clipPath: tabs[active]?.clip },
        { clipPath: tabs[i]?.clip },
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
      clip: 'inset(4px calc(100% - (3.5px + 69px)) calc(100% - (0px + 32px)) 3.5px round 20px)',
    },
    {
      label: 'Integrations',
      onClick: () => setActive(1),
      clip: 'inset(4px calc(100% - (72.5px + 76px)) calc(100% - (0px + 32px)) 72.5px round 20px)',
    },
    {
      label: 'Activity',
      onClick: () => setActive(2),
      clip: 'inset(4px calc(100% - (148.5px + 117px)) calc(100% - (0px + 32px)) 148.5px round 20px)',
    },
    {
      label: 'Domains',
      onClick: () => setActive(3),
      clip: 'inset(4px calc(100% - (265.5px + 69px)) calc(100% - (0px + 32px)) 265.5px round 20px)',
    },
    {
      label: 'Usage',
      onClick: () => setActive(4),
      clip: 'inset(4px calc(100% - (265.5px + 69px)) calc(100% - (0px + 32px)) 265.5px round 20px)',
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
          '[will-change: clip-path] pointer-events-none absolute left-0 top-0 z-20 flex w-fit items-center bg-neutral-950 p-1'
        )}
        style={{ clipPath: tabs[0]?.clip }}
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
