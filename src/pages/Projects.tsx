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
                    <StyledLink to="/">
                        <Image src="/projects/project1.jpg" alt="project-image" />
                    </StyledLink>
                    <Content>
                        <ProjectTitle>Project Tile goes here</ProjectTitle>
                        <ProjectInfo>
                            This is sample project description random things are here in description
                            This is sample project lorem ipsum generator for dummy This is sample
                            project description random things are here in description This is sample
                            project lorem ipsum generator for dummy This is sample project
                            description random things are here in description This is sample project
                            lorem ipsum generator for dummy
                        </ProjectInfo>
                        <TechStack>
                            <TechStackTitle>Tech stack : </TechStackTitle>
                            <TechStackInfo>Typescript, React, Styled-components</TechStackInfo>
                        </TechStack>
                        <LinkedList>
                            <StyledLink to="/">
                                <BiLink />
                                <LinkInfo>Live Preview</LinkInfo>
                            </StyledLink>
                            <StyledLink to="/">
                                <AiFillGithub />
                                <LinkInfo>View Code</LinkInfo>
                            </StyledLink>
                        </LinkedList>
                    </Content>
                </Project>
                <Project>
                    <StyledLink to="/">
                        <Image src="/projects/project1.jpg" alt="project-image" />
                    </StyledLink>
                    <Content>
                        <ProjectTitle>Project Tile goes here</ProjectTitle>
                        <ProjectInfo>
                            This is sample project description random things are here in description
                            This is sample project lorem ipsum generator for dummy This is sample
                            project description random things are here in description This is sample
                            project lorem ipsum generator for dummy This is sample project
                            description random things are here in description This is sample project
                            lorem ipsum generator for dummy
                        </ProjectInfo>
                        <TechStack>
                            <TechStackTitle>Tech stack : </TechStackTitle>
                            <TechStackInfo>Typescript, React, Styled-components</TechStackInfo>
                        </TechStack>
                        <LinkedList>
                            <StyledLink to="/">
                                <BiLink />
                                <LinkInfo>Live Preview</LinkInfo>
                            </StyledLink>
                            <StyledLink to="/">
                                <AiFillGithub />
                                <LinkInfo>View Code</LinkInfo>
                            </StyledLink>
                        </LinkedList>
                    </Content>
                </Project>
                <Project>
                    <StyledLink to="/">
                        <Image src="/projects/project1.jpg" alt="project-image" />
                    </StyledLink>
                    <Content>
                        <ProjectTitle>Project Tile goes here</ProjectTitle>
                        <ProjectInfo>
                            This is sample project description random things are here in description
                            This is sample project lorem ipsum generator for dummy This is sample
                            project description random things are here in description This is sample
                            project lorem ipsum generator for dummy This is sample project
                            description random things are here in description This is sample project
                            lorem ipsum generator for dummy
                        </ProjectInfo>
                        <TechStack>
                            <TechStackTitle>Tech stack : </TechStackTitle>
                            <TechStackInfo>Typescript, React, Styled-components</TechStackInfo>
                        </TechStack>
                        <LinkedList>
                            <StyledLink to="/">
                                <BiLink />
                                <LinkInfo>Live Preview</LinkInfo>
                            </StyledLink>
                            <StyledLink to="/">
                                <AiFillGithub />
                                <LinkInfo>View Code</LinkInfo>
                            </StyledLink>
                        </LinkedList>
                    </Content>
                </Project>
                <Project>
                    <StyledLink to="/">
                        <Image src="/projects/project1.jpg" alt="project-image" />
                    </StyledLink>
                    <Content>
                        <ProjectTitle>Project Tile goes here</ProjectTitle>
                        <ProjectInfo>
                            This is sample project description random things are here in description
                            This is sample project lorem ipsum generator for dummy This is sample
                            project description random things are here in description This is sample
                            project lorem ipsum generator for dummy This is sample project
                            description random things are here in description This is sample project
                            lorem ipsum generator for dummy
                        </ProjectInfo>
                        <TechStack>
                            <TechStackTitle>Tech stack : </TechStackTitle>
                            <TechStackInfo>Typescript, React, Styled-components</TechStackInfo>
                        </TechStack>
                        <LinkedList>
                            <StyledLink to="/">
                                <BiLink />
                                <LinkInfo>Live Preview</LinkInfo>
                            </StyledLink>
                            <StyledLink to="/">
                                <AiFillGithub />
                                <LinkInfo>View Code</LinkInfo>
                            </StyledLink>
                        </LinkedList>
                    </Content>
                </Project>
                <Project>
                    <StyledLink to="/">
                        <Image src="/projects/project1.jpg" alt="project-image" />
                    </StyledLink>
                    <Content>
                        <ProjectTitle>Project Tile goes here</ProjectTitle>
                        <ProjectInfo>
                            This is sample project description random things are here in description
                            This is sample project lorem ipsum generator for dummy This is sample
                            project description random things are here in description This is sample
                            project lorem ipsum generator for dummy This is sample project
                            description random things are here in description This is sample project
                            lorem ipsum generator for dummy
                        </ProjectInfo>
                        <TechStack>
                            <TechStackTitle>Tech stack : </TechStackTitle>
                            <TechStackInfo>Typescript, React, Styled-components</TechStackInfo>
                        </TechStack>
                        <LinkedList>
                            <StyledLink to="/">
                                <BiLink />
                                <LinkInfo>Live Preview</LinkInfo>
                            </StyledLink>
                            <StyledLink to="/">
                                <AiFillGithub />
                                <LinkInfo>View Code</LinkInfo>
                            </StyledLink>
                        </LinkedList>
                    </Content>
                </Project>
                <Project>
                    <StyledLink to="/">
                        <Image src="/projects/project1.jpg" alt="project-image" />
                    </StyledLink>
                    <Content>
                        <ProjectTitle>Project Tile goes here</ProjectTitle>
                        <ProjectInfo>
                            This is sample project description random things are here in description
                            This is sample project lorem ipsum generator for dummy This is sample
                            project description random things are here in description This is sample
                            project lorem ipsum generator for dummy This is sample project
                            description random things are here in description This is sample project
                            lorem ipsum generator for dummy
                        </ProjectInfo>
                        <TechStack>
                            <TechStackTitle>Tech stack : </TechStackTitle>
                            <TechStackInfo>Typescript, React, Styled-components</TechStackInfo>
                        </TechStack>
                        <LinkedList>
                            <StyledLink to="/">
                                <BiLink />
                                <LinkInfo>Live Preview</LinkInfo>
                            </StyledLink>
                            <StyledLink to="/">
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
`;
const Image = styled.img`
    border-radius: 20px 20px 0px 0px;
`;
const Content = styled.div``;
const ProjectTitle = styled.h4`
    padding: 0.7rem;

    font-weight: 500;
    line-height: 1.08rem;
    text-align: center;
`;
const ProjectInfo = styled.div`
    padding: 0 0.5rem;
    font-size: 0.8rem;
    font-weight: 300;
    line-height: 1.08rem;
    max-height: 3.3rem;
    overflow-y: auto;
`;
const TechStack = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    gap: 0.3rem;
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
`;
const LinkedList = styled.div`
    bottom: 0;
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
