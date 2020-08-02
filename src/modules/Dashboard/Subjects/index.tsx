import React, { useEffect, useState } from 'react';

import { Container, SubjectTitle, SubjectCode, SubjectTeacher, SubjectGrade, SubjectInfo } from './styles';

interface Subject {
    title: string,
    code: string,
    teacher: string,
    overallGrade: number;
    status: string;
}

interface Props {
    subject: Subject;
}

const Subjects: React.FC<Props> = (props: Props) => {
    const [ status ] = useState<string>(props.subject.status);
    const [ gradeColor, setGradeColor ] = useState<string>('');

    useEffect(() => {
        if (status === 'approved') {
            setGradeColor('#334537');
        } else if (status === 'danger') {
            setGradeColor('#c78232');
        } else if (status === 'failed') {
            setGradeColor('#ac5226')
        }
    }, [status, gradeColor]);

    return (
        <Container>
            <SubjectInfo>
                <SubjectTitle>{ props.subject.title }</SubjectTitle>
                <SubjectCode>{ props.subject.code }</SubjectCode>
                <SubjectTeacher>{ props.subject.teacher }</SubjectTeacher>
            </SubjectInfo>
            <SubjectGrade color={ gradeColor }>{ props.subject.overallGrade }</SubjectGrade>
        </Container>
    );
}

export default Subjects;