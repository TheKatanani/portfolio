import React from 'react'
import {  StyledProjects } from './styled'
import {  Container } from '../../style/components'
import { useTranslation } from 'react-i18next'
import Box from './Box'
import Box2 from './Box2'
import Title from '../../components/common/Title'
import { porjects } from '../../mock'

const Projects = () => {
  const { t } = useTranslation()
  return (
    <StyledProjects>
      <Container className='container'>
        <header>
            <Title>{t("Projects")}</Title>
            <p>{t("PorjectsP")}</p>
        </header>
        <section>
          {
            // porjects.map((el)=>(
            //   <Box {...el}/>
            // ))
          }        
          {
            porjects.map((el)=>(
              <Box2 {...el}/>
            ))
          }        
        </section>
      </Container>
    </StyledProjects>
  )
}

export default Projects