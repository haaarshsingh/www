import React from 'react'
import useForm from './../../hooks/useForm'

import * as S from './Contact.style'

import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import ScrollAnimation from 'react-animate-on-scroll'

import LeftHand from './../../public/hand-2.png'
import RightHand from './../../public/hand-3.png'

const Contact: React.FC = () => {
  const { formData, errors, handleInput, isFormValid } = useForm()

  return (
    <S.ContactContainer id="contact">
      <S.ContactHeader>Contact</S.ContactHeader>
      <S.HandsBox className="hands">
        <ParallaxProvider>
          <Parallax y={[-50, 0]}>
            <img src={LeftHand} alt="hand" width={433} height={727} />
          </Parallax>
          <Parallax x={[-10, 10]}>
            <img src={RightHand} alt="hand" width={434} height={1014} />
          </Parallax>
        </ParallaxProvider>
      </S.HandsBox>
      <S.EmailForm
        noValidate
        action="https://formspree.io/f/mdoyezjy"
        method="POST"
      >
        <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
          <S.ContactMain>👋 Hello, what's up?</S.ContactMain>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
          <S.ContactDescription>
            Whether you have a question, want to say hi, or anything else that
            it may be, my inbox is always open!
          </S.ContactDescription>
        </ScrollAnimation>
        <S.InputBar
          className={errors._replyto && 'invalid'}
          placeholder="your@email.com"
          type="email"
          onChange={handleInput}
          value={formData.email}
          id="email"
          name="_replyto"
          required
          autoComplete="off"
        />
        <S.InputBar
          placeholder="Your Name"
          type="text"
          className={errors.name && 'invalid'}
          onChange={handleInput}
          value={formData.name}
          name="name"
          required
          autoComplete="off"
        />
        <S.Message
          placeholder="What would you like to tell me?"
          className={errors.message && 'invalid'}
          onChange={handleInput}
          value={formData.message}
          name="message"
          required
          autoComplete="off"
        />
        <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
          <S.Submit
            as="button"
            type="submit"
            value="send"
            disabled={!isFormValid}
          >
            Send Email
          </S.Submit>
        </ScrollAnimation>
      </S.EmailForm>
    </S.ContactContainer>
  )
}

export default Contact
