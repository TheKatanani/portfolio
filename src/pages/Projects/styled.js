import styled from "styled-components";

export const StyledProjects = styled.div`
    background-color:${(props) => props.theme.palette.ColorApp.secondary};
    padding: 200px 0;
    header{
      
    margin: 30px 0 60px;
      p{
        font-size:${(props) => props.theme.fontSizes.p}rem;
        color:${(props) =>  props.theme.palette.ColorApp.dark};
        margin-bottom: 30px;
        line-height: 1.6;
      }
    }
  .container{
  width: 850px;
  }
  header{
    text-align: center;
  }
`

export const StyledBox = styled.div`
  background-color:${(props) => props.theme.palette.main};
  color:${(props) =>  props.theme.palette.font};
  margin: 20px 0;
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