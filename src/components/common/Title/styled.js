import styled from "styled-components";

export const StyledTitle = styled.h1`
    margin: 30px 0;
    font-size:${(props) => props.theme.fontSizes.h1*2}rem;
    color:${(props) =>  props.theme.palette.ColorApp.dark};
    text-transform: capitalize;
    position: relative;
    text-align: center;
    ::before{
      content: "";
      position: absolute;
      width: 22%;
      height: 7px;
      bottom: -12px;
      border-radius: 4px;
      left: 50%;
      transform: translateX(-50%);
      background-color:${(props) => props.theme.palette.ColorApp.third};
    }
    ::after{
      content: "";
      position: absolute;
      width: 22px;
      height: 22px;
      bottom: -22.5px;
      border-radius: 50%;
      border: 4px solid ${(props) => props.theme.palette.ColorApp.secondary};
      left: 50%;
      transform: translateX(-50%);
      background-color:${(props) => props.theme.palette.ColorApp.third};
    }
`