import { FC, ReactNode, useRef, useState } from 'react'
import { FiCheck, FiClipboard } from 'react-icons/fi/index'
import clsx from 'clsx'
import styles from './styles.module.css'

const Codeblock: FC<{
  className: string | undefined
  children: ReactNode
}> = ({ children }): JSX.Element => {
  const textInput = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [copied, setCopied] = useState(false)

  const onEnter = () => setHovered(true)

  const onExit = () => {
    setHovered(false)
    setCopied(false)
  }

  const onCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText(textInput.current?.textContent!)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <div
      ref={textInput}
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
      className={styles.code}
    >
      {hovered && (
        <button
          aria-label='Copy codeblock'
          type='button'
          className={clsx(styles.copy, copied ? styles.checked : '')}
          onClick={onCopy}
        >
          {copied ? <FiCheck /> : <FiClipboard />}
        </button>
      )}
      <pre className={styles.pre}>{children}</pre>
    </div>
  )
}

export default Codeblock
