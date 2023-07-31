import React from 'react'
import Avater from '../../components/common/Avater'
import { StyledCard } from './styled'
import { useTranslation } from 'react-i18next'
import Social from '../../components/ui/Social'
import Buttons from './Buttons'

const Card = () => {
  const {t} =useTranslation();
  return (
    <StyledCard>
      <main>
        <Avater/>
        <div className="name">{t("name")}</div>
        <div className="jobTitle">{t("jobTitle")}</div>
        <Buttons/>
      </main>
      <footer>
        <Social/>
      </footer>
    </StyledCard>
  )
}

export default Card