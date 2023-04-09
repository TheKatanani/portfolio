import React, { useContext } from 'react'
import { StyledAbout } from './styled';
import Card from './Card';
import { BlueButton, Container, WhiteButton } from '../../style/components';
import { useTranslation } from 'react-i18next'
import { LangContext } from '../../Context';

const About = () => {
  const {t} =useTranslation();
  const [lang]= useContext(LangContext);
  return (
    <StyledAbout {...{lang}}>
      <Container className='container'>
        <Card/>   
        <div className="content">
          <h1>{t("hello")}</h1>
          <p>{t("whoIAm")}</p>
          <div className="buttons">
            <BlueButton>{t("resume")}</BlueButton>
            <WhiteButton>{t("projects")}</WhiteButton>
          </div>
          <p className="discription">{t("discription")}</p>
        </div>
      </Container>
    </StyledAbout>
  )
}

export default About