import type { FC } from 'react'
import {
  FiDribbble,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi/index'
import s from '@css/modules/home.module.css'

export const Socials: FC = () => {
  return (
    <div className={s.socials}>
      {[
        {
          aria: 'GitHub',
          icon: FiGithub,
          href: 'https://github.com/harshhhdev',
        },
        {
          aria: 'Twitter',
          icon: FiTwitter,
          href: 'https://twitter.com/harshhhdev',
        },
        {
          aria: 'Dribbble',
          icon: FiDribbble,
          href: 'https://dribbble.com/harshhhdev',
        },
        {
          aria: 'Linkedin',
          icon: FiLinkedin,
          href: 'https://linkedin.com/in/harshhhdev',
        },
      ].map((link, index) => (
        <a
          href={link.href}
          target='_blank'
          rel='noreferrer'
          className={s.social}
          key={index}
          aria-label={link.aria}
        >
          <link.icon size={22} />
        </a>
      ))}
    </div>
  )
}
