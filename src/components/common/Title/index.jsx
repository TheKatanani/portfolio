import React from 'react'
import { StyledTitle } from './styled'

const Title = ({children}) => {
  return (
    <StyledTitle className='title'>{children}</StyledTitle>
  )
}

export default Title