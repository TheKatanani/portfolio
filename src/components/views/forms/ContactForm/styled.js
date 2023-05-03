import styled from "styled-components";

export const StyledContactForm = styled.form`
    margin: 0 auto;
    width: 670px;
    padding: 50px 80px 120px;
    background-color:${(props) => props.theme.palette.main};
    position: relative;
    z-index: 1;
    .name{
      display: flex;
      justify-content: space-between;
      width: 100%;
      div{
        width: 49%;
      }
    }
    .input{
      margin-bottom: 30px;
    }
    textarea{
      width: 100%;
      height: 100px;
      overflow-y: scroll;
      resize: none;
      /* Scrollbar */
      ::-webkit-scrollbar {
        width: 0px;
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
    button{
      margin-top: 20px;
      width: fit-content;
      padding: 8px 30px;
    }
`