import React, { useState } from 'react';

const CategoryFilter = ({ categories, onFilter }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleFilter = () => {
        onFilter(selectedCategory);
    };

    return (
        <div className="container mt-4">
            <h2>Filtrar por Categoria</h2>
            <select
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="">Selecione uma categoria</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <button className="btn btn-primary mt-2" onClick={handleFilter}>
                Filtrar
            </button>
        </div>
    );
};

export default CategoryFilter;
