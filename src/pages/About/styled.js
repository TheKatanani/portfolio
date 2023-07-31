import styled from "styled-components";

export const StyledAbout = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120vh;
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
    ${({theme})=>theme.media.xs}{
      bottom: 0;
      right:0;
      left:0;
      height: 75%;
      width:initial;
      top:initial;
    }
    
  }
  /* before siting    */

  .container{
    position: relative;
    display: flex;
    justify-content: center;
    color:${(props) => props.theme.palette.font};
    gap: 40px;
    flex-wrap:wrap;
    .content{
      max-width: 400px;
      ${({theme})=>theme.media.xs}{
        padding:15px;
      }
    }
    h1{
      font-size: ${(props) => props.theme.fontSizes.h1*3.5}rem;
      text-transform:capitalize;
    }
    .buttons{
      display: flex;
      gap:15px;
      margin: 30px 0 60px;
      button{
        text-transform:uppercase;
        width: 135px;
      }
      ${({theme})=>theme.media.xs}{
        display:none;
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
  width: min(90%,375px);
  
  .buttons{
    display: none !important;
  }
  ${({theme})=>theme.media.s}{
    margin-top: 190px;
  }
  ${({theme})=>theme.media.xs}{
    margin-top: 0px;

    /* padding: 2rem 1rem; */
    .buttons{
      display: flex !important;
      margin: 30px 0 !important;
    }
    }
    @media screen and (max-width:360px){
    margin-top: 50px;
  }
  /* color:${(props) => props.theme.palette.font}; */
  main{
    background-color:${(props) => props.theme.palette.ColorApp.primary};
    padding: 52px 72px;
    text-align: center;
    ${({theme})=>theme.media.xs}{
    padding: 3rem 2.2rem;
    }
  }
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
      ${({theme})=>theme.media.xs}{
        display: none;
    }
    
  }
  footer{
    background-color: ${(props) => props.theme.palette.main};
    padding: 20px 0;
  }
`