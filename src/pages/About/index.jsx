import React, { useContext } from 'react'
import { StyledAbout } from './styled';
import Card from './Card';
import { Container } from '../../style/components';
// import { useTranslation } from 'react-i18next'
import { LangContext } from '../../Context';
import Buttons from './Buttons';
import useFetch from '../../hook/useFetch'
import { mainApi } from '../../assets/API';
import Loading from '../../components/common/Loading'
const About = () => {
  const {data ,loading , error}=useFetch(`${mainApi}abouts`);
  // const {t} =useTranslation();
  const [lang]= useContext(LangContext);
  if (loading){
    return <Loading/>
  }
  if(error){
    return error.message
  }
  return (
    <StyledAbout {...{lang}}>
      <Container className='container'>
        <Card/>   
        <div className="content">
          <h1>{data.data[0].attributes.title}</h1>
          <p>{data.data[0].attributes.subTitle}</p>
          <Buttons/>
          <p className="discription">{data.data[0].attributes.description}</p>
        </div>
      </Container>
    </StyledAbout>
  )
}

export default About