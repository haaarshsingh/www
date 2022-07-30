import { Command, Palette as KMenu, PaletteConfig } from 'kmenu'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import {
  FiDribbble,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMoon,
  FiRss,
  FiSun,
  FiTwitter,
  FiYoutube,
  FiZap,
} from 'react-icons/fi'
import { BsChatSquareDots } from 'react-icons/bs'
import { BiPaintRoll, BiStats } from 'react-icons/bi'
import { AiOutlineBehance, AiOutlineLaptop } from 'react-icons/ai'
import {
  TbBrandTelegram,
  TbLanguageHiragana,
  TbMessageLanguage,
} from 'react-icons/tb'
import { RiSnapchatLine } from 'react-icons/ri'
import { useTheme } from 'next-themes'

const Palette: FC<{
  open: number
  setOpen: Dispatch<SetStateAction<number>>
}> = ({ open, setOpen }) => {
  const { theme, setTheme } = useTheme()

  const mainCommands: Command[] = [
    {
      icon: <FiGlobe />,
      text: 'Home',
      href: 'https://hxrsh.in',
      category: 'Navigation',
    },
    {
      icon: <FiZap />,
      text: 'About',
      href: 'https://hxrsh.in/abt',
      category: 'Navigation',
    },
    {
      icon: <BsChatSquareDots />,
      text: 'Ask me Anything',
      href: 'https://hxrsh.in/ama',
      category: 'Navigation',
    },
    {
      icon: <AiOutlineLaptop />,
      text: 'Uses',
      href: 'https://hxrsh.in/uses',
      category: 'Navigation',
    },
    {
      icon: <BiStats />,
      text: 'Stats',
      href: 'https://hxrsh.in/stats',
      category: 'Navigation',
    },
    {
      icon: <FiRss />,
      text: 'RSS Feed',
      href: 'https://hxrsh.in/rss.xml',
      category: 'Navigation',
    },
    {
      icon: <BiPaintRoll />,
      text: 'Change Theme',
      perform: () => setOpen(2),
      category: 'Preferences',
    },
    {
      icon: <TbLanguageHiragana />,
      text: 'Change Language',
      keywords: 'Locale',
      perform: () => setOpen(3),
      category: 'Preferences',
    },
    {
      icon: <FiTwitter />,
      text: 'Twitter',
      href: 'https://twitter.com/harshhhdev',
      newTab: true,
      category: 'Socials',
    },
    {
      icon: <FiGithub />,
      text: 'GitHub',
      href: 'https://github.com/harshhhdev',
      newTab: true,
      category: 'Socials',
    },
    {
      icon: <FiLinkedin />,
      text: 'Linkedin',
      href: 'https://linkedin.com/in/harshhhdev',
      newTab: true,
      category: 'Socials',
    },
    {
      icon: <FiDribbble />,
      text: 'Dribbble',
      href: 'https://dribbble.com/harshhhdev',
      newTab: true,
      category: 'Socials',
    },
    {
      icon: <AiOutlineBehance />,
      text: 'Behance',
      href: 'https://behance.net/harshhhdev',
      newTab: true,
      category: 'Socials',
    },
    {
      icon: <FiYoutube />,
      text: 'YouTube',
      href: 'https://www.youtube.com/channel/UC6ix6gYRC62pM0sMRYKPKUQ',
      newTab: true,
      category: 'Socials',
    },
    {
      icon: <TbBrandTelegram />,
      text: 'Telegram',
      href: 'https://t.me/harshhhdev',
      newTab: true,
      category: 'Socials',
    },
    {
      icon: <RiSnapchatLine />,
      text: 'Snapchat',
      href: 'https://snapchat.com/add/harshhhhsingh',
      newTab: true,
      category: 'Socials',
    },
  ]

  const themeCommands: Command[] = [
    {
      icon: <FiSun />,
      text: 'Light',
      category: 'Themes',
      perform: () => setTheme('light'),
    },
    {
      icon: <FiMoon />,
      text: 'Dark',
      category: 'Themes',
      perform: () => setTheme('dark'),
    },
  ]

  const languageCommands: Command[] = [
    {
      icon: <TbMessageLanguage />,
      text: 'English',
      category: 'Languages',
      href: '/',
    },
    {
      icon: <TbMessageLanguage />,
      text: 'Hindi',
      category: 'Languages',
      href: '/in',
    },
    {
      icon: <TbMessageLanguage />,
      text: 'German',
      category: 'Languages',
      href: '/de',
    },
    {
      icon: <TbMessageLanguage />,
      text: 'French',
      category: 'Languages',
      href: '/fr',
    },
    {
      icon: <TbMessageLanguage />,
      text: 'Serbian',
      category: 'Languages',
      href: '/sr',
    },
  ]

  const darkConfig: PaletteConfig = {
    backgroundColor: '#181818',
    borderColor: '#3F3F3F',
    inputColor: '#FFFFFF',
    headingColor: '#777777',
    commandInactive: '#777777',
    commandActive: '#FFFFFF',
    barBackground: '#FFFFFF20',
  }

  const lightConfig: PaletteConfig = {
    backgroundColor: '#F6F6F6',
    borderColor: '#FFF',
    inputColor: '#000',
    headingColor: '#828282',
    commandInactive: '#828282',
    commandActive: '#343434',
    barBackground: '#82828220',
  }

  return (
    <>
      <KMenu
        open={open}
        setOpen={setOpen}
        index={1}
        commands={mainCommands}
        categories={['Navigation', 'Preferences', 'Socials']}
        config={theme === 'light' ? lightConfig : darkConfig}
        main
      />
      <KMenu
        open={open}
        setOpen={setOpen}
        index={2}
        commands={themeCommands}
        categories={['Themes']}
        config={theme === 'light' ? lightConfig : darkConfig}
      />
      <KMenu
        open={open}
        setOpen={setOpen}
        index={3}
        commands={languageCommands}
        categories={['Languages']}
        config={theme === 'light' ? lightConfig : darkConfig}
      />
    </>
  )
}

export default Palette
