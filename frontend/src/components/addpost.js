import React, { useState } from 'react';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Post adicionado:', { title, content });
        setTitle('');
        setContent('');
    };

    return (
        <div className="container mt-4">
            <h2>Adicionar Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Título</label>
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Conteúdo</label>
                    <textarea
                        id="content"
                        className="form-control"
                        rows="5"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Adicionar</button>
            </form>
        </div>
    );
};

export default AddPost;
