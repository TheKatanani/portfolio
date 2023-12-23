import React from 'react'
import Avater from '../../components/common/Avater'
import { StyledCard } from './styled'
import Buttons from './Buttons'
import Social from '../../components/ui/Social'
import Loading from '../../components/common/Loading'
import useFirebase from '../../hook/useFirebase'
import { actions } from '../../assets/actions'

const Card = () => {
  const { data, loading, error } = useFirebase(actions.GET_ALL, { path: 'info' })

  if (loading) {
    return <Loading />
  }
  if (error) {
    return error.message
  }


  return (
    <StyledCard>
      <main>
        <Avater img={data[0]?.avatar} />
        <div className="name">{data[0]?.name}</div>
        <div className="jobTitle">{data[0]?.jobTitle}</div>
        <Buttons />
      </main>
      <footer>
        <Social />
      </footer>
    </StyledCard>
  )
}

export default Card