import { MdArrowCircleUp } from 'react-icons/md';
import styled from 'styled-components';

interface IProps {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    color?: string;
    size?: string;
    opacity: number;
}

const ScrollToTop = ({ top, bottom, left, right, color, size, opacity }: IProps) => {
    const moveToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Button
            onClick={moveToTop}
            opacity={opacity}
            top={top}
            bottom={bottom}
            left={left}
            right={right}
            color={color}
            size={size}
        >
            <MdArrowCircleUp />
        </Button>
    );
};

const Button = styled.button<IProps>`
    position: fixed;

    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    left: ${(props) => props.left};
    right: ${(props) => props.right};

    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    opacity: ${(props) => props.opacity};

    &:hover {
        opacity: 1;
    }
`;

export default ScrollToTop;
