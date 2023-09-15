import styled from 'styled-components';

interface IProps {
    children: React.ReactNode;
}

const SubTitle = ({ children }: IProps) => {
    return <Text>{children}</Text>;
};

const Text = styled.h3`
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 2.16rem;
    letter-spacing: -0.4px;
    margin-bottom: 1.58rem;
`;

export default SubTitle;
