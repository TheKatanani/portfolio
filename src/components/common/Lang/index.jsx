import React, { useContext } from 'react'
import { MainButton } from '../../../style/components'
import i18next, { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

import { LangContext } from '../../../Context';
const Lang = () => {
 const [, setLang] = useContext(LangContext);
  const { t } = useTranslation();
  const handleChangeLang = () => {
    const nowLang = i18next.language === "en" ? "ar" : "en"
    changeLanguage(nowLang)
    setLang(nowLang)
  }
  return (
    <MainButton onClick={handleChangeLang}>{t("change language")}</MainButton>

  )
}

export default Lang