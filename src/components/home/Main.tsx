'use client'

import Image from 'next/image'
import Link from 'next/link'
import { HiLocationMarker } from 'react-icons/hi'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'

const projects = [
  {
    title: 'Craft',
    description: '2024 · Interaction design labaratory.',
    href: '/craft',
    delay: 600,
  },
  {
    title: 'kmenu',
    description: '2022 · Accessible command menu component for React.',
    href: 'https://kmenu.hxrsh.in',
    delay: 700,
  },
  {
    title: 'React Pointers',
    description: '2021 · Lightweight and composable custom cursors.',
    href: 'https://kmenu.hxrsh.in',
    delay: 800,
  },
  {
    title: 'snip',
    description: '2020 · Modern and fast Pastebin written in Rust.',
    href: 'https://snip.place',
    delay: 900,
  },
  {
    title: 'dots',
    description: '2020 · Pastel-themed i3wm and Arch Linux rice.',
    href: 'https://snip.place',
    delay: 1000,
  },
]

export default () => {
  return (
    <main>
      <section className='mt-12'>
        <h2 className='tracking-tight mb-4 animate-intro opacity-0 [animation-delay:500ms] font-medium'>
          Projects
        </h2>
        <div className='flex flex-col gap-y-3'>
          {projects.map((project, index) => (
            <Link
              href={project.href}
              target={project.href.startsWith('/') ? '_self' : '_blank'}
              rel='noreferrer'
              key={index}
              className='animate-intro opacity-0 exclude group w-fit first:[animation-delay:600ms] [&:nth-child(2)]:[animation-delay:700ms] [&:nth-child(3)]:[animation-delay:800ms] [&:nth-child(4)]:[animation-delay:900ms] last:[animation-delay:1000ms]'
            >
              <h3 className='flex items-center underline decoration-neutral-300 tracking-tight group-hover:no-underline'>
                {project.title}
                {!project.href.startsWith('/') && (
                  <HiOutlineArrowUpRight className='text-sm ml-1 text-neutral-500' />
                )}
              </h3>
              <p className='text-sm text-neutral-500 tracking-tight'>
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
      <section className='mt-12'>
        <h2 className='tracking-tight mb-4 animate-intro opacity-0 [animation-delay:1100ms] font-medium'>
          Where
        </h2>
        <div>
          <div className='overflow-hidden rounded-lg relative'>
            <Image
              src='/map.webp'
              width={560}
              height={325}
              alt='Map with a marker to the East of Dallas, Texas'
              className='grayscale'
              draggable={false}
              quality={100}
            />
            <div className='' aria-hidden>
              <div className='animate-marker h-4 w-4 bg-blue-500 rounded-full absolute z-10 -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2' />
              <div className='bg-blue-500 absolute z-10 -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 rounded-full h-7 w-7 border-4 border-neutral-50 shadow-2xl' />
            </div>
          </div>
          <a
            className='flex justify-end items-center text-sm text-neutral-500 mt-1'
            href='https://en.wikipedia.org/wiki/Texas'
            target='_blank'
            rel='noreferrer'
          >
            <HiLocationMarker />
            <span className='exclude ml-1'>Texas</span>
          </a>
        </div>
      </section>
    </main>
  )
}
