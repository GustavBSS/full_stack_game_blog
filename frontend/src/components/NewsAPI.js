import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsAPI.css';

const NewsAPI = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        axios
            .get('https://newsapi.org/v2/everything?q=games&apiKey=ba7b6aea42cb4f5da4cf4b40335d6344')
            .then(response => {
                setArticles(response.data.articles);
                setLoading(false);
            })
            .catch(err => {
                console.error('Erro ao buscar notícias:', err);
                setError('Não foi possível carregar as notícias.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="loading">Carregando notícias...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="container mt-4">
            <h2 className="section-title">Últimas Notícias de Jogos</h2>
            <div className="row">
                {articles.map((article, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card news-card">
                            <img
                                src={article.urlToImage || 'https://via.placeholder.com/300x200'}
                                className="card-img-top"
                                alt={article.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">
                                    {article.description ? article.description.slice(0, 100) : 'Sem descrição...'}...
                                </p>
                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
    Leia mais
</a>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsAPI;
