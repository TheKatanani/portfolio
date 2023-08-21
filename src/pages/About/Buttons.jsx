import React from 'react'
import { BlueButton, WhiteButton } from '../../style/components'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';

const Buttons = () => {
  const { t } = useTranslation();

  return (
    <div className="buttons">
      <BlueButton as={Link} to='/resume'>{t("resume")}</BlueButton>
      <WhiteButton as={Link} to='/projects'>{t("projects")}</WhiteButton>
    </div>
  )
}

export default Buttons