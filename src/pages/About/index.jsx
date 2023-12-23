import React, { useContext } from 'react'
import { StyledAbout } from './styled';
import Card from './Card';
import { Container } from '../../style/components';
// import { useTranslation } from 'react-i18next'
import { LangContext } from '../../Context';
import Buttons from './Buttons';
import Loading from '../../components/common/Loading'
import useFirebase from '../../hook/useFirebase';
import { actions } from '../../assets/actions';
const About = () => {
  // this is for strapi api
  // const {data ,loading , error}=useFetch(`${mainApi}abouts`); 
  const { data, loading, error } = useFirebase(actions.GET_ALL, { path: 'about' })
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
          <h1>{data[0]?.title}</h1>
          <p>{data[0]?.subTitle}</p>
          <Buttons/>
          <p className="discription">{data[0]?.description}</p>
        </div>
      </Container>
    </StyledAbout>
  )
}

export default About