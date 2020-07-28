import React from 'react';

import { Container } from './styles';

const ProgressBar: React.FC = () => {
    return (
        <Container>
            <p><span>Parabéns!</span> Você já concluiu <span>1/4</span> da sua graduação!</p>
        </Container>
    );
}

export default ProgressBar;