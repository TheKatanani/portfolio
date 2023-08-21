import React from 'react'
import {  StyledProjects } from './styled'
import {  BlueButton, Container } from '../../style/components'
import { useTranslation } from 'react-i18next'
import Box from './Box'
import Title from '../../components/common/Title'
import Loading from '../../components/common/Loading'
import useFetch from '../../hook/useFetch'
import { mainApi } from '../../assets/API'
import { Link } from 'react-router-dom'

const Projects = () => {
  const { t } = useTranslation()
  const { data: data1, loading: loading1, error: error1 } = useFetch(`${mainApi}projects?populate=*`);
  // const { data: data2, loading: loading2, error: error2 } = useFetch(`${mainApi}project-p`);

  // if (loading1 || loading2) {
  if (loading1) {
    return <Loading/>;
  }

  if (error1 ) {
  // if (error1 || error2) {
  //   return <p>Error: {error1?.message || error2?.message}</p>;
    return <p>Error: {error1?.message }</p>;
  }

  return (
    <StyledProjects>
      <Container className='container'>
        <header>
            <Title>{t("Projects")}</Title>
            {/* <p>{data2.data.attributes.paragraph}</p> */}
        </header>
        <section>   
          {
            data1.data.map((el)=>(
              el.attributes.isMainProject&&
              <Box key={el.id} id={el.id} {...el.attributes}/>
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