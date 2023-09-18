import { SubTitle } from '@/components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Contact = () => {
    return (
        <Container>
            <SubTitle>For any questions please contact us :</SubTitle>
            <Contents>
                <ContactInfo>
                    <ContactType>Email</ContactType>
                    <ContactDetail to="mailto:1872003115su@gmail.com">
                        1872003115su@gmail.com
                    </ContactDetail>
                </ContactInfo>
                <ContactInfo>
                    <ContactType>Phone</ContactType>
                    <ContactDetail to="tel:010-3330-6035">010-3330-6035</ContactDetail>
                </ContactInfo>
            </Contents>
        </Container>
    );
};

const Container = styled.div`
    height: 60vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > h2 {
        text-align: center;
    }
`;

const Contents = styled.article`
    padding: 1rem;
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 0.5rem;
`;

const ContactType = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
    align-self: center;
`;
const ContactDetail = styled(Link)`
    color: #007acc;
    font-size: 0.9rem;
    font-weight: 600;

    align-self: center;
`;

export default Contact;
