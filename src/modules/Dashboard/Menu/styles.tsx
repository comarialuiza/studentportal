import styled from 'styled-components';

export const Container = styled.nav`
    padding: 20px;
    max-width: 250px;
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
    
    a {
        margin: 15px 0;
    }
`;