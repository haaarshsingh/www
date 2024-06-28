import { RiPencilRuler2Fill } from 'react-icons/ri'

export default () => (
  <header>
    <div className='h-8 w-8 rounded-full overflow-hidden'>
      <div className='flex items-center rounded-full h-full w-full animate-img justify-center bg-neutral-200 text-neutral-500 border border-neutral-300'>
        <RiPencilRuler2Fill className='h-4 w-4' />
      </div>
    </div>
    <div className='mt-6'>
      <h1 className='font-medium tracking-tight animate-intro opacity-0'>
        Craft
      </h1>
      <h2 className='tracking-tight animate-intro opacity-0 [animation-delay:100ms]'>
        Experimental laboratory of user interactions
      </h2>
    </div>
    <hr className='my-6 border-neutral-200' />
  </header>
)
