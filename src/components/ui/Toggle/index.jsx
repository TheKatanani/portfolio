import React, { useContext } from 'react'
import i18next, { changeLanguage } from 'i18next';
import { darkTheme, lightTheme } from '../../../style/theme';
import { ButtonStayled, MainStayled } from './styled';
import { MainButton } from '../../../style/components';
import Dark from '../../../assets/images/moon.png'
import Light from '../../../assets/images/brightness.png'
import { LangContext, ThemeContext } from '../../../Context';
import { useTranslation } from 'react-i18next';
const Toggle = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [, setLang] = useContext(LangContext);
  const { t } = useTranslation();
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === lightTheme ? darkTheme : lightTheme);
    localStorage.setItem('theme', theme.theme);
    // localStorage.setItem('lang', i18next.language); try this 
  }
  const handleChangeLang = () => {
    const nowLang = i18next.language === "en" ? "ar" : "en"
    changeLanguage(nowLang)
    setLang(nowLang)
  }
  return (
    <MainStayled >
      <ButtonStayled onClick={toggleTheme}><img src={theme.theme === "light" ? Dark : Light} alt="" /></ButtonStayled>
      <MainButton onClick={handleChangeLang}>{t("change language")}</MainButton>
    </MainStayled>
  )
}

export default Toggle