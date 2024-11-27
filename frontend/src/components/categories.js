import React, { useState, useEffect } from 'react';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Simulação de dados; troque por uma API no futuro
        setCategories(['Ação', 'Aventura', 'RPG', 'Esportes']);
    }, []);

    return (
        <div className="container mt-4">
            <h2>Categorias</h2>
            <ul className="list-group">
                {categories.map((category, index) => (
                    <li className="list-group-item" key={index}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
