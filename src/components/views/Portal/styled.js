import styled from "styled-components";

export const PortalStyled = styled.div`
  /* display: ${({ state }) => (state ? "block" : "none")}; */
  .layout {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.2;
    z-index: 9999;
  }
  
  .children {
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: ${({ theme }) => theme.palette.main};
    padding: 20px 10px;
    z-index: 10000;
    transition: right 3s ease-in-out, opacity 8s ease-in-out;
    border-radius: 16px;
    box-shadow: rgba(138, 131, 124, 0.23) -11.31px 11.31px 17px 0px;

  }
`;
