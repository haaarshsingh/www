import { useState } from 'react'

export type Tab = {
  title: string
  href: string
  description?: string
  img?: string
}

export default ({ tabs }: { tabs: Tab[] }) => {
  const [selectedTabIndex, setSelectedTab] = useState<number | undefined>(
    undefined
  )

  return {
    tabProps: {
      tabs,
      selectedTabIndex,
      setSelectedTab,
    },
    selectedTab: selectedTabIndex ? tabs[selectedTabIndex] : undefined,
  }
}
