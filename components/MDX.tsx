import NextImage, { ImageProps } from 'next/image'
import NextLink from 'next/link'
import {
  FC,
  ReactChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { FiCheck, FiClipboard, FiDownload } from 'react-icons/fi'

const Link: FC<{ href: string; children: ReactNode }> = ({
  href,
  children,
}) => {
  const link = href
  const internal = link && (link.startsWith('/') || link.startsWith('#'))

  if (internal) {
    return (
      <NextLink href={href}>
        <a>{children}</a>
      </NextLink>
    )
  }

  return (
    <a target='_blank' rel='noopener noreferrer' href={href}>
      {children}
    </a>
  )
}

const Header2: FC<{ children: ReactNode; id: string }> = ({ children, id }) => {
  return (
    <a
      href={`#${id}`}
      className='my-8 flex items-center group w-fit header no-outline text-xl font-bold text-white'
    >
      <h2 className='opacity-0 group-hover:opacity-100 mr-2 text-gray-600'>
        #
      </h2>
      <h2 id={id}>{children}</h2>
    </a>
  )
}

const Header3: FC<{ children: ReactNode; id: string }> = ({ children, id }) => {
  return (
    <a
      href={`#${id}`}
      className='my-8 flex items-center group w-fit header no-outline'
    >
      <h3 className='opacity-0 group-hover:opacity-100 mr-2 !text-gray-500'>
        #
      </h3>
      <h3 id={id}>{children}</h3>
    </a>
  )
}

const Image: FC<{ alt: string; props: ImageProps }> = ({ alt, props }) => {
  const [imageLoading, setImageLoading] = useState(false)

  return (
    <div
      className={[
        'my-14 img h-fit w-fit rounded-xl',
        `img--blur-down`,
        imageLoading && 'is-loaded',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <NextImage
        alt={alt}
        layout='intrinsic'
        objectFit='contain'
        width={2000}
        height={1500}
        className='img__element'
        {...props}
        onLoad={() => setImageLoading(true)}
      />
    </div>
  )
}

const CodeBlock: FC<{
  className: string | undefined
  children: ReactChildren
}> = ({ children }): JSX.Element => {
  const textInput = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [copied, setCopied] = useState(false)

  const onEnter = () => {
    setHovered(true)
  }

  const onExit = () => {
    setHovered(false)
    setCopied(false)
  }

  const onCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText(textInput.current?.textContent!)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <div
      ref={textInput}
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
      className='relative'
    >
      {hovered && (
        <button
          aria-label='Copy code'
          type='button'
          className={`absolute flex justify-center items-center right-3 top-3 w-7 h-7 p-1 rounded border bg-gray-200 dark:bg-gray-900 ${
            copied
              ? 'focus:border-green-500 border-green-400 text-green-400'
              : 'border-gray-700 text-gray-600'
          }`}
          onClick={onCopy}
        >
          {copied ? <FiCheck /> : <FiClipboard />}
        </button>
      )}
      <pre className='text-sm'>{children}</pre>
    </div>
  )
}

const Copy: FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setTimeout(() => setCopied(false), 10000)
  }, [copied, setCopied])

  return (
    <button
      className={`flex items-center text-gray-900 dark:text-white py-3 px-4 text-base rounded-lg transition-colors ${
        copied
          ? 'bg-green-500 hover:bg-green-600 text-gray-100'
          : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
      }`}
      onClick={() => {
        navigator.clipboard.writeText(text)
        setCopied(true)
      }}
    >
      {copied ? <FiCheck className='mr-2' /> : <FiClipboard className='mr-2' />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

const Download: FC = () => {
  return (
    <a
      className='bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 flex items-center text-white py-3 px-4 text-base rounded-lg transition-colors my-5 no-outline w-fit header'
      href='/HarshBranding.zip'
      download='HarshBranding.zip'
    >
      <FiDownload className='mr-2' /> Download Assets
    </a>
  )
}

const Table: FC<{ children: ReactChildren }> = ({ children }) => {
  return (
    <div className='w-fit border-gray-700 border rounded-xl overflow-x-scroll'>
      {children}
    </div>
  )
}

const Components = {
  a: Link,
  h2: Header2,
  h3: Header3,
  Image: Image,
  pre: CodeBlock,
  table: Table,
  Copy,
  Download,
}

export default Components
