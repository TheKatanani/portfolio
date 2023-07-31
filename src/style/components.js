import styled from 'styled-components';

export const Container = styled.div `
    padding: 10px;
    margin: 0 auto;
/* Small */
@media (min-width: 768px) {
    width: 750px;
}
/* Medium */
@media (min-width: 992px) {
    width: 970px;
}
/* Large */
@media (min-width: 1200px) {
    width: 1170px;
}
`;
export const MainButton = styled.button `
    width: 100%;
    height: 40px;
    border-radius: 6px;
    font-weight: 500;
    font-size: ${(props) => props.theme.fontSizes.body};
    line-height: 19px;
    text-align: center;
    cursor: pointer;
    border: none;
    `
export const BlueButton = styled(MainButton)`
    border-radius:100px;
    background-color: ${(props) => props.theme.palette.ColorApp.third};
    color:${(props) => props.theme.palette.main};
    border:1px solid ${(props) => props.theme.palette.ColorApp.third_bold};
    font-weight: bold;
    transition: 0.3s;
    text-transform: uppercase;
    :hover{
        background-color:${(props) => props.theme.palette.main} ;
        background-color:transparent ;
        color:${(props) => props.theme.palette.ColorApp.dark};
    }
`
export const WhiteButton = styled(MainButton)`
    border-radius:100px;
    background-color: ${(props) => props.theme.palette.main};
    color:${(props) => props.theme.palette.font};
    border:1px solid ${(props) => props.theme.palette.font};
    :hover{
        background-color: ${(props) => props.theme.palette.ColorApp.third};
    color:${(props) => props.theme.palette.main};
    border-color: ${(props) => props.theme.palette.ColorApp.third_bold};
    }
`