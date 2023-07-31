import styled from "styled-components";

export const StyledPortfolio = styled.div`
background-color:${(props) => props.theme.palette.ColorApp.secondary};
  padding: 150px 0;
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
        width: 100%;
        height: 100%;
        object-fit: contain;
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
    .skills{
      margin: 10px 0;
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
`