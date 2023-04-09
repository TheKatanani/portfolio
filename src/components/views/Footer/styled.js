import styled from "styled-components";

export const StyledFooter = styled.div`
  color:${(props) => props.theme.palette.font};
  background-color: ${(props) => props.theme.palette.main};
  padding: 30px 0;
  .container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      li{
        margin-left: 15px;
        text-align: center;
        svg{
          width: 16px;
          margin: 0 -10px;
          fill:${(props) => props.theme.palette.font};
        }
      }
    }
  }
`