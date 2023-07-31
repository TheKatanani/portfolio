import styled from "styled-components";

export const ButtonStayled = styled.button`
${({theme})=>theme.theme === "dark"&&`
  img{
    rotate:180deg;
  }
`}
img{
  transition: 0.4s;
  width:30px;
  height:30px;
}  transition: all 0.5s;
  padding:8px 12px;
  background-color:${(props) => props.theme.palette.page};
  color:${(props) => props.theme.palette.ColorApp.white};
  cursor: pointer;
  border-radius:50%;
`
