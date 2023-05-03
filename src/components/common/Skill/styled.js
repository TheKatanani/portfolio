import styled from "styled-components"

export const SkillStyled = styled.span`
  font-size: ${(props) => props.theme.fontSizes.body2}rem;
  color:${(props)=>props.theme.palette.ColorApp.white};
  background-color: ${(props)=>props.theme.palette.ColorApp.third_bold};
  border-radius: 16px;
  padding: 4px 12px;
  cursor: pointer;
  transition:0.3s;
  :hover{
    background-color: ${(props)=>props.theme.palette.ColorApp.third};
  }
    
`