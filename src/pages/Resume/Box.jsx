import React from 'react'
import { StyledExperience } from './styled'

const Box = ({ title, discription }) => {
  return (
    <StyledExperience>
      <h2>{title}</h2>
      <ul>
        {
          discription.map((el) => {
            return <li key={el.id}>{el.li}</li>
          })
        }
      </ul>
    </StyledExperience>
  )
}

export default Box