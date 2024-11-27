import React, { useState } from 'react';

const AddCategory = () => {
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Categoria adicionada:', category);
        setCategory(''); // Reseta o campo após o envio
    };

    return (
        <div className="container mt-4">
            <h2>Adicionar Categoria</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Nome da Categoria</label>
                    <input
                        type="text"
                        id="category"
                        className="form-control"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Adicionar</button>
            </form>
        </div>
    );
};

export default AddCategory;
