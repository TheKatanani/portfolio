import React from 'react'
import Avater from '../../components/common/Avater'
import { StyledCard } from './styled'
// import { useTranslation } from 'react-i18next'
// import Social from '../../components/ui/Social'
import Buttons from './Buttons'
import useFetch from '../../hook/useFetch'
import { mainApi } from '../../assets/API'
import Social from '../../components/ui/Social'

const Card = () => {
  const { data, loading, error } = useFetch(`${mainApi}infos/1?populate=*`);

  // console.log(data.data.attributes.avatar.data.attributes.url)
  // const { t } = useTranslation();
  if (loading) {
    return <loading />
  }else {
    
  }
  if (error) {
    return error.message
  }
  

  return (
    <StyledCard>
      <main>
        {/* remove the api from the url to get deferent end point */}
        <Avater img={`${mainApi.split("/api/")[0]}${data.data.attributes.avatar.data.attributes.url}`} />
        <div className="name">{data.data.attributes.name}</div>
        <div className="jobTitle">{data.data.attributes.jobTitle}</div>
        <Buttons />
      </main>
      <footer>
        <Social />
      </footer>
    </StyledCard>
  )
}

export default Card