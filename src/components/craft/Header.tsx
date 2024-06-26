import Image from 'next/image'
import {
  BiLogoDiscordAlt,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTwitter,
} from 'react-icons/bi'
import { RiPencilRuler2Fill } from 'react-icons/ri'

const socials = [
  {
    icon: <BiLogoTwitter />,
    label: 'Twitter',
    href: 'https://x.com/harshhhdev',
  },
  {
    icon: <BiLogoGithub />,
    label: 'GitHub',
    href: 'https://github.com/harshhhdev',
  },
  {
    icon: <BiLogoLinkedin />,
    label: 'Linkedin',
    href: 'https://linkedin.com/in/harshhhdev',
  },
  {
    icon: <BiLogoDiscordAlt />,
    label: 'Discord',
    href: 'https://discord.com/users/518432133111611397',
  },
]

export default () => {
  return (
    <header>
      <RiPencilRuler2Fill className='h-6 w-6' />
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
}
