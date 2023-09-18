import styled from 'styled-components';

const Footer = () => {
    return (
        <Container>
            <StyledFooter>©UKSS</StyledFooter>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: 100%;
    height: auto;
`;

const StyledFooter = styled.footer`
    font-size: 9px;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    padding: 1rem;
    position: absolute;
    width: 100%;
    bottom: 0;
`;

export default Footer;
