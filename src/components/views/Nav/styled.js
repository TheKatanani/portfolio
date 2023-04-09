import styled from "styled-components";

export const StyledNav = styled.div`
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
    .logo-box{
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
`