import React from 'react'
import {  StyledResume } from './styled'
import { BlueButton, Container } from '../../style/components'
import { useTranslation } from 'react-i18next'
import Box from './Box'

const Resume = () => {
  const { t } = useTranslation()
  return (
    <StyledResume>
      <Container className='container'>
        <section>
          <div className='experience'>
            <h1>{t("experience")}</h1>
            <BlueButton>{t("download cv")}</BlueButton>
          </div>
          <Box title={t("Upwork Clone")} discription={[t("UpworkP1"), t("UpworkP2"), t("UpworkP3")]} />
          <Box title={t("Brand(AliExpress clone)")} discription={[t("BrandP1"), t("BrandP2"), t("BrandP3"), t("BrandP4"), t("BrandP5"), t("BrandP6")]} />
          <Box title={t("PS-Game")} discription={[t("PS-GameP1"), t("PS-GameP2"), t("PS-GameP3"), t("PS-GameP4")]} />
          <Box title={t("Vegan Restaurant Website")} discription={[t("RestaurantP1"), t("RestaurantP2")]} />
          <Box title={t("Admin")} discription={[t("AdminP1"), t("AdminP2"), t("AdminP3"), t("AdminP4")]} />
        </section>
        <section>
          <h2>{t("Education")}</h2>
          <Box title={t("2020-present")} discription={[t("BachelorP1"), t("BachelorP2")]} />
          <Box title={t("11/2022 – 03/2023")} discription={[t("FrontP1")]} />
        </section>
        <section>
          <h2>{t("skills")}</h2>
          <div className="skills">
            <Box title={t("Front-End")} discription={["React JS", "Redux", "JavaScript", "ES6", "SCSS", "CSS", "Bootstrap 5", "HTML"]} />
            <Box title={t("Familiar with")} discription={["Java", "Python", "MySQL", "TypeScript"]} />
            <Box title={t("Additional")} discription={["command line", "Git", "GitHub"]} />
          </div>
        </section>
        <section>
          <h2>{t("Languages")}</h2>
            <Box title={t("Arabic")} discription={[ "native"]} />
            <Box title={t("English")} discription={["intermediate"]} />
        </section>
      </Container>
    </StyledResume>
  )
}

export default Resume