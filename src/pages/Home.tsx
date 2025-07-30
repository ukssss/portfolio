import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components'; 

const Home = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1023px)',
    });

    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)',
    });

    const isLargeDesktop = useMediaQuery({
        query: '(min-width: 1201px)',
    });

    return (
        <OuterCenter>
            <Container>
                <AboutMe>
                    <AboutMeText>
                        Hi &nbsp;
                    </AboutMeText>
                    <AboutMeText>
                        <AboutMeTextColor color="#007ACC">&lt;Code /&gt;</AboutMeTextColor>
                        &nbsp;라는 붓을 가지고
                    </AboutMeText>
                    <AboutMeText>예술가가 되기를 꿈꾸는</AboutMeText>
                    <AboutMeText>
                        개발자&nbsp;<AboutMeTextColor color="#007ACC">홍성욱</AboutMeTextColor>
                        &nbsp;입니다
                    </AboutMeText>
                </AboutMe>
                {isLargeDesktop && (
                    <AboutMe>
                        <AboutMeImage src="/ukss/profile.png" />
                    </AboutMe>
                )}
            </Container>
        </OuterCenter>
    );
};

// 화면 전체에서 가운데 정렬을 위한 래퍼
const OuterCenter = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
`;

const Container = styled.div`
    padding: 0 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    @media (max-width: 1200px) {
        flex-direction: column;
        gap: 3rem;
    }
`;

const AboutMe = styled.div`
    @media (max-width: 1200px) {
        margin: 0 auto;
        text-align: center;
    }
`;

const AboutMeText = styled.p`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    @media (max-width: 450px) {
        font-size: 1rem;
    }

    @media (min-width: 451px) and (max-width: 600px) {
        font-size: 1.5rem;
    }

    @media (min-width: 601px) {
        font-size: 2rem;
    }

    font-weight: 700;

    & > img {
        position: absolute;
        top: 2;
        left: 2.5rem;
    }
`;

const AboutMeTextColor = styled.span<{ color: string }>`
    color: ${(props) => props.color};
`;

const AboutMeImage = styled.img`
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    object-fit: cover;

    @media (min-width: 768px) and (max-width: 1200px) {
        width: 200px;
        height: 250px;
    }

    @media (min-width: 1201px) {
        width: 280px;
        height: 350px;
    }
`;

export default Home;
