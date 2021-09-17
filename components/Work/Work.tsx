import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import * as S from './Work.style'
import * as Icon from 'react-feather'

import NoteShack from '@pub/NoteShack.png'
import Debutur from '@pub/Debutur.png'
import SnipBin from '@pub/SnipBin.png'
import Oponion from '@pub/Oponion.png'
import SketchMessage from '@pub/SketchMessage.png'

type Projects = {
  title: string
  image: any
  description: string
  skills: string
  github: string
  link: string
}

const AboutComponent: React.FC = () => {
  const Projects: Projects[] = [
    {
      title: 'NoteShack',
      image: NoteShack,
      description: 'An open-source full-stack project boilerplate',
      skills: 'GraphQL React PostgreSQL TypeScript',
      github: 'NoteShack',
      link: 'www.figma.com/file/8UOFAwJvAZCXda3s3zXdO0/NoteShack?node-id=16%3A71',
    },
    {
      title: 'Debutur',
      image: Debutur,
      description: 'Easily create, and personalise your portfolio',
      skills: 'TypeScript Node Express MongoDB',
      github: 'debutur',
      link: 'debutur.herokuapp.com',
    },
    {
      title: 'SnipBin',
      image: SnipBin,
      description: 'Lightweight website to paste code snippets',
      skills: 'TypeScript Next Prisma GraphQL',
      github: 'snip-bin',
      link: 'snipbin.herokuapp.com',
    },
    {
      title: 'Oponion',
      image: Oponion,
      description: 'Utility bot to manage your discord server',
      skills: 'React Firebase TypeScript ECharts',
      github: 'oponion',
      link: 'oponion.vercel.app',
    },
    {
      title: 'SketchMessage',
      image: SketchMessage,
      description: 'Create and communicate through drawings',
      skills: 'Socket Node Express',
      github: 'sketch-message',
      link: 'sketchmessage.herokuapp.com',
    },
  ]

  return (
    <S.WorkContainer id='projects'>
      <ScrollAnimation animateIn='animate__bounceInRight' animateOnce={true}>
        <S.WorkHeader>My Work</S.WorkHeader>
      </ScrollAnimation>
      {Projects.map((project, index) => (
        <S.ProjectBox key={index}>
          <S.InfoContainer>
            <ScrollAnimation animateIn='animate__flipInX' animateOnce={true}>
              <S.ProjectTitle>{project.title}</S.ProjectTitle>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__flipInX' animateOnce={true}>
              <S.ProjectDescription>{project.description}</S.ProjectDescription>
            </ScrollAnimation>

            <ScrollAnimation animateIn='animate__flipInX' animateOnce={true}>
              <S.ProjectTech>{project.skills}</S.ProjectTech>
            </ScrollAnimation>
            <S.ButtonsContainer>
              <ScrollAnimation animateIn='animate__flipInX' animateOnce={true}>
                <S.ViewProjectButton
                  href={`https://${project.link}`}
                  target='_blank'
                >
                  View Project
                </S.ViewProjectButton>
              </ScrollAnimation>
              <ScrollAnimation animateIn='animate__flipInX' animateOnce={true}>
                <S.GitHubButton
                  href={`https://github.com/harshhhdev/${project.github}`}
                  target='_blank'
                >
                  <Icon.GitHub />
                </S.GitHubButton>
              </ScrollAnimation>
            </S.ButtonsContainer>
          </S.InfoContainer>
          <S.ProjectGraphic>
            <img
              src={project.image}
              alt='Project Graphic'
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
