import React, { useState, useEffect } from 'react';

const Categories = () => {
    const apiKey = '143b360f65ba4c00922cef68ac219af3';
    const categoriesList = ['action', 'adventure', 'rpg', 'sports'];

    const [categories, setCategories] = useState([]);
    const [newsData, setNewsData] = useState(Array(categoriesList.length).fill({}));

    useEffect(() => {
        const fetchNewsData = async () => {
            const responses = await Promise.all(
                categoriesList.map(category => {
                    const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}`;
                    return fetch(url);
                })
            );

            const data = await Promise.all(responses.map(response => response.json()));
            setNewsData(data);
        };

        fetchNewsData();
    }, [categoriesList]);

    return (
        <div className="container mt-4">
            <h2>Categorias</h2>
            <ul className="list-group">
                {categoriesList.map((category, index) => (
                    <li className="list-group-item" key={index}>
                        <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                        <ul>
                            {newsData[index] && newsData[index].articles && newsData[index].articles.map(article => (
                                <li key={article.title}>
                                    <a href={article.url}>{article.title}</a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;