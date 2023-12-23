import React from 'react'
import { StyledResume } from './styled'
import {  Container } from '../../style/components'
import Box from './Box'
import Loading from '../../components/common/Loading'
import CvDownloader from './CvDownloader'
import useFirebase from '../../hook/useFirebase'
import { actions } from '../../assets/actions'

const Resume = () => {
  const { data, loading, error } = useFirebase(actions.GET_ALL, { path: 'resume' })
  if (loading) {
    return <Loading/>
  } 
  // this line to put the Experience section first
  const finalData = data.sort((a,b)=>b.boxs.length - a.boxs.length)
  if (error) {
    return error.message
  }
  return (
    <StyledResume>
      <Container className='container'>
        {finalData?.map(el => (
          <section>
            <h2>{el?.title}</h2>
            {el?.boxs.map(e => (
              <Box key={e?.id} title={e?.title} discription={e?.lists} />
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
