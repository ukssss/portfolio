import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Error = () => {
    return (
        <Container>
            <Title>404 - 페이지를 찾을 수 없습니다.</Title>
            <StyledLink to="/">홈으로 돌아가기</StyledLink>
        </Container>
    );
};

const Container = styled.div`
    display: block;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const Title = styled.h2``;
const StyledLink = styled(Link)`
    color: #007acc;
`;

export default Error;
