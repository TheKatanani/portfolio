import React, { useContext } from 'react'
import i18next, { changeLanguage } from 'i18next';
import { darkTheme, lightTheme } from '../../../style/theme';
import { ButtonStayled, MainStayled } from './styled';
import { MainButton } from '../../../style/components';
import Dark from '../../../assets/images/moon.png'
import Light from '../../../assets/images/brightness.png'
import { ThemeContext } from '../../../Context';
import { useTranslation } from 'react-i18next';
const Toggle = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const {t} =useTranslation();
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === lightTheme ? darkTheme : lightTheme);
    localStorage.setItem('theme', theme.theme);
  }
  return (
    <MainStayled>
      <ButtonStayled onClick={toggleTheme}><img src={theme.theme === "light" ? Dark : Light} alt="" /></ButtonStayled>
      <MainButton onClick={()=>changeLanguage(i18next.language==="en"?"ar":"en")}>{t("change language")}</MainButton>
    </MainStayled>
  )
}

export default Toggle