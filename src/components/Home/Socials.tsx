import type { FC } from 'react'
import {
  FiDribbble,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi/index'
import { RiSnapchatLine } from 'react-icons/ri'
import { RxDiscordLogo } from 'react-icons/rx'
import styles from '@css/home.module.css'

export const Socials: FC = () => {
  return (
    <div className={styles.socials}>
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
        {
          aria: 'YouTube',
          icon: FiYoutube,
          href: 'https://www.youtube.com/@harshhhdev',
        },
        {
          aria: 'Instagram',
          icon: FiInstagram,
          href: 'https://www.instagram.com/haaarshsingh',
        },
        {
          aria: 'Discord',
          icon: RxDiscordLogo,
          href: 'https://discord.com/users/518432133111611397',
        },
        {
          aria: 'Snapchat',
          icon: RiSnapchatLine,
          href: 'https://snapchat.com/add/harshhhhsingh',
        },
      ].map((link, index) => (
        <a
          href={link.href}
          target='_blank'
          rel='noreferrer'
          className={styles.social}
          key={index}
          aria-label={link.aria}
        >
          <link.icon size={22} />
        </a>
      ))}
    </div>
  )
}
