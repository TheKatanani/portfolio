import styled from "styled-components";

export const StyledMenu = styled.ul `
  li{
    border-bottom: 1px solid ${(props)=>props.theme.palette.ColorApp.third};
    padding:20px 30px;
    position: relative;
    text-align: center;
    a{
      font-size:${(props) => props.theme.fontSizes.h1}rem;
      color:${(props) =>  props.theme.palette.ColorApp.dark};
      font-weight: bold;
      transition: 0.3s;
      &.active{
        color:${(props) =>  props.theme.palette.ColorApp.third};
        ::before{
          content: "";
          position: absolute;
          width: 9px;
          height: 9px;
          bottom: -9px;
          border-radius: 50%;
          border: 4px solid #fff;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgb(10, 77, 104);
        }
      }
    }
  }
`