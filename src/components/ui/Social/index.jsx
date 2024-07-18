import React from 'react'
import { Link } from 'react-router-dom'
import { FaceBook, GitHub, Instagram, LinkedIn } from '../../../assets/Icons'
import { StyledSocial } from './styled'
import useFirebase from '../../../hook/useFirebase'
import { actions } from '../../../assets/actions'
import Loading from '../../common/Loading'

const Social = () => {
  // you can use getone insted
  const { data, loading, error } = useFirebase(actions.GET_ALL, { path: 'info' })

  if (loading) {
    return <Loading/>
  }
  const social = {
    facebook: data[0]?.social.facebook,
    github: data[0]?.social.github,
    instagram: data[0]?.social.instagram,
    linkedIn: data[0]?.social.linkedIn,
    X: data[0]?.social.X,
    upwork: data[0]?.social.upwork,
    freelancer: data[0]?.social.freelancer,
    khamsat: data[0]?.social.khamsat,
    mostaql: data[0]?.social.mostaql,
  }
  if (error) {
    return error.message
  }
  return (
    <StyledSocial>
      <li>
        <Link to={social.facebook} target='_blank'><FaceBook /></Link>
      </li>
      <li>
        <Link to={social.github} target='_blank'><GitHub /></Link>
      </li>
      <li>
        <Link to={social.linkedIn} target='_blank'><LinkedIn /></Link>
      </li>
      <li>
        <Link to={social.instagram} target='_blank'><Instagram /></Link>
      </li>
    </StyledSocial>
  )
}

export default Social