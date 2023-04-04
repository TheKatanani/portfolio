import styled from 'styled-components';

export const Container = styled.div `
    padding: 0;
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