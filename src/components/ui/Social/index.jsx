import React from 'react'
import { Link } from 'react-router-dom'
import { FaceBook, GitHub, Instagram, LinkedIn } from '../../../assets/Icons'
import { StyledSocial } from './styled'
import useFetch from '../../../hook/useFetch'
import { mainApi } from '../../../assets/API'

const Social = () => {
  const { data, loading, error } = useFetch(`${mainApi}infos/1?populate=*`);
  const social = {
  facebook: data?.data.attributes.social.facebook,
  github: data?.data.attributes.social.github,
  instagram: data?.data.attributes.social.instagram,
  linkedIn: data?.data.attributes.social.linkedIn
  }
  if (loading) {
    return <loading />
  }else {
    
  }
  if (error) {
    return error.message
  }
  return (
    <StyledSocial>
          <li>
            <Link to={social.facebook} target='_blank'><FaceBook/></Link>
          </li>
          <li>
            <Link to={social.github} target='_blank'><GitHub/></Link>
          </li>
          <li>
            <Link to={social.linkedIn} target='_blank'><LinkedIn/></Link>
          </li>
          <li>
            <Link to={social.instagram} target='_blank'><Instagram/></Link>
          </li>
        </StyledSocial>
  )
}

export default Social