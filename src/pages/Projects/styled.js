import styled from "styled-components";

export const StyledProjects = styled.div `
    background-color:${(props) => props.theme.palette.ColorApp.secondary};
    padding: 200px 0;
    header{
    margin: 30px 0 ;
      p{
        font-size:${(props) => props.theme.fontSizes.p}rem;
        color:${(props) =>  props.theme.palette.ColorApp.dark};
        line-height: 1.6;
      }
    }
  .container{
  width: min(100%,850px);
  }
  header{
    text-align: center;
  }
  .more{
    width: fit-content;
    display: block;
    margin: auto;
    button{
      width: 250px;
    }
  }
`

export const StyledBox = styled.div `
  background-color:${(props) => props.theme.palette.main};
  color:${(props) =>  props.theme.palette.font};
  box-shadow: -3px 1px 24px 5px #00000021;
  margin: 55px 0;
  line-height: 1.8;
  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  >div{

    padding: 50px 30px 25px;
  }
  .title{
    h2{
      font-size:${(props) => props.theme.fontSizes.h4}rem;
      color:${(props) =>  props.theme.palette.ColorApp.third};
      height: fit-content;
    }
    position: relative;
    ::before{
      content: "";
      background-color: ${(props) =>  props.theme.palette.ColorApp.third};
      width: 20px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: -30px;
    }
  }

  .imgArea{
    background-size: cover;
    height: 500px;
    margin-top: -50px;
    position: relative;
    overflow: hidden;
    transition: 0.4s;
    img{
      object-fit: contain;
      border:1px solid ${(props) =>  props.theme.palette.ColorApp.dark};
      width: 100%;
      height: 100%;
    }
    .hidden{
      position: absolute;
      right: 100px;
      left: -2000px;
      top:50%;
      transition: 0.4s ease-in;
      transform: translateY(-50%);
      ul.discription{
        list-style:initial;
        margin-bottom: 20px;
      }
    }
    :hover {
      transition: 0.4s ease-in;
      ::before{
        content: "";
        position: absolute;
        top: 40px;
        left: 25px;
        bottom: 22px;
        right: 25px;
        background-color: ${(props) =>  props.theme.palette.main};
        opacity: 0.9;
      }
      .hidden{
        left: 120px;
      }
    }
  }
`
export const StyledBox2 = styled.div `
  
  display: grid;
  margin: 35px 0;
  grid-template-columns: 1.4fr 1fr;
  ${({theme})=>theme.media.s}{
    display: block;
    margin: 35px 20px;
    }
  background-color:${(props) => props.theme.palette.main};
  color:${(props) =>  props.theme.palette.font};
  box-shadow: -3px 1px 24px 5px #00000021;
  line-height: 1.8;
  .contact{
    padding:10px 27px;
    ${({theme})=>theme.media.s}{
      padding:5px 12px;
    }
    header{
      position: relative;
      display: flex;
      align-items: center;
    justify-content: space-between;
    margin: 30px 0 20px;
  
  }
span.more{
  color:${(props) =>  props.theme.palette.ColorApp.third};
  /* display: inline-block; */
  text-align: start;
  margin: 0;
  font-weight: bold;
}
main{
    }
  .title{
    text-align: start;
    margin-left: 30px;
    h2{
      font-size:${(props) => props.theme.fontSizes.h4}rem;
      color:${(props) =>  props.theme.palette.ColorApp.third};
      height: fit-content;
    }
    p{
      font-size:${(props) => props.theme.fontSizes.body*0.9}rem;
      text-align: start;
    }
    position: relative;
    ::before{
      content: "";
      background-color: ${(props) =>  props.theme.palette.ColorApp.third};
      width: 20px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: -30px;
    }
    
  }
  .skillsContainer{
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    .skills{
      overflow-x: auto;
      ul{
        li{
          text-wrap:nowrap;
        }
      }
    }
    .linkes{
      display: flex;
      gap: 10px;
      width: fit-content;
      a{
        border-radius: 50%;
        color: ${(props) => props.theme.palette.ColorApp.gray_400};
        width: 23px;
        height: 23px;
        border: 0.5px solid ${(props) => props.theme.palette.ColorApp.third};
        text-align:center;
        transition: 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        svg{
          width: 18px;
          fill: ${(props) => props.theme.palette.ColorApp.third};
          transform: translateY(0px);
        }
        :hover{
          border: 0.5px solid ${(props) => props.theme.palette.ColorApp.gray_300};
          background-color: ${(props) => props.theme.palette.ColorApp.third};
          svg{
            fill: ${(props) => props.theme.palette.ColorApp.gray_300};
          }
        }
      }
      z-index: 2;
      /* opacity: 0; */
    }
  }
    p{
      font-size:${(props) => props.theme.fontSizes.body}rem;
      padding:0  30px 0 0 ;
    }
}
  /* here the link code  */
    /* ::before{
      content: '';
      position: absolute;
      top:0;
      left:0;
      bottom:0;
      width: 0;
      background-color: ${(props) => props.theme.palette.main}ee;
      z-index: 1;
    }
    ::after{
      content: 'SEE MORE';
      font-size:${(props) => props.theme.fontSizes.h1}rem;
      color:${(props) => props.theme.palette.ColorApp.third};
      text-shadow: rgba(0, 0, 0, 0.13) -4px 3px 1px;
      position: absolute;
      text-transform: uppercase;
      font-weight: bold;
      top:40%;
      left: 50%;
      transform: translate(-50%,-50%);
      z-index: 2;
      opacity: 0;
    }
  :hover{
    .linkes,::after{
      opacity: 1;
    }
    ::before{
      content: '';
      width: 100%;
    }
  } */
  
  
  .imgArea{
    background-size: cover;
    position: relative;
    overflow: hidden;
    transition: 0.4s;
    display: flex;
    
    /* margin: 0 15px 0 0; */
    img{
      /* align-self: center; */
      width: 100%;
    }
    ${({theme})=>theme.media.s}{
    /* grid-template-columns: auto; */
      height: 270px;
      padding: 12px;
      background-size: cover;
    img{
      /* object-fit: contain; */
    }
    }
    }
    svg{
    width: ${(props) => props.theme.fontSizes.h2}rem;
    fill: ${(props) => props.theme.palette.ColorApp.third};
    transform: translate(0px,10px);
  }
`