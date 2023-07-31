import styled from "styled-components";

export const MainStayled = styled.div`
  width:137px;
  padding:5px 20px 5px 20px;
  background-color: ${(props) => props.theme.palette.ColorApp.third};
  position:fixed;
  z-index:99999;
  border-radius: 6px;
  top:30px;
  text-align:center;
  left:-120px;
  transition: all 0.5s;
  :hover{
    left: -3px;
  }
@media (max-width: 576px) {
  display: none;
 }
`;
