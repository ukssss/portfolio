import { sideCarState } from '@/recoil';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Hamburger } from '..';

const SideCar = () => {
    const [sideCarOpen, setSideCarOpen] = useRecoilState(sideCarState);

    const toggleSideCar = () => {
        setSideCarOpen(!sideCarOpen);
    };

    return (
        <Container sideCarOpen={sideCarOpen}>
            <Exit>
                <Hamburger onClick={toggleSideCar}>
                    <MdClose />
                </Hamburger>

                <StyledLogo>
                    <StyledLink to="/" onClick={toggleSideCar}>
                        <LogoImage src="src/assets/ukss/logo.svg" alt="logo" />
                    </StyledLink>
                </StyledLogo>
            </Exit>

            <Navigate>
                <List>
                    <Item>
                        <StyledLink to="/" onClick={toggleSideCar}>
                            Home
                        </StyledLink>
                    </Item>
                    <Item>
                        <StyledLink to="/about" onClick={toggleSideCar}>
                            About
                        </StyledLink>
                    </Item>
                    <Item>
                        <StyledLink to="/tech" onClick={toggleSideCar}>
                            Tech Stack
                        </StyledLink>
                    </Item>
                    <Item>
                        <StyledLink to="/projects" onClick={toggleSideCar}>
                            Projects
                        </StyledLink>
                    </Item>
                    <Item>
                        <StyledLink to="/contact" onClick={toggleSideCar}>
                            Contact
                        </StyledLink>
                    </Item>
                </List>
                <List>
                    <Item>
                        <StyledLink to="https://github.com/ukssss" onClick={toggleSideCar}>
                            Github
                        </StyledLink>
                    </Item>
                    <Item>
                        <StyledLink to="/" onClick={toggleSideCar}>
                            Twitter
                        </StyledLink>
                    </Item>
                    <Item>
                        <StyledLink to="/" onClick={toggleSideCar}>
                            LinkedIn
                        </StyledLink>
                    </Item>
                </List>
            </Navigate>
        </Container>
    );
};

const Container = styled.div<{ sideCarOpen: boolean }>`
    background-color: #fff;
    position: fixed;
    top: 0;
    left: ${(props) => (props.sideCarOpen ? '0' : '-240px')};
    width: 240px;
    height: 100vh;

    border-right: 1px solid #666;

    z-index: 999;
`;

const Exit = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    padding: 0 24px;
    height: 64px;

    border-bottom: 1px solid #666;
`;

const StyledLogo = styled.div`
    padding-bottom: 5px;
    height: 100%;

    display: flex;
    align-items: center;
`;

const LogoImage = styled.img`
    width: 125px;
    height: 30px;
`;

const Navigate = styled.nav`
    padding: 2rem;
`;
const List = styled.ul`
    margin-bottom: 50px;
`;
const Item = styled.li`
    font-size: 18px;
    font-weight: normal;

    margin-bottom: 10px;
`;
const StyledLink = styled(Link)``;

export default SideCar;
