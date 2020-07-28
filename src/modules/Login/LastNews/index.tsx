import React from 'react';

import { Container, NewsContainer, News } from './styles';

import newsMockData from './newsMock';

interface News {
    title: string;
    date: string;
}

const LastNews: React.FC = () => {
    return (
        <Container>
            <h1>Últimas Notícias</h1>
            <NewsContainer>
                { newsMockData.map((news: News) => (
                    <News>
                        <h3>{ news.title }</h3>
                        <p>{ news.date }</p>
                    </News>
                )) }
            </NewsContainer>
            

        </Container>
    );
}

export default LastNews;