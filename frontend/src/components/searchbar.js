import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="container mt-4">
            <input
                type="text"
                className="form-control"
                placeholder="Pesquisar..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-primary mt-2" onClick={handleSearch}>
                Pesquisar
            </button>
        </div>
    );
};

export default SearchBar;
