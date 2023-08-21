import styled from "styled-components";

export const StyledPortfolio = styled.div`
background-color:${(props) => props.theme.palette.ColorApp.secondary};
  padding: 150px 0;
  min-height: 100vh;
  h1.title{
    margin: 30px 0 60px;
  }
.container{
  display: grid;
  /* grid-template-columns: repeat(4,1fr); */
  grid-template-columns: repeat(auto-fit, 280px);
  justify-content: center;
  gap: 10px;
}
`
export const StyledCard = styled.div`
padding: 15px;
border-radius: 16px;
/* width: 300px; */
background-color:${(props) => props.theme.palette.main};
border: 2px solid ${(props) => props.theme.palette.ColorApp.gray_300};
${({theme})=>theme.theme === "dark"&&`
border: 1px solid ${theme.palette.ColorApp.gray_100};
`}
header{
  /* height: 200px; */
  margin-bottom:10px;
  .imgArea{ 
    /* width: 100%; */
    background-size:cover;
    height: 170px;
    overflow: hidden;
    img{
        border-radius: 16px;
        border: 2px solid ${(props) => props.theme.palette.ColorApp.gray_300};
        ${({theme})=>theme.theme === "dark"&&`
        border: 1px solid ${theme.palette.ColorApp.gray_100};
        `}
        width: 100%;
        height: 100%;
        /* object-fit: contain; */
      }
    }
  }
  
  main{
    /* height: 150px; */
    .title{
      font-size:${(props) => props.theme.fontSizes.h4}rem;
      color:${(props) =>  props.theme.palette.ColorApp.third};
      font-weight: bold;
      margin-bottom: 10px;
    }
    p{
      font-size:${(props) => props.theme.fontSizes.body}rem;
      color:${(props) =>  props.theme.palette.font};
    }
    .skillsContainer{
      overflow-x:auto ;
      margin: 0 0 10px;
      .skills{
        flex-wrap:nowrap;
        padding:0;
        li{
          text-wrap:nowrap;
        }
        /* Scrollbar */
        ::-webkit-scrollbar {
          cursor: pointer;
          width: 0px ;
          height: 5px;
          padding:0;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #b3b3b3;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-track {
          background-color: #f1f1f1;
          border-radius: 10px;
        }
      }
    }
  }
  .linkes{
    width: 100%;
  }
  transition: 0.3s;
  box-shadow: 10px 10px 10px 0.5px #00000030;
  :hover{
    transform: translateY(-15px) scale(1.03);
  }
  svg{
    width: ${(props) => props.theme.fontSizes.h2}rem;
    fill: ${(props) => props.theme.palette.ColorApp.third};
    transform: translate(-5px,10px);
  }
`

export const StyledFilter =styled.ul`
  margin: -20px auto 10px ;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  li{
    padding: 15px 10px;
    ${({theme})=>theme.media.s}{
      padding: 10px 4px;
    }
    ${({theme})=>theme.media.xs}{
      padding: 8px 2px;
      font-size: 12px;
    }
    cursor: pointer;
    background-color: white;
    font-size:${(props) => props.theme.fontSizes.h4}rem;
      color:${(props) =>  props.theme.palette.font};
      transition: 0.3s;
      :hover , &.${({filter})=>filter?filter:"all"}{
      color:${(props) =>  props.theme.palette.ColorApp.third};
      background-color: ${(props) =>  props.theme.palette.ColorApp.primary};
      
      }
  }
`