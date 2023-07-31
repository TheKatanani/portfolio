import styled from "styled-components";

export const StyledProjects = styled.div `
    background-color:${(props) => props.theme.palette.ColorApp.secondary};
    padding: 200px 0;
    header{
    margin: 30px 0 ;
      p{
        font-size:${(props) => props.theme.fontSizes.p}rem;
        color:${(props) =>  props.theme.palette.ColorApp.dark};
        /* margin-bottom: 30px; */
        line-height: 1.6;
      }
    }
  .container{
  width: min(100%,850px);
  }
  header{
    text-align: center;
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
 
  /*
  useless code 
  .linkes{
    width: 200px;
    display: flex;
    align-items: center;
    text-align: center;
    a{
      transition: 0.3s;
      flex:1;
      padding: 10px 0;
      :first-child{
        background-color: ${(props) =>  props.theme.palette.ColorApp.third};
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        border:1px solid ${(props) =>  props.theme.palette.ColorApp.third};
        color: ${(props) =>  props.theme.palette.ColorApp.white};
        :hover{
          background-color: ${(props) =>  props.theme.palette.ColorApp.third_bold};
          border:1px solid ${(props) =>  props.theme.palette.ColorApp.third_bold};
        }
      }
      :last-child{
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        background-color: transparent;
        color: ${(props) =>  props.theme.palette.ColorApp.third};
        border:1px solid ${(props) =>  props.theme.palette.ColorApp.third};
        :hover{
          background-color: ${(props) =>  props.theme.palette.ColorApp.third_bold};
          border:1px solid ${(props) =>  props.theme.palette.ColorApp.third};
          color: ${(props) =>  props.theme.palette.ColorApp.white};
        }
      }
    }
  } */
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
      display: flex;
      align-items: center;
    justify-content: space-between;
    margin: 30px 0 20px;
  }

main{
  padding:0  30px 0 0 ;
  /* ul.discription{
        margin: 20px 0px 10px;
        li{
          font-size:${(props) => props.theme.fontSizes.body}rem;
        }
      } */
    }
  .title{
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
  p{
      font-size:${(props) => props.theme.fontSizes.body}rem;
    }
}
  transition:0.3s;
  position: relative;
  .linkes{
    display: none;
    transition:0.3s;
  }
  ::before{
    transition: 0.3s;
  }
  .linkes{
      display: flex;
      position: absolute;
      top:60%;
      left: 50%;
      transform: translate(-50%,-50%);
      z-index: 2;
      opacity: 0;
    }
    ::before{
      content: '';
      position: absolute;
      top:0;
      left:0;
      bottom:0;
      width: 0;
      background-color: #ffffffef;
      z-index: 1;
    }
    /* edite here on font  */
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
  }

  
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
`