import React from 'react'
import { Link } from 'react-router-dom'
import { StyledLinks } from './styled'

const Links = ({demo , repo}) => {
  return (
    <StyledLinks className='linkes'>
      <Link to={demo} target='_blank'>demo</Link>
      <Link to={repo} target='_blank'>repo</Link>
    </StyledLinks>
  )
}

export default Links