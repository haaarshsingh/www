import React from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import * as S from './Designs.style'

import WashingMachine from '@pub/WashingMachineDesign.png'
import Pizza from '@pub/PizzaDesign.png'
import Book from '@pub/BookDesign.png'
import FurnitureStore from '@pub/FurnitureStoreDesign.png'

type Design = {
  img: any
  link: string
  bottom: boolean
}

const AboutComponent: React.FC = () => {
  const DribbleDesigns: Design[] = [
    {
      img: '15298518/media/3c0361304205796ad9fcb4175a418135',
      link: '15298518-Finance-Dashboard',
      bottom: true,
    },
    {
      img: '15340342/media/7b6cd6f29956cb6b62e589802a80b090',
      link: '15340342-Tuneyy',
      bottom: true,
    },
    {
      img: '15075985/media/476ff8a45729a17eb8a22ee9c12b3b52',
      link: '15075985-Jaszy-Design-Tool',
      bottom: true,
    },
    {
      img: '15028870/media/1081959349a76866c39eab08724fc767',
      link: '15028870-BolChat-Private-Messaging',
      bottom: true,
    },
    {
      img: '15102466/media/15c5f10e003a07ea1c146ffdc23867d3',
      link: '15102466-DoubleDealz-Buy-2nd-Hand-Goods',
      bottom: true,
    },
    {
      img: '15373365/media/f42dfba767a0aaef0ee462af2d281907',
      link: '15373365-Stocks-App',
      bottom: true,
    },
  ]

  return (
    <S.DesignsContainer id='designs'>
      <ScrollAnimation animateIn='animate__bounceInRight' animateOnce={true}>
        <S.DesignsHeader>Designing</S.DesignsHeader>
      </ScrollAnimation>
      <S.DesignsContainer>
        <S.DesignContainer>
          <S.FirstDesignContainer
            href='https://www.figma.com/file/HiBZs36LqXtGdWflYbotug/Washing-Machine'
            target='_blank'
          >
            <S.DesignGraphic
              src={WashingMachine}
              alt='UI Design'
              width={550}
              height={640}
            />
          </S.FirstDesignContainer>
          <S.SecondDesignContainer
            href='https://www.figma.com/file/qobdswcA1FNPCB5rBfjya3/PizzaOrdering'
            target='_blank'
          >
            <S.DesignGraphic
              src={Pizza}
              alt='UI Design'
              width={550}
              height={640}
            />
          </S.SecondDesignContainer>
        </S.DesignContainer>
        <S.DesignContainer>
          <S.FirstDesignContainer
            href='https://www.figma.com/file/AWXI76vFYo6TXt1Mguy1Zc/BookDesign'
            target='_blank'
          >
            <S.DesignGraphic
              src={Book}
              alt='UI Design'
              width={550}
              height={640}
            />
          </S.FirstDesignContainer>
          <S.SecondDesignContainer
            href='https://www.figma.com/file/EZFFxvbRN8yYOykumAID9s/FurnitureStore'
            target='_blank'
          >
            <S.DesignGraphic
              src={FurnitureStore}
              alt='UI Design'
              width={550}
              height={640}
            />
          </S.SecondDesignContainer>
        </S.DesignContainer>
        <ScrollAnimation animateIn='animate__bounceInRight' animateOnce={true}>
          <S.DesignsHeader dribbble>Dribbble Shots</S.DesignsHeader>
        </ScrollAnimation>
        <S.DribbbleContainer>
          <S.DesignsGrid>
            {DribbleDesigns.map((design, index) => (
              <S.DribbbleImageParent
                key={index}
                href={`https://dribbble.com/shots/${design.link}`}
                target='_blank'
              >
                <S.DribbbleBox
                  src={`https://cdn.dribbble.com/users/6216672/screenshots/${design.img}.png`}
                  alt='UI Design'
                  width={800}
                  height={600}
                />
              </S.DribbbleImageParent>
            ))}
          </S.DesignsGrid>
        </S.DribbbleContainer>
      </S.DesignsContainer>
    </S.DesignsContainer>
  )
}

export default AboutComponent
