import { SubTitle } from '@/components';
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';

const TechStack = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
    };

    return (
        <Container>
            <Section>
                <SubTitle>Main Skill</SubTitle>
                <List>
                    <Item>
                        {!isMobile && (
                            <LogoDiv>
                                <Logo src="/techstack/html.svg" alt="html-logo" />
                            </LogoDiv>
                        )}

                        <Explanation>
                            <SkillTitle>HTML</SkillTitle>
                            <Paragraph>- 시맨틱 마크업 구조를 추구</Paragraph>
                            <Paragraph>- 시맨틱 마크업 구조를 추구</Paragraph>
                            <Paragraph>- 시맨틱 마크업 구조를 추구</Paragraph>
                            <Paragraph>- 시맨틱 마크업 구조를 추구</Paragraph>
                        </Explanation>
                    </Item>
                    <Item>
                        {!isMobile && (
                            <LogoDiv>
                                <Logo src="/techstack/css.svg" alt="css-logo" />
                            </LogoDiv>
                        )}

                        <Explanation>
                            <SkillTitle>CSS</SkillTitle>
                            <Paragraph>- 시맨틱 마크업 구조를 추구</Paragraph>
                            <Paragraph>- 시맨틱 마크업 구조를 추구</Paragraph>
                            <Paragraph>- 시맨틱 마크업 구조를 추구</Paragraph>
                            <Paragraph>- 시맨틱 마크업 구조를 추구</Paragraph>
                        </Explanation>
                    </Item>
                    <Item>
                        {!isMobile && (
                            <LogoDiv>
                                <Logo src="/techstack/javascript.svg" alt="javascript-logo" />
                                <Logo src="/techstack/typescript.svg" alt="typescript-logo" />
                            </LogoDiv>
                        )}

                        <Explanation>
                            <SkillTitle>JS, TS</SkillTitle>
                            <Paragraph>- 시맨틱 마크업 구조를 추구</Paragraph>
                            <Paragraph>- 시맨틱 마크업 구조를 추구</Paragraph>
                            <Paragraph>- 시맨틱 마크업 구조를 추구</Paragraph>
                            <Paragraph>- 시맨틱 마크업 구조를 추구</Paragraph>
                        </Explanation>
                    </Item>
                    <Item>
                        {!isMobile && (
                            <LogoDiv>
                                <Logo src="/techstack/react.svg" alt="react-logo" />
                            </LogoDiv>
                        )}

                        <Explanation>
                            <SkillTitle>REACT</SkillTitle>
                            <Paragraph>- 시맨틱 마크업 구조를 추구</Paragraph>
                            <Paragraph>- 시맨틱 마크업 구조를 추구</Paragraph>
                            <Paragraph>- 시맨틱 마크업 구조를 추구</Paragraph>
                            <Paragraph>- 시맨틱 마크업 구조를 추구</Paragraph>
                        </Explanation>
                    </Item>
                </List>
            </Section>
            <Section>
                <SubTitle>My Tech Stack</SubTitle>
                <SliderList>
                    <Slider {...settings}>
                        <SliderItem>
                            <Logo src="/techstack/html.svg" alt="html-logo" />
                        </SliderItem>
                        <SliderItem>
                            <Logo src="/techstack/css.svg" alt="css-logo" />
                        </SliderItem>
                        <SliderItem>
                            <Logo src="/techstack/javascript.svg" alt="javascript-logo" />
                        </SliderItem>
                        <SliderItem>
                            <Logo src="/techstack/typescript.svg" alt="typescript-logo" />
                        </SliderItem>
                        <SliderItem>
                            <Logo src="/techstack/react.svg" alt="react-logo" />
                        </SliderItem>
                        <SliderItem>
                            <Logo src="/techstack/sass.svg" alt="sass-logo" />
                        </SliderItem>
                        <SliderItem>
                            <Logo
                                src="/techstack/styled-components.svg"
                                alt="styled-components-logo"
                            />
                        </SliderItem>
                        <SliderItem>
                            <Logo src="/techstack/nodejs.svg" alt="nodejs-logo" />
                        </SliderItem>
                    </Slider>
                </SliderList>
            </Section>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
`;

const Section = styled.section``;

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1rem;
`;

const Item = styled.li`
    display: flex;
    gap: 10px;

    img {
        width: 48px;
        height: 48px;
    }
`;

const LogoDiv = styled.div`
    display: flex;
    flex-direction: row;

    padding: 0.5rem;
    border-right: 1px solid #666;
`;

const Explanation = styled.div`
    flex: 1;
    padding: 0.5rem;
`;

const SkillTitle = styled.h4`
    font-size: 1rem;
    font-weight: 700;
`;

const Paragraph = styled.p`
    font-size: 0.8rem;
`;

const SliderList = styled.ul`
    padding: 2rem;
`;

const SliderItem = styled.li`
    padding: 1rem;
`;

const Logo = styled.img`
    width: 144px;
    height: 144px;
`;

export default TechStack;
