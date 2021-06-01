import React from 'react'

import * as S from './404.style'

const NotFoundError: React.FC = () => {
  return (
    <S.ErrorWrapper>
      <S.ErrorHeader>I can't find the page you're looking for</S.ErrorHeader>
      <S.ErrorMessage>
        Mind checking out my <S.Link href="/blog">Blog?</S.Link>
      </S.ErrorMessage>
    </S.ErrorWrapper>
  )
}

export default NotFoundError
