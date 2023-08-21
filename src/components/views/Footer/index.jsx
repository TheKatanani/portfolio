import React from 'react'
import { StyledFooter } from './styled'
import { Container } from '../../../style/components'
import Social from '../../ui/Social'
import useFetch from '../../../hook/useFetch'
import { mainApi } from '../../../assets/API'
// import { Link } from 'react-router-dom'
import Loading from '../../common/Loading'

const Footer = () => {
  const { data, loading, error } = useFetch(`${mainApi}infos/1?populate=*`);
  
  if (loading) {
    return <Loading />
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
          <a href={`https://wa.me/${data?.data.attributes.phone}`}>{data?.data.attributes.phone}</a>
        </li>
        <li>
          <h3>Write</h3>
          <a href={`mailto:${data?.data.attributes.email}`}>{data?.data.attributes.email}</a>
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