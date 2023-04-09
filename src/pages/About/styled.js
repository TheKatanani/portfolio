import styled from "styled-components";

export const StyledAbout = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  height: 120vh;
  position: relative;
  background-color:${(props) => props.theme.palette.main};
  ::before{
    content:"";
    z-index: 0;
    width:45%;
    position:absolute;
    top:0;
    ${({lang})=>lang==="ar"?`right:0;`:"left:0;"}
    bottom:0;
    background-color:${(props) => props.theme.palette.ColorApp.secondary};
  }
  .container{
    position: relative;
    display: flex;
    justify-content: center;
    color:${(props) => props.theme.palette.font};
    gap: 40px;
    .content{
      width: 400px;
    }
    h1{
      font-size: 100px;
      text-transform:capitalize;
    }
    .buttons{
      display: flex;
      gap:15px;
      margin: 30px 0 80px;
      button{
        text-transform:uppercase;
        width: 135px;
      }
    }
    .discription{
      line-height: 1.8;
    }
  }
  `
/* background-image: linear-gradient(to right, red,orange,${(props) => props.theme.palette.main },red,${(props) => props.theme.palette.ColorApp.primary}); */

export const StyledCard = styled.div `
  box-shadow: rgba(138, 131, 124, 0.23) -11.31px 11.31px 17px 0px;
  z-index: 2;
  width: 375px;
  /* color:${(props) => props.theme.palette.font}; */
  main{
    background-color:${(props) => props.theme.palette.ColorApp.primary};
    padding: 52px 72px;
    text-align: center;
    .name{
      font-size:${(props) => props.theme.fontSizes.h1}rem;
      color:${(props) =>  props.theme.palette.ColorApp.dark};
      margin:20px 0 40px 0;
      font-weight:bold;
      position:relative;
      ::after{
        content: '';
        position: absolute;
        bottom: -22px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 3px;
        background-color:${(props) => props.theme.palette.ColorApp.third};
      }
    }
    .jobTitle{
      font-size:${(props) => props.theme.fontSizes.h4}rem;
      color:${(props) =>  props.theme.palette.ColorApp.dark};
      margin:15px 0 10px;
      text-transform: lowercase;
      letter-spacing: 3px;
    }
    .avater{
      width: 205px;
      height: 205px;
    }
  }
  footer{
    background-color: ${(props) => props.theme.palette.main};
    padding: 20px 0;
  }
`