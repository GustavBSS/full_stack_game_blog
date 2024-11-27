import React, { useState, useEffect } from 'react';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Simulação de dados; troque por uma API no futuro
        setPosts([
            { title: 'Primeiro Post', content: 'Conteúdo do primeiro post' },
            { title: 'Segundo Post', content: 'Conteúdo do segundo post' },
        ]);
    }, []);

    return (
        <div className="container mt-4">
            <h2>Posts Recentes</h2>
            <div className="row">
                {posts.map((post, index) => (
                    <div className="col-md-6 mb-4" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
