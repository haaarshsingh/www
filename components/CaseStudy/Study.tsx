import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import ReactMarkdown from 'react-markdown'

import * as BPS from '@components/BlogPost/BlogPost.style'
import { ViewProjectButton as LaunchProject } from '@components/Work/Work.style'
import * as S from './Study.style'
import { Study as Content } from '@pages/studies/[id]'

const Study: React.FC<{ Content: Content }> = ({ Content }) => {
  const ScrollbarBG = React.useRef<HTMLDivElement>(null)
  const Bar = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
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
  }, [])

  return (
    <>
      <BPS.TopScrollbar ref={Bar}>
        <BPS.TopScrollbarBG ref={ScrollbarBG} />
      </BPS.TopScrollbar>
      <S.StudyInfo>
        <ScrollAnimation
          animateIn='animate__flipInX'
          delay={200}
          animateOnce={true}
        >
          <S.Title>{Content.title}</S.Title>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn='animate__flipInX'
          delay={200}
          animateOnce={true}
        >
          <S.Description>{Content.description}</S.Description>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn='animate__flipInX'
          delay={200}
          animateOnce={true}
        >
          <LaunchProject href={Content.link}>Launch Project</LaunchProject>
        </ScrollAnimation>
      </S.StudyInfo>
      <S.Graphic />
      <BPS.BlogPostContainer>
        <S.CaseStudy>
          <BPS.BlogBox className='blog-box'>
            <BPS.BlogHTML>
              <ReactMarkdown source={Content.contentHtml} escapeHtml={false} />
            </BPS.BlogHTML>
          </BPS.BlogBox>
        </S.CaseStudy>
      </BPS.BlogPostContainer>
    </>
  )
}

export default Study
