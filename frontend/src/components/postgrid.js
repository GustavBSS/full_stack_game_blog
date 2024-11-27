import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostGrid = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/posts/')
            .then(response => {
                console.log('Posts recebidos:', response.data); // Para verificar os dados no console
                setPosts(response.data);
            })
            .catch(error => console.error('Erro ao buscar posts:', error));
    }, []);

    return (
        <div className="post-grid container my-4">
            <h2>Últimas Notícias</h2>
            <div className="row">
                {posts.length > 0 ? (
                    posts.map(post => (
                        <div className="col-md-4 mb-4" key={post.id}>
                            <div className="card">
                                <img 
                                    src="https://via.placeholder.com/300x200" 
                                    className="card-img-top" 
                                    alt={post.title} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.content.slice(0, 100)}...</p>
                                    <a href={`/post/${post.id}`} className="btn btn-primary">
                                        Leia mais
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Nenhum post disponível no momento.</p>
                )}
            </div>
        </div>
    );
};

export default PostGrid;
