import React from 'react'
import { StyledExperience } from './styled'

const Box = ({ title, discription }) => {
  return (
    <StyledExperience>
      <h2>{title}</h2>
      <ul>
        {
          discription.map((li, i) => {
            return <li key={i}>{li}</li>
          })
        }
      </ul>
    </StyledExperience>
  )
}

export default Box