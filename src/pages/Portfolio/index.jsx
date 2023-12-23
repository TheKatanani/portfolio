import React, { useState } from 'react'
import Card from './Card'
import { StyledPortfolio } from './styled'
import { Container } from '../../style/components'
import Title from '../../components/common/Title'
import Loading from '../../components/common/Loading'
import Filter from './Filter'
import useFirebase from '../../hook/useFirebase'
import { actions } from '../../assets/actions'

const Portfolio = () => {
  const [filter,setFilter]=useState()
  const { data, loading, error } = useFirebase(actions.GET_ALL, { path: 'project' })
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
          data.map((el) => (
            !filter || el.category === filter ? (
              <Card key={el.id} id={el.id} {...el} />
            ) : null
          ))
        }
      </Container>
    </StyledPortfolio>
  )
}

export default Portfolio