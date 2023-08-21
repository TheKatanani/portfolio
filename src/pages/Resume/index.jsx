import React from 'react'
import { StyledResume } from './styled'
import {  Container } from '../../style/components'
import Box from './Box'
import useFetch from '../../hook/useFetch'
import { mainApi } from '../../assets/API'
import Loading from '../../components/common/Loading'
import CvDownloader from './CvDownloader'

const Resume = () => {
  const { data, loading, error } = useFetch(`${mainApi}resumes?populate=box.lists`);
  if (loading) {
    return <Loading/>
  } 
  if (error) {
    return error.message
  }
  return (
    <StyledResume>
      <Container className='container'>
        {data.data.map(el => (
          <section>
            <h2>{el.attributes.title}</h2>
            {el.attributes.box.map(e => (
              <Box key={e.id} title={e.title} discription={e.lists} />
            ))}
          </section>
        )
        )}
        <CvDownloader name='Mohammed Katanani'/>
      </Container>
    </StyledResume>
  )
}

export default Resume



/*
        <section>
          <div className='experience'>
            <h1>{t("experience")}</h1>
            <BlueButton>{t("download cv")}</BlueButton>
          </div>
          <Box title={t("Upwork Clone")} discription={[t("UpworkP1"), t("UpworkP2"), t("UpworkP3")]} />
          <Box title={t("Brand(AliExpress clone)")} discription={[t("BrandP1"), t("BrandP2"), t("BrandP3"), t("BrandP4"), t("BrandP5"), t("BrandP6")]} />
          <Box title={t("PS-Game")} discription={[t("PS-GameP1"), t("PS-GameP2"), t("PS-GameP3"), t("PS-GameP4")]} />
          <Box title={t("Vegan Restaurant Website")} discription={[t("RestaurantP1"), t("RestaurantP2")]} />
          <Box title={t("Admin")} discription={[t("AdminP1"), t("AdminP2"), t("AdminP3"), t("AdminP4")]} />
        </section>
*/