import React from 'react';

import { Container } from './styles';

import newsMockData from './newsMock';

interface News {
    title: string;
    date: string;
}

const LastNews: React.FC = () => {
    return (
        <Container>
            <h1>Últimas Notícias</h1>
            { newsMockData.map((news: News) => (
                <>
                    <h3>{ news.title }</h3>
                    <p>{ news.date }</p>
                </>
            )) }

        </Container>
    );
}

export default LastNews;