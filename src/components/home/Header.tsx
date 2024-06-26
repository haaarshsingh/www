import Image from 'next/image'
import {
  BiLogoDiscordAlt,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTwitter,
} from 'react-icons/bi'

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
      <Headshot />
      <div className='mt-6 flex justify-between items-end'>
        <div>
          <h1 className='font-medium tracking-tight animate-intro opacity-0'>
            Harsh Singh
          </h1>
          <h2 className='tracking-tight animate-intro opacity-0 [animation-delay:100ms]'>
            Software and design consultant
          </h2>
        </div>
        <div className='flex items-center gap-x-1 animate-intro opacity-0 [animation-delay:100ms]'>
          {socials.map(({ icon, label, href }, index) => (
            <a
              href={href}
              target='_blank'
              rel='noreferrer'
              key={index}
              aria-label={label}
              className='text-xl text-neutral-500 hover:text-neutral-500/75 active:text-neutral-500/50 transition-colors'
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
      <hr className='my-6 border-neutral-200' />
      <p className='tracking-tight leading-snug animate-intro opacity-0 [animation-delay:300ms]'>
        Have you ever had that one website that you kept coming back to
        &apos;cause everything just clicked perfectly? I&apos;m all about
        crafting those kinda polished interfaces and delightful user
        interactions.
      </p>
      <p className='tracking-tight mt-3 leading-snug animate-intro opacity-0 [animation-delay:400ms]'>
        Reach out to{' '}
        <a href='mailto:hi.harsh@pm.me?subject=Project%20Inquiry'>
          hi.harsh@pm.me
        </a>{' '}
        or <a href='https://x.com/harshhhdev'>@harshhhdev</a> and let&apos;s
        work together.
      </p>
    </header>
  )
}

const Headshot = () => {
  return (
    <div className='rounded-full overflow-hidden w-fit'>
      <Image
        src='/headshot.webp'
        width={32}
        height={32}
        alt='My face'
        priority
        quality={100}
        className='animate-img'
      />
    </div>
  )
}
