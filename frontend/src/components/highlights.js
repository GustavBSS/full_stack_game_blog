import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

const Highlights = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/posts/')
            .then(response => setPosts(response.data.slice(0, 5))) // Exibe os 5 primeiros posts como destaque
            .catch(error => console.error('Erro ao buscar destaques:', error));
    }, []);

    return (
        <div className="highlights my-4">
            <Carousel>
                {posts.map(post => (
                    <Carousel.Item key={post.id}>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/1200x400" // Adicione uma URL de imagem dinâmica se disponível
                            alt={post.title}
                        />
                        <Carousel.Caption>
                            <h3>{post.title}</h3>
                            <p>{post.content.slice(0, 150)}...</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Highlights;
