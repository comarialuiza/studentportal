import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Input } from './styles';

const Form: React.FC = () => {
    return (
        <Container>
            <h1>Form!</h1>
            <label htmlFor="GRR">GRR</label>
            <Input placeholder="Ex.: GRR20189999" id="GRR"/>
            <label htmlFor="password">Senha</label>
            <Input placeholder="*********" id="password"/>
            <Link to='/'>Entrar</Link>
        </Container>
    );
}

export default Form;