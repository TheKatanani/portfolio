import styled from "styled-components";

export const StyledContact = styled.div`
  background-color:${(props) => props.theme.palette.ColorApp.secondary};
  padding: 200px 0;
  background-size: cover;
  position: relative;
  z-index: 0;
  h1{
    text-align: center;
    margin: 30px 0 60px ;
  }
  /* ::before{
    content: "";
    background-color:${(props) => props.theme.palette.font};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0.9;
  } */
`