import { sideCarState } from '@/recoil';
import { MdMenu } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { SideCar } from '..';
import Hamburger from './Hamburger';

const Header = () => {
    const isTablet = useMediaQuery({
        query: '(max-width: 1023px)',
    });

    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)',
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
                            <LogoImage src="/ukss/logo.svg" alt="logo" />
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
                                <MenuImage src="/sns/github.svg" alt="logo" />
                            </StyledLink>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <StyledLink to="/">
                                <MenuImage src="/sns/twitter.svg" alt="logo" />
                            </StyledLink>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <StyledLink to="/">
                                <MenuImage src="/sns/linkedin.svg" alt="logo" />
                            </StyledLink>
                        </StyledMenuItem>
                    </StyledLinkMenu>
                </Container>
            )}

            {isTablet && (
                <TabletContainer>
                    <Overlay onClick={toggleSideCar} sideCarOpen={sideCarOpen} />

                    <Hamburger onClick={toggleSideCar}>
                        <MdMenu />
                    </Hamburger>

                    <StyledLogo>
                        <StyledLink to="/">
                            <LogoImage src="/ukss/logo.svg" alt="logo" />
                        </StyledLink>
                    </StyledLogo>

                    {sideCarOpen && <SideCar />}
                </TabletContainer>
            )}
        </>
    );
};

const Container = styled.header`
    position: fixed;
    background-color: #fff;

    top: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 100px;
    padding: 2rem;
`;

const TabletContainer = styled.header`
    position: fixed;
    background-color: #fff;

    top: 0;
    left: 0;
    right: 0;

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
    gap: 3rem;

    color: #666;
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1rem;
`;
const StyledMenuItem = styled.li``;

const StyledLinkMenu = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    gap: 0.8rem;
`;

const MenuImage = styled.img``;

const StyledLink = styled(Link)``;

export default Header;
