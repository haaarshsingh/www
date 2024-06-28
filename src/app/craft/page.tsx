import './craft.css'

import DynamicIsland from '@/components/craft/components/DynamicIsland'
import ExclusionTabs from '@/components/craft/components/ExclusionTabs'
import Stepper from '@/components/craft/components/Stepper'
import Header from '@/components/craft/Header'

export default () => (
  <>
    <Header />
    <main className='flex flex-col gap-y-12'>
      <DynamicIsland />
      <ExclusionTabs />
      <Stepper />
    </main>
  </>
)
