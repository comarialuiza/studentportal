import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Input, MainTitle, SubTitle, FormContainer, Label, ButtonsContainer } from './styles';

const Form: React.FC = () => {
    return (
        <Container>
            <MainTitle>Universidade Federal do Paraná</MainTitle>
            <SubTitle>Bem vindo de volta!</SubTitle>
            <FormContainer>
                <Label htmlFor="GRR">GRR</Label>
                <Input placeholder="Ex.: GRR20189999" id="GRR"/>
                <Label htmlFor="password">Senha</Label>
                <Input placeholder="*********" id="password"/>

                <ButtonsContainer>
                    <Link to="/register">Criar conta</Link>
                    <Link to='/'>Entrar</Link>
                </ButtonsContainer>
            </FormContainer>
        </Container>
    );
}

export default Form;