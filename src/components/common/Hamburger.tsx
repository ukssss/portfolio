import styled from 'styled-components';

interface IProps {
    children: React.ReactNode;
    onClick: () => void;
}

const Hamburger = ({ onClick, children }: IProps) => {
    return <Button onClick={onClick}>{children}</Button>;
};

const Button = styled.button`
    font-size: 26px;
    margin-right: 10px;
    padding: 8px;
    width: auto;
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export default Hamburger;
