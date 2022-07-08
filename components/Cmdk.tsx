import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import {
  FC,
  ReactElement,
  ReactNode,
  Reducer,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react'
import {
  FiArrowRight,
  FiCopy,
  FiDribbble,
  FiGitBranch,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi'
import { motion } from 'framer-motion'
import useShortcut from '@hooks/useShortcut'

type Command = {
  icon: ReactElement
  text: string
}

const commands: Command[] = [
  {
    icon: <FiGlobe className='mx-4' />,
    text: 'My Website',
  },
  {
    icon: <FiCopy className='mx-4' />,
    text: 'Copy Current URL',
  },
  {
    icon: <FiArrowRight className='mx-4' />,
    text: 'Watch The Talk',
  },
  {
    icon: <FiTwitter className='mx-4' />,
    text: 'Twitter',
  },
  {
    icon: <FiGithub className='mx-4' />,
    text: 'GitHub',
  },
  {
    icon: <FiDribbble className='mx-4' />,
    text: 'Dribbble',
  },
  {
    icon: <FiLinkedin className='mx-4' />,
    text: 'Linkedin',
  },
  {
    icon: <FiGitBranch className='mx-4' />,
    text: 'View Source',
  },
]

enum ActionType {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
  CUSTOM = 'CUSTOM',
}

type Action = {
  type: ActionType
  custom: number
}

type State = {
  selected: number
}

const initialState = { selected: 0 }

export const filter = (commands: Command[] | undefined, query: string) => {
  if (!query) return commands

  return commands?.filter((command: { text: string; icon: ReactElement }) => {
    const cmdText = command.text.toLowerCase()
    return cmdText.includes(query.toLowerCase())
  })
}

const Cmdk: FC<{ open: boolean; close: () => void }> = ({ open, close }) => {
  const input = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  let filteredResults = filter(commands, query)

  const reducer: Reducer<State, Action> = (state, action) => {
    switch (action.type) {
      case ActionType.INCREASE:
        return state.selected === filteredResults!.length - 1
          ? { ...state, selected: 0 }
          : { ...state, selected: state.selected + 1 }
      case ActionType.DECREASE:
        return state.selected === 0
          ? { ...state, selected: filteredResults!.length - 1 }
          : { ...state, selected: state.selected - 1 }
      case ActionType.CUSTOM:
        return {
          ...state,
          selected: action.custom,
        }
    }
  }

  const parentRef = useRef<HTMLDivElement>(null)
  const [state, dispatch] = useReducer(reducer, initialState)

  const up = useShortcut('ArrowUp')
  const down = useShortcut('ArrowDown')
  const tab = useShortcut('Tab')
  const reverseTab = useShortcut('Tab', true)

  useEffect(() => {
    if (up || reverseTab) dispatch({ type: ActionType.DECREASE, custom: 0 })
    else if (down || tab) dispatch({ type: ActionType.INCREASE, custom: 0 })
  }, [up, down, tab, reverseTab])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className='w-screen h-screen bg-[#00000070] flex flex-col items-center justify-center absolute top-0 left-0'
          onClick={close}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className='w-2/5 bg-gray-900 border-2 rounded-2xl border-gray-800 p-2'
            role='dialog'
            aria-modal='true'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
          >
            <input
              placeholder='What do you need?'
              className='p-5 text-xl bg-transparent border-b border-gray-700 outline-none w-full mb-2'
              autoFocus
              ref={input}
              onChange={() => setQuery(input.current?.value!)}
            />
            <div
              className='flex flex-col overflow-y-auto w-full h-300 overflow-hidden no-scrollbar'
              ref={parentRef}
            >
              <AnimateSharedLayout>
                {filteredResults!.length <= 0 ? (
                  <motion.div
                    className='flex flex-col h-full items-center justify-center my-10'
                    initial={{ y: -40 }}
                    animate={{ y: 0 }}
                  >
                    <h1>Nothing to see here...</h1>
                    <p className='mt-2 text-lg'>
                      Make sure to double-check your spelling
                    </p>
                  </motion.div>
                ) : (
                  filteredResults?.map((command, index) => (
                    <Command
                      onMouseEnter={() =>
                        dispatch({ type: ActionType.CUSTOM, custom: index })
                      }
                      isSelected={state.selected === index}
                      icon={command.icon}
                      key={index}
                    >
                      {command.text}
                    </Command>
                  ))
                )}
              </AnimateSharedLayout>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const Command: FC<{
  children: ReactNode
  onMouseEnter: () => void
  isSelected: boolean
  icon?: ReactElement
}> = ({ children, onMouseEnter, isSelected, icon }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isSelected)
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
  }, [isSelected])

  return (
    <div
      className='relative flex items-center text-lg my-4 cursor-pointer text-gray-300'
      onMouseEnter={onMouseEnter}
      style={{ color: isSelected ? '#FFF' : '' }}
      ref={ref}
    >
      {isSelected && (
        <motion.div
          layoutId='box'
          className='bg-[#FFFFFF20] rounded-lg w-full  h-16 absolute'
          initial={false}
          transition={{
            type: 'spring',
            stiffness: 1000,
            damping: 70,
          }}
        />
      )}
      {icon}
      {children}
    </div>
  )
}

export default Cmdk
