import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';

import { Container, SubjectsContainer } from './styles';
import Subjects from '../Subjects';

import subjectsMock from '../Subjects/subjectsMock';

const MainInfo: React.FC = () => {
    const [ subjects ] = useState(subjectsMock);

    return (
        <Container>
            <ProgressBar />
            <SubjectsContainer>
                { subjects.map(subject => (
                    <Subjects key={ subject.code } subject={ subject }/>
                )) }
            </SubjectsContainer>
        </Container>
    );
}

export default MainInfo;