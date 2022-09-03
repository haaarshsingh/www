import { FC } from 'react'
import { useTranslation } from 'next-i18next'

const Footer: FC = () => {
  const { t } = useTranslation('common')

  return (
    <footer className='flex flex-col justify-center mt-40'>
      <div className='flex'>
        <div className='flex flex-col w-1/3'>
          {[
            {
              link: '/',
              text: t('home'),
            },
            {
              link: '/abt',
              text: t('about'),
            },
            {
              link: '/blog',
              text: t('blog'),
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
              text: t('ama'),
            },
            {
              link: '/stats',
              text: t('stats'),
            },
            {
              link: '/uses',
              text: t('uses'),
            },
            // {
            //   link: '/photography',
            //   text: t('photographyHeader'),
            // },
            {
              link: '/words',
              text: t('wordsHeader'),
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
              text: t('github'),
            },
            {
              link: 'https://twitter.com/harshhhdev',
              text: t('twitter'),
            },
            {
              link: 'https://dribbble.com/harshhhdev',
              text: t('dribbble'),
            },
            {
              link: 'https://linkedin.com/in/harshhhdev',
              text: t('linkedin'),
            },
            {
              link: 'https://www.youtube.com/channel/UC6ix6gYRC62pM0sMRYKPKUQ',
              text: t('youtube'),
            },
            {
              link: 'https://t.me/harshhhdev',
              text: t('telegram'),
            },
            {
              link: 'https://www.behance.net/harshhhdev',
              text: t('behance'),
            },
            {
              link: 'https://www.snapchat.com/add/harshhhhsingh',
              text: t('snapchat'),
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
        {t('footer')}
      </p>
    </footer>
  )
}

export default Footer
