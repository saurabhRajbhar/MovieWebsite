import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onMovieClick }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [availableLanguages, setAvailableLanguages] = useState([]);
    const [availableCountries, setAvailableCountries] = useState([]);
    const [availableGenres, setAvailableGenres] = useState([]);

    // Function to get unique values from an array
    const getUniqueValues = (array) => [...new Set(array)];

    // Effect to update available languages, countries, and genres when movies change
    useEffect(() => {
        // Extract all languages, countries, and genres from movies
        const allLanguages = movies.flatMap(movie => movie.movielanguages);
        const allCountries = movies.flatMap(movie => movie.moviecountries);
        const allGenres = movies.flatMap(movie => movie.moviegenres);

        // Set available languages, countries, and genres
        setAvailableLanguages(getUniqueValues(allLanguages));
        setAvailableCountries(getUniqueValues(allCountries));
        setAvailableGenres(getUniqueValues(allGenres));
    }, [movies]);

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    const filteredMovies = movies.filter((movie) => {
        const title = movie.movietitle.toLowerCase();
        const language = selectedLanguage ? movie.movielanguages.includes(selectedLanguage) : true;
        const country = selectedCountry ? movie.moviecountries.includes(selectedCountry) : true;
        const genre = selectedGenre ? movie.moviegenres.includes(selectedGenre) : true;
        const query = searchQuery.toLowerCase();

        return title.includes(query) && language && country && genre;
    });

    return (
        <div className="container mx-auto py-8">
            <div className="flex flex-wrap mb-4">
                <input
                    type="text"
                    placeholder="Search movies..."
                    className="w-full sm:w-auto px-4 py-2 rounded border border-gray-300 mb-2 sm:mr-4"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
                <select
                    className="w-full sm:w-auto px-4 py-2 rounded border border-gray-300 mb-2 sm:mr-4"
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                >
                    <option value="">All Languages</option>
                    {availableLanguages.map(language => (
                        <option key={language} value={language}>{language}</option>
                    ))}
                </select>
                <select
                    className="w-full sm:w-auto px-4 py-2 rounded border border-gray-300 mb-2 sm:mr-4"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                >
                    <option value="">All Countries</option>
                    {availableCountries.map(country => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
                <select
                    className="w-full sm:w-auto px-4 py-2 rounded border border-gray-300 mb-2"
                    value={selectedGenre}
                    onChange={handleGenreChange}
                >
                    <option value="">All Genres</option>
                    {availableGenres.map(genre => (
                        <option key={genre} value={genre}>{genre}</option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredMovies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} onClick={onMovieClick} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
