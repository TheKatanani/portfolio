import React from 'react'
import { Link } from 'react-router-dom'
import { info } from '../../../mock'
import { FaceBook, GitHub, Instagram, LinkedIn } from '../../../assets/Icons'
import { StyledSocial } from './styled'

const Social = () => {
  return (
    <StyledSocial>
          <li>
            <Link to={info.facebock}><FaceBook/></Link>
          </li>
          <li>
            <Link to={info.github}><GitHub/></Link>
          </li>
          <li>
            <Link to={info.linkedin}><LinkedIn/></Link>
          </li>
          <li>
            <Link to={info.instagram}><Instagram/></Link>
          </li>
        </StyledSocial>
  )
}

export default Social