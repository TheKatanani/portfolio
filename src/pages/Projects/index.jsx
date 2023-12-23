import React from 'react'
import {  StyledProjects } from './styled'
import {  BlueButton, Container } from '../../style/components'
import { useTranslation } from 'react-i18next'
import Box from './Box'
import Title from '../../components/common/Title'
import Loading from '../../components/common/Loading'
import { Link } from 'react-router-dom'
import useFirebase from '../../hook/useFirebase'
import { actions } from '../../assets/actions'

const Projects = () => {
  const { t } = useTranslation()
  const { data, loading, error } = useFirebase(actions.GET_ALL, { path: 'project' })

  if (loading) {
    return <Loading/>;
  }

  if (error ) {
    return <p>Error: {error?.message }</p>;
  }

  return (
    <StyledProjects>
      <Container className='container'>
        <header>
            <Title>{t("Projects")}</Title>
        </header>
        <section>   
          {
            data.map((el)=>(
              el?.isMainProject&&
              <Box key={el?.id} id={el?.id} {...el}/>
            ))
          }        
        </section>
        <Link className='more' to={'/portfolio'}>
          <BlueButton>more projects</BlueButton>
        </Link>
      </Container>
    </StyledProjects>
  )
}

export default Projects