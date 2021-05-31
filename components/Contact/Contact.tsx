import React from 'react'
import Img from 'next/image'

import * as S from './Contact.style'
import useForm from './../../hooks/useForm'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import ScrollAnimation from 'react-animate-on-scroll'
import Footer from './../Footer/Footer'

const Contact: React.FC = () => {
  const { formData, errors, handleInput, isFormValid } = useForm()

  return (
    <S.ContactContainer id="contact">
      <S.ContactHeader>Contact</S.ContactHeader>
      <S.HandsBox className="hands">
        <ParallaxProvider>
          <Parallax y={[-50, 0]}>
            <Img src="/hand-2.png" alt="hand" width={433} height={727} />
          </Parallax>
          <Parallax x={[-10, 10]}>
            <Img src="/hand-3.png" alt="hand" width={434} height={1014} />
          </Parallax>
        </ParallaxProvider>
      </S.HandsBox>
      <S.EmailForm
        noValidate
        action="https://formspree.io/f/mdoyezjy"
        method="POST"
      >
        <ScrollAnimation
          animateIn="animate__flipInX"
          animateOut="animate__bounceOutLeft"
        >
          <S.ContactMain>👋 Hello, what's up?</S.ContactMain>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__flipInX"
          animateOut="animate__bounceOutLeft"
        >
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
        <ScrollAnimation
          animateIn="animate__flipInX"
          animateOut="animate__bounceOutLeft"
        >
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
