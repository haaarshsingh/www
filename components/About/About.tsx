import React from 'react'

import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import ScrollAnimation from 'react-animate-on-scroll'

import * as S from './About.style'
import * as Icon from 'react-feather'

import computer from '@pub/computer.png'
import idCard from '@pub/idCard.png'
import video from '@pub/videoPlayer.png'

const AboutComponent: React.FC = () => {
  const skills = [
    'TypeScript',
    'Node',
    'React',
    'PostgreSQL',
    'PlanetScale',
    'Prisma',
    'Vercel',
    'GraphQL',
  ]

  return (
    <S.AboutContainer id='about'>
      <S.InfoContainer>
        <ScrollAnimation animateIn='animate__bounceInRight' animateOnce={true}>
          <S.AboutHeader>About Me</S.AboutHeader>
        </ScrollAnimation>
        <ScrollAnimation animateIn='animate__flipInX' animateOnce={true}>
          <S.AboutDescription>
            Hi! I'm Harsh, a passionate self-taught programmer and designer from
            New York
          </S.AboutDescription>
        </ScrollAnimation>
        <ScrollAnimation animateIn='animate__flipInX' animateOnce={true}>
          <S.AboutDescription>
            I first started coding at 11, and overtime learnt many useful
            technologies and frameworks to make and design cool web apps
          </S.AboutDescription>
        </ScrollAnimation>
        <ScrollAnimation animateIn='animate__flipInX' animateOnce={true}>
          <S.AboutDescription>
            Here are a few technologies I've been working with recently:
          </S.AboutDescription>
        </ScrollAnimation>
        <S.SkillsContainer>
          {skills.map((skill, index) => (
            <ScrollAnimation
              animateIn='animate__flipInX'
              animateOnce={true}
              key={index}
            >
              <S.SkillBox>
                <Icon.ArrowRight style={{ marginRight: 5 }} />
                {skill}
              </S.SkillBox>
            </ScrollAnimation>
          ))}
        </S.SkillsContainer>
      </S.InfoContainer>
      <S.ImgBox style={{ width: 500, marginLeft: 700 }}>
        <img src={computer} alt='Computer' width={580} height={450} />
        <ParallaxProvider>
          <S.ImgBox style={{ marginLeft: 300 }}>
            <Parallax x={[-30, 30]}>
              <img src={video} alt='Video Player' width={200} height={200} />
            </Parallax>
          </S.ImgBox>
          <S.ImgBox style={{ marginTop: 200 }}>
            <Parallax y={[-100, 100]}>
              <img src={idCard} alt='ID Card' width={150} height={90} />
            </Parallax>
          </S.ImgBox>
        </ParallaxProvider>
      </S.ImgBox>
    </S.AboutContainer>
  )
}

export default AboutComponent
