import styled from "styled-components";

export const StyledFooter = styled.div`
  color:${(props) => props.theme.palette.font};
  background-color: ${(props) => props.theme.palette.main};
  padding: 1rem 0;
  border-top: 1px solid ${(props) => props.theme.palette.ColorApp.gray_100};
  .container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    ${({theme})=>theme.media.m}{
      justify-content: center;
      }
    ul{
      flex-wrap: wrap;
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
    ${({theme})=>theme.media.xs}{
      justify-content: center;
      .infoUl{
        order: -1;
        >li{
          margin: 20px 0;
        }
        justify-content: center;
        display: block;
      }
    }
  }
`