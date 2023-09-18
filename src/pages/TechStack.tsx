import { ScrollToTop, SubTitle } from '@/components';
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
                            <ExplanationItem>
                                - HTML은 웹 페이지의 기반이 되는 언어로, 구조와 의미를 중요하게
                                생각합니다.
                            </ExplanationItem>

                            <ExplanationItem>
                                - 웹 접근성을 고려하여 적절한 시맨틱 태그를 사용하려 노력하며 태그의
                                의미를 명확히 표현하려고 노력합니다.
                            </ExplanationItem>

                            <ExplanationItem>
                                - 들여쓰기와 주석을 사용하여 코드 가독성을 높이며, 중첩을 최소화하고
                                모듈화된 구조를 선호합니다.
                            </ExplanationItem>
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
                            <ExplanationItem>
                                - 모바일 우선 접근 방식을 채택하고, 미디어 쿼리를 사용하여 반응형
                                디자인을 설계하고자 합니다.
                            </ExplanationItem>

                            <ExplanationItem>
                                - 브라우저 렌더링에 있어 reflow, repaint 개념을 이해하며, 성능을
                                고려한 CSS 스타일 작업을 하고자 합니다.
                            </ExplanationItem>

                            <ExplanationItem>
                                - 크로스 브라우징 이슈를 고려한 일관적인 UI를 구현하려고 노력합니다.
                            </ExplanationItem>
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
                            <ExplanationItem>
                                - JavaScript는 동적인 기능을 추가하는 핵심 언어로, 이를 활용하여
                                다양한 문제를 해결하는 능력과 창의성을 키우기 위해 노력합니다. 뿐만
                                아니라 TypeScript를 통해 코드의 타입 안정성을 강화하고 개선하려고
                                노력합니다.
                            </ExplanationItem>

                            <ExplanationItem>
                                - 함수형 프로그래밍 개념을 활용하여 코드를 작성하며, 모듈화된 코드
                                구조를 구축합니다.
                            </ExplanationItem>
                            <ExplanationItem>
                                - 코드 스타일 가이드를 준수하고 코드 리뷰를 통해 코드 품질을
                                유지하며, 예외 처리와 에러 핸들링에 주의를 기울이려 합니다.
                            </ExplanationItem>
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
                            <ExplanationItem>
                                - React는 사용자 인터페이스 개발에 사용되며, 컴포넌트 기반 접근
                                방식을 사랑합니다. 즉, 사용자의 경험을 중요시하며 최신 React
                                트렌드를 따라가려고 노력합니다.
                            </ExplanationItem>

                            <ExplanationItem>
                                - 상태 관리를 위해 ContextApi, Redux, Recoil 과 같은 다양한 기법
                                혹은 라이브러리를 사용해보며, 어떠한 방식이 해당 웹 사이트에서 더
                                효율적인지를 항상 고민해보려고 합니다.
                            </ExplanationItem>

                            <ExplanationItem>
                                - 컴포넌트를 더욱 효과적으로 사용하기 위해 유지보수가 쉽고
                                재사용성이 높은 컴포넌트 작성을 위해 노력합니다.
                            </ExplanationItem>
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

            <ScrollToTop
                opacity={0.8}
                size={'3rem'}
                bottom={'1rem'}
                right={'1rem'}
                color={'#007ACC'}
            />
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
    flex: 0;
    min-width: 5rem;

    display: flex;
    flex-direction: row;

    padding: 0.5rem;
    border-right: 1px solid #666;
`;

const Explanation = styled.ul`
    flex: 1;
    padding: 0.5rem;
`;

const SkillTitle = styled.h4`
    font-size: 1rem;
    font-weight: 700;
`;

const ExplanationItem = styled.li`
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
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
