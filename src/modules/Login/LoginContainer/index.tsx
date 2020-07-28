import React from 'react';

import LastNews from '../LastNews';
import Form from '../Form';

import { Container } from './styles';

const LoginContainer: React.FC = () => {
    return (
        <Container>
            <LastNews />
            <Form />
        </Container>
    );
}

export default LoginContainer;