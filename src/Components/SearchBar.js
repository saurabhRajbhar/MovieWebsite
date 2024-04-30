import React, { useState } from 'react';

const SearchBar = ({ setSearchQuery }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setSearchQuery(e.target.value);
    }

    return (
        <input
            type="text"
            placeholder="Search movies by title..."
            className="w-full bg-gray-100 rounded-md p-2 mb-4"
            value={searchTerm}
            onChange={handleSearchChange}
        />
    );
}

export default SearchBar;
