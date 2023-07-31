import React, { useContext } from 'react'
import { darkTheme, lightTheme } from '../../../style/theme';
import Dark from '../../../assets/images/moon.png'
import Light from '../../../assets/images/brightness.png'
import {  ThemeContext } from '../../../Context';
import { ButtonStayled } from './styled';
const Mood = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === lightTheme ? darkTheme : lightTheme);
    localStorage.setItem('theme', theme.theme);
    // localStorage.setItem('lang', i18next.language); try this 
  }
  return (
    <ButtonStayled onClick={toggleTheme}><img src={theme.theme === "light" ? Dark : Light} alt="" /></ButtonStayled>
  )
}

export default Mood