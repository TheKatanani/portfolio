import styled from "styled-components";

export const Label = styled.label `
    display: block;
    font-weight: 500;
    color: ${(props)=>props.theme.palette.font};
    margin-top: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSizes.body}rem;
    letter-spacing: -0.2px;
`
export const Input = styled.input `
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid ${(props)=>props.theme.palette.font};
    font-weight: 400;
    line-height: 17px;
    color: ${(props)=>props.theme.palette.ColorApp.third};
    background-color:transparent;
    padding: 10px; 
    margin: 3px 0 10px;
    outline: none;
`