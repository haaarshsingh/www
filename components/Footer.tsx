import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className='flex flex-col justify-center mt-40'>
      <div className='flex'>
        <div className='flex flex-col w-1/3'>
          {[
            {
              link: '/',
              text: 'Home',
            },
            {
              link: '/abt',
              text: 'About',
            },
            {
              link: '/blog',
              text: 'Blog',
            },
          ].map((link, index) => (
            <a href={link.link} key={index} className='my-2 text-base w-fit'>
              {link.text}
            </a>
          ))}
        </div>
        <div className='flex flex-col w-1/3'>
          {[
            {
              link: '/ama',
              text: 'AMA',
            },
            {
              link: '/stats',
              text: 'Music',
            },
            {
              link: '/uses',
              text: 'Uses',
            },
            {
              link: '/words',
              text: 'Words',
            },
            {
              link: '/rss.xml',
              text: 'RSS',
            },
          ].map((link, index) => (
            <a
              href={link.link.toLowerCase()}
              key={index}
              className='my-2 text-base w-fit'
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className='flex flex-col w-1/3'>
          {[
            {
              link: 'https://github.com/harshhhdev',
              text: 'GitHub',
            },
            {
              link: 'https://twitter.com/harshhhdev',
              text: 'Twitter',
            },
            {
              link: 'https://dribbble.com/harshhhdev',
              text: 'Dribbble',
            },
            {
              link: 'https://linkedin.com/in/harshhhdev',
              text: 'Linkedin',
            },
            {
              link: 'https://t.me/harshhhdev',
              text: 'Telegram',
            },
            {
              link: 'https://www.behance.net/harshhhdev',
              text: 'Behance',
            },
            {
              link: 'https://discord.com/users/518432133111611397',
              text: 'Discord',
            },
            {
              link: 'https://www.snapchat.com/add/harshhhhsingh',
              text: 'Snapchat',
            },
          ].map((link, index) => (
            <a
              href={link.link}
              target='_blank'
              rel='noreferrer'
              key={index}
              className='my-2 text-base w-fit'
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
      <p className='text-base text-center my-20 text-gray-900 dark:text-white'>
        No ads, no tracking. Enjoy your day.
      </p>
    </footer>
  )
}

export default Footer
