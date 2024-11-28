import React from 'react';
import NewsAPI from './APIGames.js';

const HomePage = () => {
    return (
        <div>
            <div className="container mt-4">
                <h2>Bem-vindo</h2>
                <p>Fique por dentro das últimas notícias, lançamentos e reviews sobre o mundo dos jogos!</p>
            </div>

            <div className="container mt-4">
                <NewsAPI />
            </div>
        </div>
    );
};

export default HomePage;
