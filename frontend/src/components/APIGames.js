import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsAPI = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const cache = {}; // In-memory cache

    useEffect(() => {
        const fetchArticles = async () => {
            const cacheKey = 'news-articles';
            if (cacheKey in cache) {
                setArticles(cache[cacheKey]);
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get('https://newsapi.org/v2/everything', {
                    params: {
                        q: 'game',
                        apiKey: '0be89051f4434bdf8e7373e27f57b12e',
                        page: 1 // Fetch only the first page of results
                    }
                });
                const articles = response.data.articles;
                cache[cacheKey] = articles; // Store response in cache
                setArticles(articles);
                setLoading(false);
            } catch (err) {
                console.error('Erro ao buscar notícias:', err);
                setError('Não foi possível carregar as notícias.');
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) {
        return <div className="container mt-4">Carregando notícias...</div>;
    }

    if (error) {
        return <div className="container mt-4">{error}</div>;
    }

    return (
        <div className="container mt-4">
            <h2>Últimas Notícias de Jogos</h2>
            <div className="row">
                {articles.map((article, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card">
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
