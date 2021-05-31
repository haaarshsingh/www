import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import * as S from './Work.style'
import * as Icon from 'react-feather'
import Img from 'next/image'

interface Projects {
  title: string
  image: string
  description: string
  skills: string
  github: string
  link: string
}

const AboutComponent: React.FC = () => {
  const Projects: Projects[] = [
    {
      title: 'NoteShack',
      image: '840756218371899412/NoteShack.png',
      description: 'An open-source full-stack project boilerplate',
      skills: 'GraphQL React PostgreSQL TypeScript',
      github: 'NoteShack',
      link: 'github.com/harshhhdev/NoteShack',
    },
    {
      title: 'Debutur',
      image: '840761024016678952/Debutur.png',
      description: 'Easily create, and personalise your portfolio',
      skills: 'TypeScript Node Express MongoDB',
      github: 'debutur',
      link: 'debutur.herokuapp.com',
    },
    {
      title: 'SnipBin',
      image: '840745075998457856/unknown.png',
      description: 'Lightweight website to paste code snippets',
      skills: 'Node Express MongoDB',
      github: 'snip-bin',
      link: 'snipbin.herokuapp.com',
    },
    {
      title: 'FastBot',
      image: '840756216559829033/FastBot.png',
      description: 'Utility bot to manage your discord server',
      skills: 'Discord.js MongoDB Node',
      github: 'fast-bot',
      link: 'github.com/harshhhdev/fastbot',
    },
    {
      title: 'SketchMessage',
      image: '848766051033546752/SketchMessage.png',
      description: 'Create and communicate through drawings',
      skills: 'Socket Node Express',
      github: 'sketch-message',
      link: 'sketchmessage.herokuapp.com',
    },
  ]

  return (
    <S.WorkContainer id="projects">
      <ScrollAnimation
        animateIn="animate__bounceInRight"
        animateOut="animate__bounceOutLeft"
      >
        <S.WorkHeader>My Work</S.WorkHeader>
      </ScrollAnimation>
      {Projects.map((project, index) => (
        <S.ProjectBox key={index}>
          <S.InfoContainer>
            <ScrollAnimation
              animateIn="animate__flipInX"
              animateOut="animate__bounceOutLeft"
            >
              <S.ProjectTitle>{project.title}</S.ProjectTitle>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__flipInX"
              animateOut="animate__bounceOutLeft"
            >
              <S.ProjectDescription>{project.description}</S.ProjectDescription>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="animate__flipInX"
              animateOut="animate__bounceOutLeft"
            >
              <S.ProjectTech>{project.skills}</S.ProjectTech>
            </ScrollAnimation>
            <S.ButtonsContainer>
              <ScrollAnimation
                animateIn="animate__flipInX"
                animateOut="animate__bounceOutLeft"
              >
                <S.ViewProjectButton
                  href={`https://${project.link}`}
                  target="_blank"
                >
                  View Project
                </S.ViewProjectButton>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__flipInX"
                animateOut="animate__bounceOutLeft"
              >
                <S.GitHubButton
                  href={`https://github.com/harshhhdev/${project.github}`}
                  target="_blank"
                >
                  <Icon.GitHub />
                </S.GitHubButton>
              </ScrollAnimation>
            </S.ButtonsContainer>
          </S.InfoContainer>
          <S.ProjectGraphic>
            <Img
              src={`/${project.title}.png`}
              alt="Project Graphic"
              width={500}
              height={700}
            />
          </S.ProjectGraphic>
        </S.ProjectBox>
      ))}
    </S.WorkContainer>
  )
}

export default AboutComponent
