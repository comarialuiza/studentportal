import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px;
`;

export const NewsContainer = styled.ul`
    max-width: 80%;
`;

export const News = styled.li`
    background-color: var(--quaternaryColor);
    padding: 20px;
    border-radius: var(--borderRadius);
    margin-top: 20px;

    h3 {
        font-size: 18px;
        line-height: 20px;
    }

    p {
        text-transform: uppercase;
        font-size: 13px;
        margin-top: 5px;
    }
`;