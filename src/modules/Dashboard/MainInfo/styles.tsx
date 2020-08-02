import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    width: calc(100% - 250px);
`;

export const SubjectsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 50px;
`;