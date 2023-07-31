import React from 'react'
import { StyledNav } from './styled'
import { Container } from '../../../style/components'
import Logo from '../../common/Logo'
import { NavLink } from 'react-router-dom'
import Menu from '../Menu'
import { useContext } from 'react'
import { MenuContext } from '../../../Context'

const Nav = () => {
  const [show , setShow]=useContext(MenuContext);

  return (
    <StyledNav {...{show}}>
      <Container className='container'>
        <div className="logo-box">
          <div className="logo">
            <Logo/>
          </div>
          <div className="text">
            <h2 className="name">Mohammed Katanani</h2>
            <p className="jobTitle">Front-End Developer</p>
          </div>
        </div>
        <ul className='menu'>
          <NavLink to="/about">ABOUT ME</NavLink>
          <NavLink to="/resume">RESUME</NavLink>
          <NavLink to="/projects">PROJECTS</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="/portfolio">PORTFOLIO</NavLink>
        </ul>
        <div className="menuIcon" onClick={()=>setShow(!show)}>
        </div>
        <Menu/>
      </Container>
    </StyledNav>
  )
}

export default Nav