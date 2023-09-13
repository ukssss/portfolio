import { sideCarState } from '@/recoil';
import { MdMenu } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { SideCar } from '..';
import Hamburger from './Hamburger';

const Header = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 1000px)',
    });

    const isDesktop = useMediaQuery({
        query: '(min-width: 1001px)',
    });

    const [sideCarOpen, setSideCarOpen] = useRecoilState(sideCarState);

    const toggleSideCar = () => {
        setSideCarOpen(!sideCarOpen);
    };

    return (
        <>
            {isDesktop && (
                <Container>
                    <StyledLogo>
                        <StyledLink to="/">
                            <LogoImage src="src/assets/logo.svg" alt="logo" />
                        </StyledLink>
                    </StyledLogo>
                    <StyledBasicMenu>
                        <StyledMenuItem>
                            <StyledLink to="/">Home</StyledLink>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <StyledLink to="/about">About</StyledLink>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <StyledLink to="/tech">Tech Stack</StyledLink>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <StyledLink to="/projects">Projects</StyledLink>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <StyledLink to="/contact">Contact</StyledLink>
                        </StyledMenuItem>
                    </StyledBasicMenu>
                    <StyledLinkMenu>
                        <StyledMenuItem>
                            <StyledLink to="https://github.com/ukssss">
                                <MenuImage src="src/assets/github.svg" alt="logo" />
                            </StyledLink>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <StyledLink to="/">
                                <MenuImage src="src/assets/twitter.svg" alt="logo" />
                            </StyledLink>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <StyledLink to="/">
                                <MenuImage src="src/assets/linkedin.svg" alt="logo" />
                            </StyledLink>
                        </StyledMenuItem>
                    </StyledLinkMenu>
                </Container>
            )}

            {isMobile && (
                <MobileContainer>
                    <Overlay onClick={toggleSideCar} sideCarOpen={sideCarOpen} />

                    <Hamburger onClick={toggleSideCar}>
                        <MdMenu />
                    </Hamburger>

                    <StyledLogo>
                        <StyledLink to="/">
                            <LogoImage src="src/assets/logo.svg" alt="logo" />
                        </StyledLink>
                    </StyledLogo>

                    {sideCarOpen && <SideCar />}
                </MobileContainer>
            )}
        </>
    );
};

const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 100px;
    padding: 0 10px;
`;

const MobileContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    padding: 0 24px;
    height: 64px;

    border-bottom: 1px solid #666;

    z-index: 998;
`;

const Overlay = styled.div<{ sideCarOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: ${(props) => (props.sideCarOpen ? '1' : '0')};
    pointer-events: ${(props) => (props.sideCarOpen ? 'auto' : 'none')};
    z-index: 998;
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

const StyledBasicMenu = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 67px;

    color: #666;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
`;
const StyledMenuItem = styled.li``;

const StyledLinkMenu = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    gap: 10px;
`;

const MenuImage = styled.img``;

const StyledLink = styled(Link)``;

export default Header;
