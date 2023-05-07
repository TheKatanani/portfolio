import React from 'react'
import Card from './Card'
import { porjects } from '../../mock'
import { StyledPortfolio } from './styled'
import { Container } from '../../style/components'
import Title from '../../components/common/Title'

const Portfolio = () => {
  return (
    <StyledPortfolio>
      <Title>Portfolio</Title>
      <Container className='container'>
    {
      porjects.map((el)=>(
        <Card {...el}/>
        )) 
      }
    {
      porjects.map((el)=>(
        <Card {...el}/>
        )) 
      }
    {
      porjects.map((el)=>(
        <Card {...el}/>
        )) 
      }
      </Container>
    </StyledPortfolio>
  )
}

export default Portfolio