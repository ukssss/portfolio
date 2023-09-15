import styled from 'styled-components';

const Footer = () => {
    return (
        <Container>
            <StyledFooter>©UKSS</StyledFooter>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    bottom: 0;
    padding: 1rem;
`;

const StyledFooter = styled.footer`
    font-size: 9px;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
`;

export default Footer;
