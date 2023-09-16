import { SubTitle } from '@/components';
import { AiFillGithub } from 'react-icons/ai';
import { BiLink } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Projects = () => {
    return (
        <Container>
            <SubTitle>Projects</SubTitle>
            <Section>
                <Project>
                    <StyledLink to="https://portfolio-ukssss.vercel.app/">
                        <Image src="/projects/portfolio.png" alt="project-image" />
                    </StyledLink>
                    <Content>
                        <ProjectTitle>Portfolio</ProjectTitle>
                        <ProjectInfo>
                            해당 레포지토리는 포트폴리오 작성을 위해 만들어진 저장소입니다.
                        </ProjectInfo>
                        <TechStack>
                            <TechStackTitle>Tech stack : </TechStackTitle>
                            <TechStackInfo>
                                Vite, Typescript, React, React-router-dom, Styled-components
                            </TechStackInfo>
                        </TechStack>
                        <LinkedList>
                            <StyledLink to="https://portfolio-ukssss.vercel.app/">
                                <BiLink />
                                <LinkInfo>Live Preview</LinkInfo>
                            </StyledLink>
                            <StyledLink to="https://github.com/ukssss/portfolio">
                                <AiFillGithub />
                                <LinkInfo>View Code</LinkInfo>
                            </StyledLink>
                        </LinkedList>
                    </Content>
                </Project>
                <Project>
                    <StyledLink to="https://time-series-chart-six.vercel.app/">
                        <Image src="/projects/time-series-chart.png" alt="project-image" />
                    </StyledLink>
                    <Content>
                        <ProjectTitle>Time-Series-Chart</ProjectTitle>
                        <ProjectInfo>
                            원티드 프리온보딩 인턴쉽 프론트엔드 4주차 과제로 주어진 데이터를
                            기반으로 시계열 차트를 만드는 프로젝트이다.
                        </ProjectInfo>
                        <TechStack>
                            <TechStackTitle>Tech stack : </TechStackTitle>
                            <TechStackInfo>
                                Vite, Typescript, React, React-router-dom, Recharts, Axios,
                                Styled-components
                            </TechStackInfo>
                        </TechStack>
                        <LinkedList>
                            <StyledLink to="https://time-series-chart-six.vercel.app/">
                                <BiLink />
                                <LinkInfo>Live Preview</LinkInfo>
                            </StyledLink>
                            <StyledLink to="https://github.com/ukssss/time-series-chart">
                                <AiFillGithub />
                                <LinkInfo>View Code</LinkInfo>
                            </StyledLink>
                        </LinkedList>
                    </Content>
                </Project>
                <Project>
                    <StyledLink to="https://clinical-trial-search-seven.vercel.app/">
                        <Image src="/projects/clinical-trial-search.png" alt="project-image" />
                    </StyledLink>
                    <Content>
                        <ProjectTitle>Clinical-Trial-Search</ProjectTitle>
                        <ProjectInfo>
                            원티드 프리온보딩 인턴쉽 프론트엔드 3주차 과제로 한국임상정보 사이트에서
                            검색영역을 클론하여 검색창 구현 + 검색어 추천 기능 구현 + 캐싱 기능
                            구현을 목표로 한 프로젝트이다.
                        </ProjectInfo>
                        <TechStack>
                            <TechStackTitle>Tech stack : </TechStackTitle>
                            <TechStackInfo>
                                Vite, Typescript, React, React-router-dom, Axios, Styled-Components
                            </TechStackInfo>
                        </TechStack>
                        <LinkedList>
                            <StyledLink to="https://clinical-trial-search-seven.vercel.app/">
                                <BiLink />
                                <LinkInfo>Live Preview</LinkInfo>
                            </StyledLink>
                            <StyledLink to="https://github.com/ukssss/clinical-trial-search">
                                <AiFillGithub />
                                <LinkInfo>View Code</LinkInfo>
                            </StyledLink>
                        </LinkedList>
                    </Content>
                </Project>
                <Project>
                    <StyledLink to="https://pre-onboarding-12th-2-ukss.vercel.app/">
                        <Image src="/projects/github-issues-reader.png" alt="project-image" />
                    </StyledLink>
                    <Content>
                        <ProjectTitle>Github-Issues-Reader</ProjectTitle>
                        <ProjectInfo>
                            원티드 프리온보딩 인턴쉽 프론트엔드 2주차 과제로 특정 깃헙
                            레파지토리(Issues React)의 이슈 목록과 상세 내용을 확인하는 웹 사이트
                            구축를 목표로 한 프로젝트
                        </ProjectInfo>
                        <TechStack>
                            <TechStackTitle>Tech stack : </TechStackTitle>
                            <TechStackInfo>
                                Typescript, React, React-router-dom, Octokit, Styled-components
                            </TechStackInfo>
                        </TechStack>
                        <LinkedList>
                            <StyledLink to="https://pre-onboarding-12th-2-ukss.vercel.app/">
                                <BiLink />
                                <LinkInfo>Live Preview</LinkInfo>
                            </StyledLink>
                            <StyledLink to="https://github.com/ukssss/github-issues-reader">
                                <AiFillGithub />
                                <LinkInfo>View Code</LinkInfo>
                            </StyledLink>
                        </LinkedList>
                    </Content>
                </Project>
                <Project>
                    <StyledLink to="https://wanted-pre-onboarding-frontend-ukssss.vercel.app">
                        <Image src="/projects/todolist.png" alt="project-image" />
                    </StyledLink>
                    <Content>
                        <ProjectTitle>TodoList</ProjectTitle>
                        <ProjectInfo>
                            원티드 프리온보딩 인턴쉽 프론트엔드 선발과제로 제공되는 api 를 사용하여
                            로그인/회원가입/Todo CRUD 기능을 포함한 투두리스트 웹 사이트 구축
                            프로젝트
                        </ProjectInfo>
                        <TechStack>
                            <TechStackTitle>Tech stack : </TechStackTitle>
                            <TechStackInfo>
                                React, React-router-dom, Axios, Styled-components
                            </TechStackInfo>
                        </TechStack>
                        <LinkedList>
                            <StyledLink to="https://wanted-pre-onboarding-frontend-ukssss.vercel.app">
                                <BiLink />
                                <LinkInfo>Live Preview</LinkInfo>
                            </StyledLink>
                            <StyledLink to="https://github.com/ukssss/wanted-pre-onboarding-frontend">
                                <AiFillGithub />
                                <LinkInfo>View Code</LinkInfo>
                            </StyledLink>
                        </LinkedList>
                    </Content>
                </Project>
                <Project>
                    <StyledLink to="https://likelion-react-16.github.io/Market-Karly/#/">
                        <Image src="/projects/market-karly.png" alt="project-image" />
                    </StyledLink>
                    <Content>
                        <ProjectTitle>Market Karly</ProjectTitle>
                        <ProjectInfo>
                            멋쟁이사자처럼 프론트엔드 스쿨 4기에서 진행한 React Project 로 마켓 컬리
                            사이트를 참고하여 만든 프로젝트
                        </ProjectInfo>
                        <TechStack>
                            <TechStackTitle>Tech stack : </TechStackTitle>
                            <TechStackInfo>
                                Vite, React, React-router-dom, Recoil, Sass, Firebase
                            </TechStackInfo>
                        </TechStack>
                        <LinkedList>
                            <StyledLink to="https://likelion-react-16.github.io/Market-Karly/#/">
                                <BiLink />
                                <LinkInfo>Live Preview</LinkInfo>
                            </StyledLink>
                            <StyledLink to="https://github.com/LIKELION-REACT-16/Market-Karly">
                                <AiFillGithub />
                                <LinkInfo>View Code</LinkInfo>
                            </StyledLink>
                        </LinkedList>
                    </Content>
                </Project>
            </Section>
        </Container>
    );
};

const Container = styled.div``;
const Section = styled.section`
    display: grid;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 1rem;
    }

    row-gap: 1rem;
`;
const Project = styled.article`
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
    height: 25rem;
`;
const Image = styled.img`
    border-radius: 20px 20px 0px 0px;
    width: 100%;
    height: 13.08rem;
    object-fit: cover;
`;
const Content = styled.div``;
const ProjectTitle = styled.h4`
    font-weight: 500;
    line-height: 2rem;
    text-align: center;

    height: 2rem;
`;
const ProjectInfo = styled.div`
    padding: 0.5rem;
    font-size: 0.8rem;
    font-weight: 300;
    line-height: 1.08rem;
    height: 5rem;
    overflow-y: auto;
`;
const TechStack = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    gap: 0.3rem;
    height: 3rem;
`;
const TechStackTitle = styled.span`
    font-size: 0.7rem;
    font-weight: 500;
    display: inline-block;
`;
const TechStackInfo = styled.span`
    flex: 1;
    font-size: 0.7rem;
    font-weight: 300;
    display: inline-block;
    line-height: 1rem;
    height: 2rem;
    overflow-y: scroll;
`;
const LinkedList = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    & > a {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.2rem;
    }
`;

const LinkInfo = styled.div`
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.08rem;
    text-decoration: underline;
`;
const StyledLink = styled(Link)``;

export default Projects;
