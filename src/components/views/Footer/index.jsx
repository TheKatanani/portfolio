import React from 'react'
import { StyledFooter } from './styled'
import { Container } from '../../../style/components'
import Social from '../../ui/Social'
import Loading from '../../common/Loading'
import useFirebase from '../../../hook/useFirebase'
import { actions } from '../../../assets/actions'

const Footer = () => {
  const { data, loading, error } = useFirebase(actions.GET_ALL, { path: 'info' })
  if (loading) {
    return <Loading />
  }
  
  console.log("the info data is from footer :",data)
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
          <a href={`https://wa.me/${data[0]?.phone}`}>{data[0]?.phone}</a>
        </li>
        <li>
          <h3>Write</h3>
          <a href={`mailto:${data[0]?.email}`}>{data[0]?.email}</a>
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