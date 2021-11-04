import React from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import * as S from './Designs.style'
import * as WS from '@components/Work/Work.style'

import Nike from '@pub/Nike.png'
import Swiggy from '@pub/Swiggy.png'
import Robinhood from '@pub/Robinhood.png'

type Designs = {
  [K in 'title' | 'image' | 'skills' | 'description']: string
}

const DesignsComponent: React.FC = () => {
  const Designs: Designs[] = [
    {
      title: 'Robinhood',
      image: Robinhood,
      description: 'Giving a new look & personality to the Robinhood app',
      skills: 'Figma Blender Photoshop',
    },
    {
      title: 'Swiggy',
      image: Swiggy,
      description: 'A modern, dark redesign of the Swiggy app',
      skills: 'Figma Blender',
    },
    {
      title: 'Nike',
      image: Nike,
      description: 'The Nike mobile app redesigned with a new & fluid look',
      skills: 'Figma Photoshop',
    },
  ]

  return (
    <S.DesignsContainer id='designs'>
      <ScrollAnimation animateIn='animate__bounceInRight' animateOnce={true}>
        <S.DesignsHeader>Designing</S.DesignsHeader>
      </ScrollAnimation>
      <S.DesignsContainer>
        {Designs.map((project, index) => (
          <WS.ProjectBox key={index}>
            <WS.InfoContainer>
              <ScrollAnimation animateIn='animate__flipInX' animateOnce={true}>
                <WS.ProjectTitle>{project.title}</WS.ProjectTitle>
              </ScrollAnimation>
              <ScrollAnimation animateIn='animate__flipInX' animateOnce={true}>
                <WS.ProjectDescription>
                  {project.description}
                </WS.ProjectDescription>
              </ScrollAnimation>

              <ScrollAnimation animateIn='animate__flipInX' animateOnce={true}>
                <WS.ProjectTech>{project.skills}</WS.ProjectTech>
              </ScrollAnimation>
              <WS.ButtonsContainer>
                <ScrollAnimation
                  animateIn='animate__flipInX'
                  animateOnce={true}
                >
                  <WS.ViewProjectButton
                    href={`/studies/${project.title.toLowerCase()}`}
                    target='_blank'
                  >
                    View Project
                  </WS.ViewProjectButton>
                </ScrollAnimation>
              </WS.ButtonsContainer>
            </WS.InfoContainer>
            <WS.ProjectGraphic>
              <img
                src={project.image}
                alt='Project Graphic'
                width={500}
                height={700}
              />
            </WS.ProjectGraphic>
          </WS.ProjectBox>
        ))}
      </S.DesignsContainer>
    </S.DesignsContainer>
  )
}

export default DesignsComponent
