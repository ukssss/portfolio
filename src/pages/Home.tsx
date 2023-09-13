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

    return (
        <Container>
            <AboutMe>
                <AboutMeText>
                    Hi &nbsp;
                    {isDesktop && (
                        <img
                            src="https://camo.githubusercontent.com/e8e7b06ecf583bc040eb60e44eb5b8e0ecc5421320a92929ce21522dbc34c891/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966"
                            width="60"
                            data-canonical-src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                        />
                    )}
                    {isTablet && (
                        <img
                            src="https://camo.githubusercontent.com/e8e7b06ecf583bc040eb60e44eb5b8e0ecc5421320a92929ce21522dbc34c891/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966"
                            width="30"
                            data-canonical-src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                        />
                    )}
                    {isMobile && (
                        <img
                            src="https://camo.githubusercontent.com/e8e7b06ecf583bc040eb60e44eb5b8e0ecc5421320a92929ce21522dbc34c891/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966"
                            width="25"
                            data-canonical-src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                        />
                    )}
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
            {!isMobile && (
                <AboutMe>
                    <AboutMeImage src="/ukss/profile.png" />
                </AboutMe>
            )}
        </Container>
    );
};

const Container = styled.div`
    margin-top: 80px;
    padding: 0 5rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const AboutMe = styled.div``;
const AboutMeText = styled.p`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    font-size: 2rem;

    @media (min-width: 768px) and (max-width: 1200px) {
        font-weight: 500;
    }

    @media (min-width: 1201px) {
        font-weight: 700;
    }

    & > img {
        position: absolute;
        top: 0;
        left: 2.5rem;
    }
`;

const AboutMeTextColor = styled.span<{ color: string }>`
    color: ${(props) => props.color};
`;

const AboutMeImage = styled.img`
    border-radius: 50%;

    @media (min-width: 768px) and (max-width: 1200px) {
        width: 150px;
    }

    @media (min-width: 1201px) {
        width: 300px;
    }
`;

export default Home;
