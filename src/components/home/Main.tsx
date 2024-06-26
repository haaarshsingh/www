'use client'

import useTabs, { Tab } from '@/hooks/useTabs'
import Image from 'next/image'
import Link from 'next/link'
import {
  CSSProperties,
  FC,
  FocusEvent,
  PointerEvent,
  useRef,
  useState,
} from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'
import { clsx } from 'clsx'

export default () => {
  const [tabs] = useState({
    tabs: [
      {
        title: 'kmenu',
        description: '2022 · Accessible command menu component.',
        href: 'https://kmenu.hxrsh.in',
      },
      {
        title: 'Craft',
        description: '2024 · Interaction design labaratory.',
        href: '/craft',
      },
      {
        title: 'React Pointers',
        description: '2021 · Lightweight custom cursors for React.',
        href: 'https://kmenu.hxrsh.in',
      },
      {
        title: 'snip',
        description: '2020 · Modern Pastebin written in Rust.',
        href: 'https://snip.place',
      },
      {
        title: 'dots',
        description: '2020 · Pastel-themed i3wm and Arch Linux rice.',
        href: 'https://snip.place',
      },
    ],
  })

  const css = useTabs(tabs)

  return (
    <main>
      <section className='mt-8'>
        <h2 className='tracking-tight mb-2 animate-intro opacity-0 [animation-delay:500ms] font-medium'>
          Projects
        </h2>
        <Projects {...css.tabProps} />
      </section>
      <section className='mt-12'>
        <h2 className='tracking-tight mb-4 animate-intro opacity-0 [animation-delay:900ms] font-medium'>
          Where
        </h2>
        <div className='animate-intro opacity-0 [animation-delay:1000ms]'>
          <div className='overflow-hidden rounded-lg relative'>
            <Image
              src='/map.webp'
              width={560}
              height={325}
              alt='Map with a marker over the state of Texas'
              className='grayscale'
              draggable={false}
              quality={100}
            />
            <div aria-hidden>
              <div className='animate-marker h-4 w-4 bg-blue-500 rounded-full absolute z-10 -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2' />
              <div className='bg-blue-500 absolute z-10 -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 rounded-full h-7 w-7 border-4 border-neutral-50 shadow-2xl' />
            </div>
          </div>
          <div className='flex justify-end'>
            <a
              className='text-sm text-neutral-500 mt-1 flex items-center'
              href='https://en.wikipedia.org/wiki/Texas'
              target='_blank'
              rel='noreferrer'
            >
              <HiLocationMarker />
              <span className='exclude ml-1'>Texas</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export type Props = { tabs: Tab[] }

export const Projects: FC<Props> = ({ tabs }) => {
  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null)
  const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null)

  const ref = useRef<HTMLDivElement>(null)
  const rect = ref.current?.getBoundingClientRect()

  const [isInitialHoveredElement, setIsInitialHoveredElement] = useState(true)

  const onLeaveTabs = () => {
    setTimeout(() => {
      setIsInitialHoveredElement(true)
      setHoveredTabIndex(null)
    }, 500)
  }

  const onEnterTab = (
    e: PointerEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>,
    i: number
  ) => {
    if (!e.target || !(e.target instanceof HTMLAnchorElement)) return

    setHoveredTabIndex((prev) => {
      if (prev != null && prev !== i) setIsInitialHoveredElement(false)

      return i
    })
    setHoveredRect(e.target.getBoundingClientRect())
  }

  let hoverStyles: CSSProperties = { opacity: 0 }
  if (rect && hoveredRect) {
    hoverStyles.transform = `translate3d(0px,${
      hoveredRect.top - rect.top
    }px,0px)`
    hoverStyles.width = hoveredRect.width
    hoverStyles.height = hoveredRect.height
    hoverStyles.opacity = hoveredTabIndex != null ? 1 : 0
    hoverStyles.transition = isInitialHoveredElement
      ? `opacity 150ms`
      : `transform 250ms 0ms, opacity 200ms 0ms, width 250ms`
  }

  return (
    <div className='-ml-4'>
      <div
        className='flex flex-col relative w-fit'
        ref={ref}
        onPointerLeave={onLeaveTabs}
      >
        {tabs.map((item, index) => (
          <Link
            href={item.href}
            target={item.href.startsWith('/') ? '_self' : '_blank'}
            rel='noreferrer'
            key={index}
            className={clsx(
              'animate-intro opacity-0 p-3.5 exclude w-fit first:[animation-delay:600ms] [&:nth-child(2)]:[animation-delay:650ms] [&:nth-child(3)]:[animation-delay:700ms] [&:nth-child(4)]:[animation-delay:750ms] [&:nth-child(5)]:[animation-delay:800ms]'
            )}
            onPointerEnter={(e) => onEnterTab(e, index)}
            onFocus={(e) => onEnterTab(e, index)}
          >
            <h3
              className={clsx(
                'flex items-center pointer-events-none underline decoration-neutral-300 tracking-tight',
                hoveredTabIndex === index && 'no-underline'
              )}
            >
              {item.title}
              {!item.href.startsWith('/') && (
                <HiOutlineArrowUpRight className='text-sm ml-1 text-neutral-500' />
              )}
            </h3>
            <p className='text-sm text-neutral-500 tracking-tight pointer-events-none'>
              {item.description}
            </p>
          </Link>
        ))}
        <div
          className='absolute left-0 top-0 rounded-lg bg-neutral-950/5 dark:bg-neutral-600 -z-10 p-3.5'
          style={hoverStyles}
        />
      </div>
    </div>
  )
}
