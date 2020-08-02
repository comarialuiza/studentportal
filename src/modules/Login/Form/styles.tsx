import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80%;
`;

export const Label = styled.label`
    width: 100%;
    margin: 5px;
`;

export const Input = styled.input`
    padding: var(--padding);
    width: 100%;
    margin-bottom: 20px;
    border-radius: var(--borderRadius);
    border: none;
    background-color: var(--quaternaryColor);
`;

export const MainTitle = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font-size: 28px;
    line-height: 40px;
    margin-bottom: 20px;
`;

export const SubTitle = styled.h3`
    font-size: 22px;
    margin-bottom: 20px;
    text-align: center;
`;

export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    width: 100%;
`;