import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Portal from '../Portal'
import { StyledMenu } from './Styled'
import { MenuItems } from '../../../mock'
import { MenuContext } from '../../../Context'

const Menu = () => {
  const [, setShow] = useContext(MenuContext);

  return (
    <Portal >
      <StyledMenu className='menu'>
        {MenuItems.map((el) => (
          <li>
            <NavLink onClick={() => setShow(false)} to={el.path}>{el.name}</NavLink>
          </li>
        ))}
      </StyledMenu>
    </Portal>
  )
}

export default Menu