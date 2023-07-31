import styled from "styled-components";

export const StyledSocial = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  svg{
    fill:${(props) => props.theme.palette.font};
      width: 25px;
  }
`