import styled from "styled-components";

export const StyledNav = styled.div `
  color:${(props) => props.theme.palette.font};
    background-color: ${(props) => props.theme.palette.main};
    position:fixed;
    top:0;
    left:0;
    right: 0;
    z-index: 9999;
  .container{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:30px 0;
    ${({theme})=>theme.media.xs}{
      padding:15px 10px;
      }
      a:active{
        color:${(props) => props.theme.palette.font};
      }
    .logo-box{
      color:${(props) => props.theme.palette.font};
      display:flex;
    justify-content:center;
    align-items:center;
    gap: 10px;
    .logo{
      width: 65px;
      img{
        border:2px solid ${(props) => props.theme.palette.font};
        max-width: 100%;
        object-fit:contain;
      }
    }
    .text{
      transform: translateY(-5px);
    }
    }
   
    ul{
      display:flex;
      ${({theme})=>theme.media.s}{
        display: none;
      }
      justify-content:center;
      align-items:center;
      gap:20px;
      a{
        text-decoration:none;
        color:${(props) => props.theme.palette.font};
      }
      a.active{
        color: ${(props) => props.theme.palette.ColorApp.third};
      }
    }
    
  }
  .menuIcon{
    display:none;
    ${({theme})=>theme.media.s}{
      display: block;
      }
        width: 25px;
        height: 3px;
        background-color: black;
        position:relative;
        border-radius: 8px;
        z-index: 100001;
      &::before{
        content: '';
        border-radius: 8px;
        position:absolute;
        top: -7px;
        left: 0;
        width: 12.5px;
        height: 3px;
        background-color: black;
        transition: 0.5s;
      }
      &::after{
        content: '';
        border-radius: 8px;
        position:absolute;
        bottom: -7px;
        right: 0;
        width: 12.5px;
        height: 3px;
        background-color: black;
        transition: 0.5s;
      }
      transition: 0.3s;
      :hover{
        cursor: pointer;
      }
      ${(props) => props.show?`
      rotate: -45deg;
        ::before {
          rotate: 90deg;
          top: -6px;
          left: 6px;
        }
        ::after{
          rotate: 90deg;
          bottom: -6px;
          right: 6px;
        }
      `:`
      
      `};
        
  }
`