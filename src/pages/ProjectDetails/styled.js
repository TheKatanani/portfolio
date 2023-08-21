import styled from "styled-components";

export const StyledDetails = styled.div`
background-color:${(props) => props.theme.palette.ColorApp.secondary};
color:${(props) =>  props.theme.palette.font};
  padding-top: 160px;
  min-height: 100vh;
  
  .container{
    .card{
      padding: 30px;
      border-radius: 16px;
      /* width: 300px; */
      background-color:${(props) => props.theme.palette.main};
      border: 2px solid ${(props) => props.theme.palette.ColorApp.gray_300};
      ${({theme})=>theme.theme === "dark"&&`
      border: 1px solid ${theme.palette.ColorApp.gray_100};
      `}
      header{
        position: relative;
        padding:0px 30px;
        ::before{
          content: "";
          background-color: ${(props) =>  props.theme.palette.ColorApp.third};
          width: 20px;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0px;
        }
      }
    .flex{
      display: flex;
      gap:20px;
    flex-wrap: wrap;
    .content{
      flex:2;
      min-width: min(100%,700px);
      .discription{
        font-family: inherit;
        ul{
          margin: 20px 0;
          li{
            margin: 2px 0px 2px 10px;
          }
        }
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