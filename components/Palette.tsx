import * as React from 'react'

import {
  ActionId,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarSearch,
  KBarResults,
  useMatches,
  ActionImpl,
  useRegisterActions,
} from 'kbar'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'

const CommandBar = () => {
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  const useLanguageActions = () => {
    useRegisterActions([
      {
        id: 'locale',
        name: 'Change locale…',
        keywords: 'interface language locale',
        section: 'Preferences',
      },
      {
        id: 'eng',
        name: 'English',
        keywords: 'angrezi anglobhasha en',
        perform: () => router.push('/en'),
        parent: 'locale',
      },
      {
        id: 'hn',
        name: 'Hindi',
        keywords: 'hn',
        perform: () => router.push('/hn'),
        parent: 'locale',
      },
      {
        id: 'de',
        name: 'German',
        keywords: 'de german deutsch',
        perform: () => router.push('/de'),
        parent: 'locale',
      },
    ])
  }

  const useThemeActions = () => {
    useRegisterActions([
      {
        id: 'theme',
        name: 'Change theme…',
        keywords: 'interface color dark light white black',
        section: 'Preferences',
      },
      {
        id: 'light',
        name: 'Light',
        keywords: 'light white',
        perform: () => setTheme('light'),
        parent: 'theme',
      },
      {
        id: 'dark',
        name: 'Dark',
        keywords: 'dark black',
        perform: () => setTheme('dark'),
        parent: 'theme',
      },
    ])
  }

  useLanguageActions()
  useThemeActions()

  return (
    <KBarPortal>
      <KBarPositioner className='backdrop-blur bg-black/70 select-none'>
        <KBarAnimator className='bg-gray-100 dark:bg-gray-900 w-1/3 min-w-500 rounded-lg text-lg text-white overflow-hidden'>
          <KBarSearch className='w-full outline-none p-5 bg-gray-100 dark:bg-gray-900 rounded-lg text-gray-900 dark:text-white' />
          <RenderResults />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  )
}

const RenderResults = () => {
  const { results, rootActionId } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className='ml-4 text-sm text-gray-600 uppercase py-5'>
            {item}
          </div>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId!}
          />
        )
      }
    />
  )
}

// eslint-disable-next-line react/display-name
const ResultItem = React.forwardRef(
  (
    {
      action,
      active,
      currentRootActionId,
    }: {
      action: ActionImpl
      active: boolean
      currentRootActionId: ActionId
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const ancestors = React.useMemo(() => {
      if (!currentRootActionId) return action.ancestors
      const index = action.ancestors.findIndex(
        (ancestor) => ancestor.id === currentRootActionId
      )
      return action.ancestors.slice(index + 1)
    }, [action.ancestors, currentRootActionId])

    return (
      <div
        ref={ref}
        className={`p-4 flex align-center justify-between cursor-pointer transition-all ${
          active ? 'bg-gray-200 dark:bg-gray-800/50' : 'transparent'
        }`}
      >
        <div className='flex gap-3 items-center'>
          <div className='flex flex-col text-gray-900 dark:text-white text-lg'>
            <div>
              {ancestors.length > 0 &&
                ancestors.map((ancestor) => (
                  <div key={ancestor.id} className='text-gray-500'>
                    <span className='mr-2'>{ancestor.name}</span>
                    <span>&rsaquo;</span>
                  </div>
                ))}
              {action.icon}
              <span>{action.name}</span>
            </div>
            {action.subtitle && (
              <span className='text-base text-gray-400'>{action.subtitle}</span>
            )}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div className='flex items-center justify-center'>
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                className='bg-gray-300 dark:bg-gray-800 dark:text-gray-300 px-2 py-1 text-sm ml-2 rounded h-fit'
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    )
  }
)

export default CommandBar
