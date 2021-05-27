import React from 'react'
import Img from 'next/image'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import ScrollAnimation from 'react-animate-on-scroll'

import * as S from './About.style'
import * as Icon from 'react-feather'

const AboutComponent: React.FC = () => {
  const skills = [
    'TypeScript',
    'Node',
    'React',
    'PostgreSQL',
    'MongoDB',
    'Prisma',
    'Express',
    'GraphQL',
  ]

  return (
    <S.AboutContainer id="about">
      <S.InfoContainer>
        <ScrollAnimation
          animateIn="animate__bounceInRight"
          animateOut="animate__bounceOutLeft"
        >
          <S.AboutHeader>About Me</S.AboutHeader>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__flipInX"
          animateOut="animate__bounceOutLeft"
        >
          <S.AboutDescription>
            Hi! I'm Harsh, a passionate self-taught programmer and designer from
            New York
          </S.AboutDescription>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__flipInX"
          animateOut="animate__bounceOutLeft"
        >
          <S.AboutDescription>
            I first started coding at 11, and overtime learnt many useful
            technologies and frameworks to make and design cool web apps
          </S.AboutDescription>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__flipInX"
          animateOut="animate__bounceOutLeft"
        >
          <S.AboutDescription>
            Here are a few technologies I've been working with recently:
          </S.AboutDescription>
        </ScrollAnimation>
        <S.SkillsContainer>
          {skills.map((skill, index) => (
            <ScrollAnimation
              animateIn="animate__flipInX"
              animateOut="animate__bounceOutLeft"
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
        <Img src="/computer.png" alt="Computer" width={580} height={450} />
        <ParallaxProvider>
          <S.ImgBox style={{ marginLeft: 300 }}>
            <Parallax x={[-30, 30]}>
              <Img
                src="/videoPlayer.png"
                alt="Video Player"
                width={200}
                height={200}
              />
            </Parallax>
          </S.ImgBox>
          <S.ImgBox style={{ marginTop: 200 }}>
            <Parallax y={[-100, 100]}>
              <Img src="/idCard.png" alt="ID Card" width={150} height={90} />
            </Parallax>
          </S.ImgBox>
        </ParallaxProvider>
      </S.ImgBox>
    </S.AboutContainer>
  )
}

export default AboutComponent
