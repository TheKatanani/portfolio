import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Portal from '../Portal'
import { StyledMenu } from './Styled'
import { MenuItems } from '../../../mock'
import { MenuContext } from '../../../Context'
import Lang from '../../common/Lang'
import Mood from '../../common/Mood'
import { useTranslation } from 'react-i18next'

const Menu = () => {
  const [, setShow] = useContext(MenuContext);
  const { t } = useTranslation();
  return (
    <Portal >
      <StyledMenu className='menu'>
        {MenuItems.map((el,i) => (
          <li key={i}>
            <NavLink onClick={() => setShow(false)} to={el.path}>{t(el.name)}</NavLink>
          </li>
        ))}
        {/* <li><Lang/></li> */}
        <li><Mood/></li>
      </StyledMenu>
    </Portal>
  )
}

export default Menu