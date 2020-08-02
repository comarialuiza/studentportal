import styled from 'styled-components';

export const SubjectGrade = styled.p<{ color: string }>`
    width: 70px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    background: ${ props => props.color };
    border-radius: 50%;
    color: var(--white);
    font-weight: 300;
    letter-spacing: .4px;
    font-size: 16px;
`;

export const Container = styled.li`
    padding: var(--paddingLarge);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: var(--borderRadius);
    background-color: var(--quaternaryColor);
`;

export const SubjectTitle = styled.h3`
    font-size: 15px;
`;

export const SubjectCode = styled.span`
    margin: 10px 0;
    display: block;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: var(--secondaryColor);
    max-width: max-content;
    color: var(--white);
`;

export const SubjectTeacher = styled.p`
    text-transform: uppercase;
    font-size: 12px;
`;

export const SubjectInfo = styled.div`
    margin-right: 30px;
`;

