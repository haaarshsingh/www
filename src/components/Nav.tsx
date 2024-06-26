'use client'

import Link from 'next/link'
import {
  CSSProperties,
  FC,
  FocusEvent,
  PointerEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import clsx from 'clsx'
import useTabs, { Tab } from '@/hooks/useTabs'
import { usePathname } from 'next/navigation'

const active = (path: string) => {
  if (path.includes('craft')) return 1
  else if (path.includes('writing')) return 2
  else return 0
}

export default () => {
  const pathname = usePathname()

  const [selected, setSelected] = useState<number>(active(pathname))
  const [tabs] = useState({
    tabs: [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'Craft',
        href: '/craft',
      },
      {
        title: 'Writing',
        href: '/writing',
      },
    ],
  })

  const css = useTabs(tabs)

  useEffect(() => {
    setSelected(active(pathname))
  }, [pathname])

  return (
    <div className='fixed bottom-0 pt-2 pb-2.5 px-3.5 shadow-menu left-1/2 -translate-x-1/2 mb-8 flex items-center bg-black/75 border-2 border-neutral-600 rounded-full backdrop-blur-sm text-neutral-50'>
      <Links {...css.tabProps} selectedTabIndex={selected} />
      <div className='w-0.5 h-0.5 rounded-full bg-neutral-400 mx-3' />
      <a
        href='mailto:hi.harsh@pm.me?subject=Project%20Inquiry'
        rel='noreferrer'
        target='_blank'
        className='exclude text-sm bg-neutral-50/25 rounded-full px-3.5 py-1.5 shadow-button'
      >
        Contact
      </a>
    </div>
  )
}

type Props = {
  selectedTabIndex: number
  tabs: Tab[]
}

export const Links: FC<Props> = ({ tabs, selectedTabIndex }) => {
  const [buttonRefs, setButtonRefs] = useState<Array<HTMLAnchorElement | null>>(
    []
  )

  useEffect(() => {
    setButtonRefs((prev) => prev.slice(0, tabs.length))
  }, [tabs.length])

  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null)
  const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null)

  const ref = useRef<HTMLElement>(null)
  const rect = ref.current?.getBoundingClientRect()
  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect()

  const [isInitialHoveredElement, setIsInitialHoveredElement] = useState(true)
  const isInitialRender = useRef(true)

  const onLeaveTabs = () => {
    setIsInitialHoveredElement(true)
    setHoveredTabIndex(null)
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

  let hoverStyles: CSSProperties = {
    opacity: 0,
    transform: 'translateY(20px)',
  }

  if (rect && hoveredRect) {
    hoverStyles.transform =
      hoveredTabIndex === null
        ? `translate3d(${hoveredRect.left - rect.left}px,20px,0px)`
        : `translate3d(${hoveredRect.left - rect.left}px,0px,0px)`
    hoverStyles.width = hoveredRect.width
    hoverStyles.height = hoveredRect.height
    hoverStyles.opacity = hoveredTabIndex != null ? 1 : 0
    hoverStyles.transition =
      'transform 250ms 0ms, opacity 250ms 0ms, width 250ms'
  }

  let selectStyles: CSSProperties = { opacity: 0 }
  if (rect && selectedRect) {
    selectStyles.width = selectedRect.width * 0.8
    selectStyles.transform = `translateX(calc(${
      selectedRect.left - rect.left
    }px + 10%))`
    selectStyles.opacity = 1
    selectStyles.transition = isInitialRender.current
      ? `opacity 150ms 150ms`
      : `transform 150ms 0ms, opacity 150ms 150ms, width 150ms`

    isInitialRender.current = false
  }

  return (
    <nav
      className='flex items-center relative'
      ref={ref}
      onPointerLeave={onLeaveTabs}
    >
      {tabs.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={clsx(
            'exclude text-sm px-3.5 py-1 transition-colors',
            hoveredTabIndex === index || selectedTabIndex === index
              ? 'text-neutral-50'
              : 'text-neutral-500'
          )}
          onPointerEnter={(e) => onEnterTab(e, index)}
          onFocus={(e) => onEnterTab(e, index)}
          ref={(el) => (buttonRefs[index] = el) as any}
        >
          {item.title}
        </Link>
      ))}
      <div
        className='absolute left-0 top-0 rounded-full bg-neutral-50/25 pointer-events-none'
        style={hoverStyles}
      />
      <div
        className='absolute left-0 bottom-0 rounded-full -mb-1.5 pointer-events-none flex justify-center'
        style={selectStyles}
      >
        <div className='bg-neutral-50 rounded-full w-0.5 h-0.5' />
      </div>
    </nav>
  )
}
