import React from 'react'

import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import ScrollAnimation from 'react-animate-on-scroll'

import * as Icon from 'react-feather'
import * as S from './Home.style'

import img from '@pub/paint.png'

const HomeComponent: React.FC = () => {
  return (
    <S.Container id='home'>
      <S.HelloContainer>
        <ScrollAnimation
          animateIn='animate__flipInX'
          animateOnce={true}
          delay={200}
        >
          <S.ContainerText mono>Hi, I'm</S.ContainerText>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn='animate__bounceInRight'
          delay={200}
          animateOnce={true}
        >
          <S.Name>Harsh Singh</S.Name>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn='animate__flipInX'
          animateOnce={true}
          delay={200}
        >
          <S.ContainerText>
            I am a web designer and developer
          </S.ContainerText>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn='animate__flipInX'
          animateOnce={true}
          delay={200}
        >
          <S.SocialsContainer>
            <S.SocialLink href='https://github.com/harshhhdev/' target='_blank'>
              <Icon.GitHub />
            </S.SocialLink>
            <S.SocialLink
              href='https://twitter.com/harshhhdev/'
              target='_blank'
            >
              <Icon.Twitter />
            </S.SocialLink>
            <S.SocialLink
              href='https://dribbble.com/harshhhdev'
              target='_blank'
            >
              <Icon.Dribbble />
            </S.SocialLink>
          </S.SocialsContainer>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn='animate__flipInX'
          animateOnce={true}
          delay={200}
        >
          <S.ContactButtonBox href='#contact'>
            <S.ContactButton>Let's Talk!</S.ContactButton>
          </S.ContactButtonBox>
        </ScrollAnimation>
      </S.HelloContainer>
      <ParallaxProvider>
        <S.PaintBucketContainer>
          <Parallax x={[-50, 30]}>
            <img src={img} alt='Paint Bucket' width={500} height={500} />
          </Parallax>
        </S.PaintBucketContainer>
      </ParallaxProvider>
      <ParallaxProvider>
        <S.SVGContainer>
          <Parallax y={[-30, 30]}>
            <svg
              width='363'
              height='522'
              viewBox='0 0 563 722'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                clipRule='evenodd'
                d='M183.141 52.3341C191.933 21.3676 220.212 0 252.403 0H539C552.255 0 563 10.7452 563 24V698C563 711.255 552.255 722 539 722H24.7631C8.83442 722 -2.67503 706.768 1.67567 691.445L183.141 52.3341Z'
                fill='#2B2C2E'
              />
            </svg>
          </Parallax>
        </S.SVGContainer>
      </ParallaxProvider>
    </S.Container>
  )
}

export default HomeComponent
