import { Command, CommandMenu, useCommands, useKmenu } from 'kmenu'
import { FC } from 'react'
import {
  FiAtSign,
  FiBook,
  FiBookmark,
  FiDribbble,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMap,
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
import { allBlogs } from '@layer/generated'

const Palette: FC = () => {
  const { setTheme } = useTheme()
  const [input, setInput, open, setOpen] = useKmenu()

  const main: Command[] = [
    {
      category: 'Utility',
      commands: [
        {
          icon: <FiMap />,
          text: 'Navigation...',
          perform: () => setOpen(2),
        },
        {
          icon: <FiAtSign />,
          text: 'Socials...',
          perform: () => setOpen(3),
        },
        {
          icon: <FiBookmark />,
          text: 'Blogs...',
          perform: () => setOpen(4),
        },
      ],
    },
    {
      category: 'Preferences',
      commands: [
        {
          icon: <BiPaintRoll />,
          text: 'Change Theme...',
          perform: () => setOpen(5),
        },
        {
          icon: <TbLanguageHiragana />,
          text: 'Change Language...',
          keywords: 'Locale',
          perform: () => setOpen(6),
        },
      ],
    },
  ]

  const navigation: Command[] = [
    {
      category: 'Navigation',
      commands: [
        {
          icon: <FiGlobe />,
          text: 'Home',
          href: 'https://hxrsh.in',
        },
        {
          icon: <FiZap />,
          text: 'About',
          href: 'https://hxrsh.in/abt',
        },
        {
          icon: <BsChatSquareDots />,
          text: 'Ask me Anything',
          href: 'https://hxrsh.in/ama',
        },
        {
          icon: <AiOutlineLaptop />,
          text: 'Uses',
          href: 'https://hxrsh.in/uses',
        },
        {
          icon: <BiStats />,
          text: 'Stats',
          href: 'https://hxrsh.in/stats',
        },
        {
          icon: <FiRss />,
          text: 'RSS Feed',
          href: 'https://hxrsh.in/rss.xml',
        },
      ],
    },
  ]

  const social: Command[] = [
    {
      category: 'Socials',
      commands: [
        {
          icon: <FiTwitter />,
          text: 'Twitter',
          href: 'https://twitter.com/harshhhdev',
          newTab: true,
        },
        {
          icon: <FiGithub />,
          text: 'GitHub',
          href: 'https://github.com/harshhhdev',
          newTab: true,
        },
        {
          icon: <FiLinkedin />,
          text: 'Linkedin',
          href: 'https://linkedin.com/in/harshhhdev',
          newTab: true,
        },
        {
          icon: <FiDribbble />,
          text: 'Dribbble',
          href: 'https://dribbble.com/harshhhdev',
          newTab: true,
        },
        {
          icon: <AiOutlineBehance />,
          text: 'Behance',
          href: 'https://behance.net/harshhhdev',
          newTab: true,
        },
        {
          icon: <FiYoutube />,
          text: 'YouTube',
          href: 'https://www.youtube.com/channel/UC6ix6gYRC62pM0sMRYKPKUQ',
          newTab: true,
        },
        {
          icon: <TbBrandTelegram />,
          text: 'Telegram',
          href: 'https://t.me/harshhhdev',
          newTab: true,
        },
        {
          icon: <RiSnapchatLine />,
          text: 'Snapchat',
          href: 'https://snapchat.com/add/harshhhhsingh',
          newTab: true,
        },
      ],
    },
  ]

  const blogs: Command[] = [
    {
      category: 'Blogs',
      commands: allBlogs.map((blog) => {
        return {
          icon: <FiBook />,
          text: blog.title,
          href: `https://hxrsh.in/blog/${blog.slug}`,
        }
      }),
    },
  ]

  const theme: Command[] = [
    {
      category: 'Themes',
      commands: [
        {
          icon: <FiSun />,
          text: 'Light',
          perform: () => setTheme('light'),
        },
        {
          icon: <FiMoon />,
          text: 'Dark',
          perform: () => setTheme('dark'),
        },
      ],
    },
  ]

  const language: Command[] = [
    {
      category: 'Languages',
      commands: [
        {
          icon: <TbMessageLanguage />,
          text: 'English',
          href: '/',
        },
        {
          icon: <TbMessageLanguage />,
          text: 'Hindi',
          href: '/in',
        },
        {
          icon: <TbMessageLanguage />,
          text: 'German',
          href: '/de',
        },
        {
          icon: <TbMessageLanguage />,
          text: 'French',
          href: '/fr',
        },
        {
          icon: <TbMessageLanguage />,
          text: 'Serbian',
          href: '/sr',
        },
      ],
    },
  ]

  const [mainCommands, setMainCommands] = useCommands(main)
  const [navigationCommands, setNavigationCommands] = useCommands(navigation)
  const [socialCommands, setSocialCommands] = useCommands(social)
  const [blogCommands, setBlogCommands] = useCommands(blogs)
  const [themeCommands, setThemeCommands] = useCommands(theme)
  const [languageCommands, setLanguageCommands] = useCommands(language)

  return (
    <>
      <CommandMenu commands={mainCommands} index={1} main />
      <CommandMenu commands={navigationCommands} index={2} />
      <CommandMenu commands={socialCommands} index={3} />
      <CommandMenu commands={blogCommands} index={4} />
      <CommandMenu commands={themeCommands} index={5} />
      <CommandMenu commands={languageCommands} index={6} />
    </>
  )
}

export default Palette
