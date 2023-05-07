import styled from "styled-components";

export const StyledLinks = styled.div`
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
`