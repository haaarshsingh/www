import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import * as S from './Work.style'
import * as Icon from 'react-feather'

import NoteShack from './../../public/NoteShack.png'
import Debutur from './../../public/Debutur.png'
import SnipBin from './../../public/SnipBin.png'
import FastBot from './../../public/FastBot.png'
import SketchMessage from './../../public/SketchMessage.png'

interface Projects {
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
      link: 'github.com/harshhhdev/NoteShack',
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
      skills: 'Node Express MongoDB',
      github: 'snip-bin',
      link: 'snipbin.herokuapp.com',
    },
    {
      title: 'FastBot',
      image: FastBot,
      description: 'Utility bot to manage your discord server',
      skills: 'Discord.js MongoDB Node',
      github: 'fast-bot',
      link: 'github.com/harshhhdev/fastbot',
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
    <S.WorkContainer id="projects">
      <ScrollAnimation animateIn="animate__bounceInRight">
        <S.WorkHeader>My Work</S.WorkHeader>
      </ScrollAnimation>
      {Projects.map((project, index) => (
        <S.ProjectBox key={index}>
          <S.InfoContainer>
            <ScrollAnimation animateIn="animate__flipInX">
              <S.ProjectTitle>{project.title}</S.ProjectTitle>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__flipInX">
              <S.ProjectDescription>{project.description}</S.ProjectDescription>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__flipInX">
              <S.ProjectTech>{project.skills}</S.ProjectTech>
            </ScrollAnimation>
            <S.ButtonsContainer>
              <ScrollAnimation animateIn="animate__flipInX">
                <S.ViewProjectButton
                  href={`https://${project.link}`}
                  target="_blank"
                >
                  View Project
                </S.ViewProjectButton>
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__flipInX">
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
            <img
              src={project.image}
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
