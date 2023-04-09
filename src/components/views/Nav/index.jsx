import React from 'react'
import { StyledNav } from './styled'
import { Container } from '../../../style/components'
import Logo from '../../common/Logo'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Nav = () => {
  const {t} =useTranslation();
  return (
    <StyledNav>
      <Container className='container'>
        <div className="logo-box">
          <div className="logo">
            <Logo/>
          </div>
          <div className="text">
            <h2 className="name">{t("name")}</h2>
            <p className="jobTitle">{t("jobTitle")}</p>
          </div>
        </div>
        <ul>
          <NavLink to="/about">{t("ABOUT ME")}</NavLink>
          <NavLink to="/resume">{t("RESUME")}</NavLink>
          <NavLink to="/projects">{t("PROJECTS")}</NavLink>
          <NavLink to="/contact">{t("CONTACT")}</NavLink>
          <NavLink to="/portfolio">{t("PORTFOLIO")}</NavLink>
        </ul>
      </Container>
    </StyledNav>
  )
}

export default Nav