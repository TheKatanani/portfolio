import Light from '../../../assets/images/LogoLight.png'
import Dark from '../../../assets/images/LogoDark.png'
import { useContext } from 'react';
import { ThemeContext } from '../../../Context';

const Logo = () => {
  const [theme, ] = useContext(ThemeContext);
  return (
    <img  src={theme.theme === "light" ? Light : Dark} alt='logo'/>
  )
}

export default Logo