import React from 'react'
import {  StyledProjects } from './styled'
import {  Container } from '../../style/components'
import { useTranslation } from 'react-i18next'
import Box from './Box'
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
          {/* <Box skills={["json-server","styled-component","react","redux"]} img={upwork} title={t("Upwork Clone")} discription={[t("UpworkP1"), t("UpworkP2"), t("UpworkP3")]} />
          <Box img={brand} title={t("Brand(AliExpress clone)")} discription={[t("BrandP1"), t("BrandP2"), t("BrandP3"), t("BrandP4"), t("BrandP5"), t("BrandP6")]} />
          <Box img={game} title={t("PS-Game")} discription={[t("PS-GameP1"), t("PS-GameP2"), t("PS-GameP3"), t("PS-GameP4")]} />
          <Box img={resturant} title={t("Vegan Restaurant Website")} discription={[t("RestaurantP1"), t("RestaurantP2")]} /> */}
          {
            porjects.map((el)=>(
              <Box {...el}/>
            ))
          }        
        </section>
      </Container>
    </StyledProjects>
  )
}

export default Projects