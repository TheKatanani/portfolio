import styled from 'styled-components'
export const AvaterStyled = styled.img`
    border-radius: 50%;
    width: 205px;
    height: 205px;
    ${({theme})=>theme.media.xs}{
        width: 120px;
        height: 120px;
    }
    object-fit:contain;
    background-color: ${(props) => props.theme.palette.main};
    /* border: 1px solid ${props=>props.theme.palette.ColorApp.border}; */

`