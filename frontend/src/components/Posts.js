import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/posts/')
            .then(response => setPosts(response.data))
            .catch(error => console.error('Erro ao buscar posts:', error));
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <small>Categoria: {post.category}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
