import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyledAbout } from './styled';

const About = () => {
  const {t} =useTranslation();
  return (
    <StyledAbout>
    <div>{t("hello world")}</div>
    </StyledAbout>
  )
}

export default About