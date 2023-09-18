import { ScrollToTop, SubTitle } from '@/components';
import styled from 'styled-components';

const About = () => {
    return (
        <Container>
            <Section>
                <SubTitle>Experience</SubTitle>
                <List>
                    <AboutMe>
                        <AboutMeDate>2017.03 ~ 2023.02</AboutMeDate>
                        <AboutMeInfo>
                            <AboutMeMain>부경대학교 대연캠퍼스</AboutMeMain>
                            <AboutMeSub>컴퓨터공학부 컴퓨터공학전공 학사 졸업</AboutMeSub>
                        </AboutMeInfo>
                    </AboutMe>

                    <AboutMe>
                        <AboutMeDate>2021.09 ~ 2021.12</AboutMeDate>
                        <AboutMeInfo>
                            <AboutMeMain>GDSC PKNU</AboutMeMain>
                            <AboutMeSub>
                                <AboutMeSubItem>
                                    GDSC PKNU에서 React Study에 참여하여 매주 React를 활용하여 웹
                                    게임을 개발하고 이를 함께 리뷰하는 시간을 가졌습니다.
                                </AboutMeSubItem>

                                <AboutMeSubItem>
                                    간단한 웹 게임을 만들어 보는 과정에서 React의 기본 구조와 동작
                                    원리를 실제로 체험할 수 있었다.
                                </AboutMeSubItem>

                                <AboutMeSubItem>
                                    프론트엔드 개발에 필요한 역량이 무엇인지 알게 되었고 이를 통해
                                    HTML, CSS, JS를 공부하게 되었고 웹 개발의 핵심 기술을 자세히
                                    이해하고 공부해야 할 명확한 방향을 잡을 수 있었다.
                                </AboutMeSubItem>
                            </AboutMeSub>
                        </AboutMeInfo>
                    </AboutMe>

                    <AboutMe>
                        <AboutMeDate>2022.09 ~ 2022.12</AboutMeDate>
                        <AboutMeInfo>
                            <AboutMeMain>노마드 웹 기초 스터디 2기</AboutMeMain>
                            <AboutMeSub>
                                <AboutMeSubItem>
                                    노마드 웹 기초 스터디에서 매일의 과제와 개인 프로젝트를 수행하며
                                    웹 개발의 기초를 체계적으로 다듬을 수 있었습니다.
                                </AboutMeSubItem>

                                <AboutMeSubItem>
                                    HTML, CSS, JS를 학습하고 이를 바탕으로 토이 프로젝트를 진행하여
                                    이 기술들을 실제로 활용하고자 노력했습니다.
                                </AboutMeSubItem>

                                <AboutMeSubItem>
                                    Node.js를 통해 백엔드 기술도 습득함으로써 프론트엔드, 백엔드
                                    모두에서 개발능력을 향상시킬 수 있는 중요한 경험이었습니다.
                                </AboutMeSubItem>
                            </AboutMeSub>
                        </AboutMeInfo>
                    </AboutMe>

                    <AboutMe>
                        <AboutMeDate>2022.11 ~ 2023.03</AboutMeDate>
                        <AboutMeInfo>
                            <AboutMeMain>멋쟁이사자처럼 프론트엔드 스쿨 4기</AboutMeMain>
                            <AboutMeSub>
                                <AboutMeSubItem>
                                    웹 접근성에 대해 학습하고, 웹 사이트 제작 시 HTML 마크업과 CSS
                                    스타일링을 웹 접근성을 고려한 방식으로 다루는 방법에 대해
                                    배웠습니다.
                                </AboutMeSubItem>

                                <AboutMeSubItem>
                                    Flex와 Grid와 같은 다양한 CSS 속성을 익히며, 이를 웹 페이지
                                    스타일링에 적용하는 기술을 학습했습니다.
                                </AboutMeSubItem>

                                <AboutMeSubItem>
                                    자바스크립트의 핵심 개념과 함수형 프로그래밍을 탐구하면서,
                                    자바스크립트를 더 깊게 이해하는 기회를 가졌습니다.
                                </AboutMeSubItem>

                                <AboutMeSubItem>
                                    React에서 DOM을 렌더링하고 브라우저 이벤트를 처리하는 과정을
                                    학습하면서, React의 동작 방식을 이해하고 이를 토대로 문제를
                                    해결하고 생각하는 방식을 키웠습니다.
                                </AboutMeSubItem>

                                <AboutMeSubItem>
                                    팀을 구성하여 협업 프로젝트를 진행하면서, 팀원들과의 협력과
                                    커뮤니케이션 능력을 향상시키고, 서로 다른 전문성과 지식을
                                    공유하며 성장할 수 있는 소중한 경험이었습니다.
                                </AboutMeSubItem>
                            </AboutMeSub>
                        </AboutMeInfo>
                    </AboutMe>

                    <AboutMe>
                        <AboutMeDate>2023.08 ~ 2023.09</AboutMeDate>
                        <AboutMeInfo>
                            <AboutMeMain>원티드 프리온보딩 인턴쉽 프론트엔드 12차</AboutMeMain>
                            <AboutMeSub>
                                <AboutMeSubItem>
                                    협업 능력과 효율적인 소통을 강화하기 위해 다양한 접근 방법을
                                    시도하고, 관련 기법들을 학습하였습니다.
                                </AboutMeSubItem>

                                <AboutMeSubItem>
                                    리액트 렌더링에 대한 학습을 통해, 렌더링 최적화 기법과 다양한
                                    Hook 기법을 익혔습니다. 이를 통해 리액트 애플리케이션의 성능을
                                    향상시키고 개발을 보다 효과적으로 관리할 수 있었습니다.
                                </AboutMeSubItem>

                                <AboutMeSubItem>
                                    "관심사의 분리"를 고려하며 소프트웨어를 개발하는 중요성을
                                    배웠고, 좋은 소프트웨어를 개발하기 위해 어떤 방식으로 접근해야
                                    하는지에 대한 고려를 할 수 있었습니다.
                                </AboutMeSubItem>

                                <AboutMeSubItem>
                                    자바스크립트의 불안정성을 극복하기 위해 타입스크립트의 작동
                                    방식을 학습하고, 프로젝트를 진행하며 함수에서 타입을 어떻게
                                    정의하고 코드 안정성을 확보하는 방법을 학습하였습니다.
                                </AboutMeSubItem>

                                <AboutMeSubItem>
                                    다양한 기업 과제를 수행하고 동료들과 의견을 공유하며 Best
                                    Practice를 도출하는 과정을 통해 개발 기술 역량을 향상시킬 수
                                    있었습니다.
                                </AboutMeSubItem>
                            </AboutMeSub>
                        </AboutMeInfo>
                    </AboutMe>
                </List>
            </Section>
            <Section>
                <SubTitle>Certificates</SubTitle>
                <List>
                    <AboutMe>
                        <AboutMeDate>2022.02</AboutMeDate>
                        <AboutMeInfo>
                            <AboutMeMain>컴퓨터활용능력 1급</AboutMeMain>
                            <AboutMeSub>대한상공회의소</AboutMeSub>
                        </AboutMeInfo>
                    </AboutMe>

                    <AboutMe>
                        <AboutMeDate>2022.06</AboutMeDate>
                        <AboutMeInfo>
                            <AboutMeMain>한국사능력검정 2급</AboutMeMain>
                            <AboutMeSub>국사편찬위원회</AboutMeSub>
                        </AboutMeInfo>
                    </AboutMe>

                    <AboutMe>
                        <AboutMeDate>2022.09</AboutMeDate>
                        <AboutMeInfo>
                            <AboutMeMain>SQL 개발자 (SQLD)</AboutMeMain>
                            <AboutMeSub>한국데이터산업진흥원</AboutMeSub>
                        </AboutMeInfo>
                    </AboutMe>

                    <AboutMe>
                        <AboutMeDate>2023.09</AboutMeDate>
                        <AboutMeInfo>
                            <AboutMeMain>정보처리기사</AboutMeMain>
                            <AboutMeSub>한국산업인력공단</AboutMeSub>
                        </AboutMeInfo>
                    </AboutMe>
                </List>
            </Section>
            <Section>
                <SubTitle>Awards</SubTitle>
                <List>
                    <AboutMe>
                        <AboutMeDate>2021.10</AboutMeDate>
                        <AboutMeInfo>
                            <AboutMeMain>2021 PNU AI · 오픈소스 SW 해커톤 장려상</AboutMeMain>
                            <AboutMeSub>
                                <AboutMeSubItem>
                                    부산광역시 공영주차장 정보 시스템을 제작
                                </AboutMeSubItem>
                                <AboutMeSubItem>
                                    유저들에게 실시간 주차 가능 여부, 주차장 네비게이션, 그리고 주차
                                    관련 편의 기능 등을 제공하는 Android 어플리케이션을
                                    개발하였습니다.
                                </AboutMeSubItem>
                            </AboutMeSub>
                        </AboutMeInfo>
                    </AboutMe>

                    <AboutMe>
                        <AboutMeDate>2022.11</AboutMeDate>
                        <AboutMeInfo>
                            <AboutMeMain>2022 PKNU CE S/W 경진대회 우수상</AboutMeMain>
                            <AboutMeSub>
                                <AboutMeSubItem>킥보드 단속 어플리케이션를 제작</AboutMeSubItem>
                                <AboutMeSubItem>
                                    "킥라니"라는 킥보드 단속 어플리케이션의 개발에 참여하였으며,
                                    주로 WAS(Web Application Server)파트를 담당하였습니다. 이를 위해
                                    Node.js를 사용하여 서버를 구축하고 관리하였습니다.
                                </AboutMeSubItem>
                            </AboutMeSub>
                        </AboutMeInfo>
                    </AboutMe>
                </List>
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

const Container = styled.div``;
const Section = styled.section``;
const List = styled.ul`
    margin-bottom: 1.58rem;
`;
const AboutMe = styled.li`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`;
const AboutMeDate = styled.div`
    padding: 0 1rem;
    border-right: 1px solid #666;

    color: #666;
    font-size: 0.8rem;
    flex: 0;

    @media (max-width: 767px) {
        min-width: 6rem;
    }

    @media (min-width: 768px) {
        min-width: 10rem;
    }
`;
const AboutMeInfo = styled.div`
    flex: 1;
`;
const AboutMeMain = styled.h4`
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
`;

const AboutMeSub = styled.ul`
    font-size: 0.8rem;
`;
const AboutMeSubItem = styled.li`
    margin-bottom: 0.3rem;
`;

export default About;
