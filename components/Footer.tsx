import { styled } from '@css/theme.config'
import { format } from 'date-fns'
import { FC } from 'react'
import { SiGithub, SiTwitter } from 'react-icons/si'

const Wrapper = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const Break = styled('hr', {
  marginTop: 160,
  borderTopWidth: 2,
  width: '16.666667%',
  borderColor: '$grey700',
  borderRadius: 2,
})

const Content = styled('div', {
  margin: '40px 0 80px 0',
  width: '66.666667%',
  textAlign: 'center',
})

const Day = styled('p', {
  marginBottom: 20,
  color: '$grey0',
  fontSize: '$sm',
})

const Icons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Link = styled('a', {
  '&:hover': { color: '$grey600' },
  svg: { fontSize: '$lg', marginRight: 8 },
  variants: { left: { true: { svg: { marginLeft: 8 } } } },
})

const Footer: FC = () => {
  return (
    <Wrapper>
      <Break />
      <Content>
        <Day>Happy {format(new Date(), 'EEEE')} ✌️</Day>
        <Icons>
          <Link
            href='https://twitter.com/harshhhdev'
            target='_blank'
            rel='noreferrer'
          >
            <SiTwitter aria-label='Twitter icon' />
          </Link>
          <Link
            href='https://github.com/harshhhdev'
            target='_blank'
            rel='noreferrer'
            left
          >
            <SiGithub aria-label='GitHub icon' />
          </Link>
        </Icons>
      </Content>
    </Wrapper>
  )
}

export default Footer
