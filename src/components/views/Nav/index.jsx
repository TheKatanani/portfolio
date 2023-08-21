import React from 'react'
import { StyledNav } from './styled'
import { Container } from '../../../style/components'
import Logo from '../../common/Logo'
import { Link, NavLink } from 'react-router-dom'
import Menu from '../Menu'
import { useContext } from 'react'
import { MenuContext } from '../../../Context'
import { mainApi } from '../../../assets/API'
import useFetch from '../../../hook/useFetch'
import { useTranslation } from 'react-i18next'

const Nav = () => {
  const [show, setShow] = useContext(MenuContext);
  const { t } = useTranslation();
  const { data, loading, error } = useFetch(`${mainApi}infos/1?populate=*`);
  if (loading) {
    return <p>...Loadintg</p>
  }
  if (error) {
    return error.message
  }
  return (
    <StyledNav {...{ show }}>
      <Container className='container'>
        <Link to='/about'>
          <div className="logo-box">
            <div className="logo">
              <Logo />
            </div>
            <div className="text">
              <h2 className="name">{data.data.attributes.name}</h2>
              <p className="jobTitle">{data.data.attributes.jobTitle}</p>
            </div>
          </div>
        </Link>
        <ul className='menu'>
          <NavLink to="/about">{t("ABOUT ME")}</NavLink>
          <NavLink to="/resume">{t("RESUME")}</NavLink>
          <NavLink to="/projects">{t("PROJECTS")}</NavLink>
          <NavLink to="/contact">{t("CONTACT")}</NavLink>
          <NavLink to="/portfolio">{t("PORTFOLIO")}</NavLink>
        </ul>
        <div className="menuIcon" onClick={() => setShow(!show)}>
        </div>
        <Menu />
      </Container>
    </StyledNav>
  )
}

export default Nav