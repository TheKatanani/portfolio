import styled from "styled-components";

export const SkillsStyled = styled.div`
&.skills{
      color:${(props) =>  props.theme.palette.font};
      margin: 10px 0px;
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      span{
        font-size:${(props) => props.theme.fontSizes.body2}rem;
        color:${(props) =>  props.theme.palette.font};
        background-color: ${(props) => props.theme.palette.ColorApp.gray_300}ae;
        /* margin: 5px 3px; */
        padding: 1px 3px; 
      }
      :hover{
        cursor: pointer;
      }
    }
/* &.skills{
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    } */
`