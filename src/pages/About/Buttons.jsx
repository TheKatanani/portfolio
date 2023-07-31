import React from 'react'
import { BlueButton, WhiteButton } from '../../style/components'
import { useTranslation } from 'react-i18next'

const Buttons = () => {
  const {t} =useTranslation();

  return (
    <div className="buttons">
            <BlueButton>{t("resume")}</BlueButton>
            <WhiteButton>{t("projects")}</WhiteButton>
          </div>
  )
}

export default Buttons