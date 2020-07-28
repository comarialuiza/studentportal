import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Holder } from './styles';

const Menu: React.FC = () => {
    const [ user ] = useState('Maria Luiza');

    return (
        <Container>
            <Holder>
                <h2>Bem vindo, <span>{ user }</span></h2>
            </Holder>
            
            <Holder>
                <Link to="/">Página Inicial</Link>
                <Link to="/">Horários</Link>
                <Link to="/">Notas e Presença</Link>
                <Link to="/">Disciplinas</Link>
                <Link to="/">Desempenho</Link>
            </Holder>

            <Holder>
                <p>Sair</p>
            </Holder>
        </Container>
    );
}

export default Menu;