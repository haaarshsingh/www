import { FC, ReactNode } from 'react'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'

type Props = {
  title: string
  description: string
  tags: string[]
  children: ReactNode
}

export default (({ title, description, tags, children }) => {
  return (
    <article>
      <h3 className='font-medium'>{title}</h3>
      <p className='text-sm text-neutral-500 mt-1'>{description}</p>
      <div className='w-full min-h-96 border border-neutral-200 my-4 flex items-center justify-center rounded-xl bg-neutral-100'>
        {children}
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-2'>
          {tags.map((tag, index) => (
            <div
              key={index}
              className='text-xs bg-neutral-200 text-neutral-600 rounded px-2 py-1'
            >
              {tag}
            </div>
          ))}
        </div>
        <a
          className='text-sm flex items-center'
          href='https://github.com/harshhhdev/www'
        >
          View Source
          <HiOutlineArrowUpRight className='ml-1 text-xs mt-[1px] text-neutral-500' />
        </a>
      </div>
    </article>
  )
}) as FC<Props>
