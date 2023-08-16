import React, { useState } from 'react'
import Card from './Card'
import { StyledPortfolio } from './styled'
import { Container } from '../../style/components'
import Title from '../../components/common/Title'
import { mainApi } from '../../assets/API'
import useFetch from '../../hook/useFetch'
import Loading from '../../components/common/Loading'
import Filter from './Filter'

const Portfolio = () => {
  const [filter,setFilter]=useState()
  const { data, loading, error } = useFetch(`${mainApi}projects?populate=*`);
  if (loading) {
    return <Loading/>
  } 
  if (error) {
    return error.message
  }
  return (
    <StyledPortfolio>
      <Title>Portfolio</Title>
      <Filter {...{filter,setFilter}}/>
      <Container className='container'>
        {
          data.data.map((el) => (
            !filter || el.attributes.category.data.attributes.type === filter ? (
              <Card key={el.id} id={el.id} {...el.attributes} />
            ) : null
          ))
        }
      </Container>
    </StyledPortfolio>
  )
}

export default Portfolio