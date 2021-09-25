import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import { Blog as BlogContent } from '@pages/blog/[id]'
import * as S from './BlogPost.style'

import * as Icons from 'react-feather'

import { copyToClipboard } from 'copy-lite'

import ReactMarkdown from 'react-markdown'
import Syntax from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const BlogPost: React.FC<{ BlogContent: BlogContent }> = ({ BlogContent }) => {
  const [githubEditLink, setGitHubEditLink] = React.useState(' ')
  const ScrollbarBG = React.useRef<HTMLDivElement>(null)
  const Bar = React.useRef<HTMLDivElement>(null)

  const TooltipRef = React.useRef<HTMLParagraphElement>(null)

  React.useEffect(() => {
    setGitHubEditLink(
      `https://github.com/harshhhdev/harshhhdev.github.io/blob/master/${window.location.pathname}.md`
    )

    TooltipRef.current!.addEventListener('animationend', () => {
      TooltipRef.current!.classList.remove('animate')
    })

    // @ts-ignore
    ScrollbarBG.current!.style.minWidth = `${document.width}px`

    document.getElementsByTagName('body')[0]!.onresize = () => {
      // @ts-ignore
      ScrollbarBG.current!.style.minWidth = `${document.width}px`
    }

    window.onscroll = () => {
      let dh = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        ),
        wh = window.innerHeight,
        pos =
          pageYOffset ||
          (document.documentElement.clientHeight
            ? document.documentElement.scrollTop
            : document.body.scrollTop),
        bw = (pos / (dh - wh)) * 100

      Bar.current!.style.width = `${bw}%`
    }

    let script = document.createElement('script')
    script.setAttribute('src', 'https://utteranc.es/client.js')
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('repo', 'harshhhdev/harshhhdev.github.io')
    script.setAttribute('theme', 'dark-blue')
    script.setAttribute('issue-term', 'url')
    document.querySelector('.blog-box')!.appendChild(script)
  }, [])

  return (
    <>
      <S.TopScrollbar ref={Bar}>
        <S.TopScrollbarBG ref={ScrollbarBG} />
      </S.TopScrollbar>
      <S.BlogPostContainer>
        <S.BlogPost>
          <S.BlogBox className='blog-box'>
            <ScrollAnimation
              animateIn='animate__flipInX'
              delay={200}
              animateOnce={true}
            >
              <S.BlogTitle>{BlogContent.title}</S.BlogTitle>
            </ScrollAnimation>
            <S.BlogInfo>
              <S.BlogLeftContainer>
                <ScrollAnimation
                  animateIn='animate__flipInX'
                  delay={200}
                  animateOnce={true}
                >
                  <S.BlogInfoContainer>
                    <Icons.Clock />
                    {BlogContent.readingTime} min
                  </S.BlogInfoContainer>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn='animate__flipInX'
                  delay={200}
                  animateOnce={true}
                >
                  <S.BlogInfoContainer>
                    <Icons.Calendar />
                    {BlogContent.formattedDate}
                  </S.BlogInfoContainer>
                </ScrollAnimation>
              </S.BlogLeftContainer>
              <ScrollAnimation
                animateIn='animate__flipInX'
                delay={200}
                animateOnce={true}
              >
                <S.BlogInfoContainer href={githubEditLink} target='_blank'>
                  <Icons.Edit />
                  Edit On GitHub
                </S.BlogInfoContainer>
              </ScrollAnimation>
            </S.BlogInfo>
            <S.BlogHTML>
              <ReactMarkdown
                source={BlogContent.contentHtml}
                escapeHtml={false}
                renderers={{
                  code: Codeblock,
                }}
              />
            </S.BlogHTML>
            <S.ShareHeader>Share ❤️</S.ShareHeader>
            <S.ShareButtonsDiv>
              <S.ShareButton
                href={`http://twitter.com/share?text="${BlogContent.title}" - &url=https://harshhhdev.github.io/blog/${BlogContent.id}/`}
                target='_blank'
              >
                <Icons.Twitter />
              </S.ShareButton>
              <S.ShareButton
                href={`https://facebook.com/sharer/sharer.php?u=https://harshhhdev.github.io/blog/${BlogContent.id}/`}
                target='_blank'
              >
                <Icons.Facebook />
              </S.ShareButton>
              <S.ShareButton
                onClick={() => {
                  copyToClipboard(window.location.href.toString())
                  TooltipRef.current!.classList.add('animate')
                }}
              >
                <S.Tooltip ref={TooltipRef}>Copied</S.Tooltip>
                <Icons.Paperclip />
              </S.ShareButton>
            </S.ShareButtonsDiv>
          </S.BlogBox>
        </S.BlogPost>
      </S.BlogPostContainer>
    </>
  )
}

const Codeblock: React.FC<{ value: string; language: string }> = ({
  value,
  language,
}) => {
  return (
    <Syntax
      wrapLines
      customStyle={S.preStyle}
      style={atomOneDark}
      language={language}
    >
      {value}
    </Syntax>
  )
}

export default BlogPost
