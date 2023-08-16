import React from 'react'
import { StyledFooter } from './styled'
import { Container } from '../../../style/components'
import Social from '../../ui/Social'
import useFetch from '../../../hook/useFetch'
import { mainApi } from '../../../assets/API'

const Footer = () => {
  const { data, loading, error } = useFetch(`${mainApi}infos/1?populate=*`);
  
  if (loading) {
    return <loading />
  }else {
    
  }
  if (error) {
    return error.message
  }
  return (
    <StyledFooter>
      <Container className='container'>
      <p className="copyRight"> Mohammed Katanani &copy; 2023</p>
      <ul className='infoUl'>
        <li>
          <h3>Call</h3>
          <p>{data?.data.attributes.phone}</p>
        </li>
        <li>
          <h3>Email</h3>
          <p>{data?.data.attributes.email}</p>
        </li>
        <li>
          <h3>Follow</h3>
          <div><Social/></div>
        </li>
      </ul>
      </Container>
    </StyledFooter>
  )
}

export default Footer