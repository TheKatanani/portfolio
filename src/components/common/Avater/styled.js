import styled from 'styled-components'
export const AvaterStyled = styled.img`
    border-radius: 50%;
    width:92px;
    height:92px;
    object-fit:contain;
    background-color: ${(props) => props.theme.palette.main};
    /* border: 1px solid ${props=>props.theme.palette.ColorApp.border}; */

`