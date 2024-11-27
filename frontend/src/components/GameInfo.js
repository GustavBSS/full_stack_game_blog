import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameInfo = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        axios
            .get('https://api.thegamesdb.net/v1/Games/ByGameName?apikey=YOUR_API_KEY&name=zelda')
            .then(response => {
                setGames(response.data.data.games);
                setLoading(false);
            })
            .catch(err => {
                console.error('Erro ao buscar dados:', err);
                setError('Não foi possível carregar os dados.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="loading">Carregando informações de jogos...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="container mt-4">
            <h2>Informações de Jogos</h2>
            <div className="row">
                {games.map((game, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card">
                            <img
                                src={`https://cdn.thegamesdb.net/images/original/${game.boxart.front}`}
                                className="card-img-top"
                                alt={game.game_title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{game.game_title}</h5>
                                <p className="card-text">Plataformas: {game.platform}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameInfo;
