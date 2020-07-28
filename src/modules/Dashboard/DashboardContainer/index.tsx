import React from 'react';

import Menu from '../Menu';
import MainInfo from '../MainInfo';

import { Container } from './styles';

const DashboardContainer: React.FC = () => {
    return (
        <Container>
            <Menu />
            <MainInfo />
        </Container>
    );
}

export default DashboardContainer;