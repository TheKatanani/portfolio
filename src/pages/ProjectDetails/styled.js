import styled from "styled-components";

export const StyledDetails = styled.div`
background-color:${(props) => props.theme.palette.ColorApp.secondary};
color:${(props) =>  props.theme.palette.font};
  padding-top: 160px;
  min-height: 100vh;
  
  .container{
    .card{
      padding: 20px;
      border-radius: 16px;
      /* width: 300px; */
      background-color:${(props) => props.theme.palette.main};
      border: 2px solid ${(props) => props.theme.palette.ColorApp.gray_300};
      ${({theme})=>theme.theme === "dark"&&`
      border: 1px solid ${theme.palette.ColorApp.gray_100};
      `}
    .flex{
      display: flex;
      gap:20px;
    flex-wrap: wrap;
    .content{
      pre{
      overflow: auto;
      }
      flex:2;
      min-width: min(100%,700px);
      .discription{
        font-family: inherit;
      }
      h1{
        font-size:${(props) => props.theme.fontSizes.h1}rem;
        color:${(props) =>  props.theme.palette.ColorApp.third};
        font-weight: bold;
        margin-bottom: 10px;
      }
      h2{
        font-size:${(props) => props.theme.fontSizes.h2}rem;
        color:${(props) =>  props.theme.palette.font};
        margin-bottom: 10px;
      }
    }
    img{
      flex:1;
      width: min(100%,250px);
      object-fit: contain;
    }
  }
  .linkes{
    margin-top: 30px;
  }
}
}
  
`