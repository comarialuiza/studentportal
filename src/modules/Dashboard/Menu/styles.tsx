import styled from 'styled-components';

export const Container = styled.nav`
    padding: 20px;
    width: 250px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    background-color: var(--quaternaryColor);
`;

export const Holder = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 23px;
        font-weight: 300;
        line-height: 32px;
        color: var(--primaryColor);

        span {
            display: block;
            font-weight: 400;
        }
    }
    
    a {
        text-decoration: none;
        color: var(--primaryColor);

        & + a {
            margin-top: 30px;
        }
    }
`;