import React from 'react';

const FilterOptions = ({ filterOptions, setFilterOptions }) => {
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterOptions({ ...filterOptions, [name]: value });
    }

    return (
        <div className="flex flex-col md:flex-row justify-between mb-4">
            <select name="language" className="w-full md:w-auto bg-gray-100 rounded-md p-2 mb-2 md:mb-0 mr-2" onChange={handleFilterChange}>
                <option value="">Select Language</option>
                {/* Add options dynamically based on available languages */}
            </select>
            {/* Repeat for other filter options like country and genre */}
        </div>
    );
}

export default FilterOptions;
