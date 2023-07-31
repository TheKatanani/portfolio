import React from 'react'
import { StyledAlert, StyledLayout } from './styled'

const Alert = ({ setShowAlert }) => {
  return (
    <>
      <StyledAlert className="alert">the message sent successfully
        <span onClick={() => setShowAlert(false)}>x</span>
      </StyledAlert>
      <StyledLayout className="layout"></StyledLayout>
    </>
  )
}

export default Alert