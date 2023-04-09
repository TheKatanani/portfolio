import React from 'react'
import { StyledFooter } from './styled'
import { Container } from '../../../style/components'
import Social from '../../ui/Toggle/Social'

const Footer = () => {
  return (
    <StyledFooter>
      <Container className='container'>
      <p className="copyRight">&copy; 2023 made with ❤ by mohammed katanani</p>
      <ul>
        <li>
          <h3>call</h3>
          <p>+970592263808</p>
        </li>
        <li>
          <h3>write</h3>
          <p>mkhkatanani14@gmail.com</p>
        </li>
        <li>
          <h3>follow</h3>
          <div><Social/></div>
        </li>
      </ul>
      </Container>
    </StyledFooter>
  )
}

export default Footer