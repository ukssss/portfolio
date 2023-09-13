import { ScrollToTop } from '@/components';
import styled from 'styled-components';

const About = () => {
    return (
        <Container>
            <Section>
                <SubTitle>Awards</SubTitle>
                <List>
                    <Item>
                        <ItemLeft>2022-11</ItemLeft>
                        <ItemRight>2022 PKNU CE S/W 경진대회 우수상</ItemRight>
                    </Item>
                    <Item>
                        <ItemLeft>2021-10</ItemLeft>
                        <ItemRight>2021 PNU AI · 오픈소스 SW 해커톤 장려상</ItemRight>
                    </Item>
                </List>
            </Section>
            <Section>
                <SubTitle>Certificates</SubTitle>
                <List>
                    <Item>
                        <ItemLeft>2023-09</ItemLeft>
                        <ItemRight>정보처리기사</ItemRight>
                    </Item>
                    <Item>
                        <ItemLeft>2022-09</ItemLeft>
                        <ItemRight>SQL 개발자 (SQLD)</ItemRight>
                    </Item>
                    <Item>
                        <ItemLeft>2022-02</ItemLeft>
                        <ItemRight>컴퓨터활용능력 1급</ItemRight>
                    </Item>
                </List>
            </Section>
            <Section>
                <SubTitle>Experience</SubTitle>
                <List>
                    <Item>
                        <ItemLeft>2023-08 ~ 2023-09</ItemLeft>
                        <ItemRight>
                            원티드 프리온보딩 인턴쉽 프론트엔드 (React, Typescript)
                        </ItemRight>
                    </Item>
                    <Item>
                        <ItemLeft>2022-11 ~ 2023-03</ItemLeft>
                        <ItemRight>
                            멋쟁이사자처럼 프론트엔드 스쿨 (HTML, CSS, Javascript, React)
                        </ItemRight>
                    </Item>
                    <Item>
                        <ItemLeft>2022-09 ~ 2022-12</ItemLeft>
                        <ItemRight>노마드 스터디 (HTML, CSS, Javascript)</ItemRight>
                    </Item>
                    <Item>
                        <ItemLeft>2021-09 ~ 2021-12</ItemLeft>
                        <ItemRight>GDSC PKNU (React)</ItemRight>
                    </Item>
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
const SubTitle = styled.h3`
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 2.16rem;
    letter-spacing: -0.4px;
    margin-bottom: 1.58rem;
`;
const List = styled.ul`
    margin-bottom: 1.58rem;
`;
const Item = styled.li`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    gap: 10px;
`;
const ItemLeft = styled.div`
    padding: 0 1rem;
    border-right: 1px solid #666;

    color: #666;
    font-size: 0.8rem;
`;
const ItemRight = styled.div`
    padding: 1rem;
    flex: 1;
    font-weight: 600;
`;

export default About;
