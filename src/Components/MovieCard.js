import React from 'react';

const MovieCard = ({ movie, onClick }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer" onClick={() => onClick(movie)}>
            <img className="w-full transition transform hover:scale-105" src={movie.moviemainphotos[0]} alt={movie.movietitle} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{movie.movietitle}</div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Movie Details
                </button>
            </div>
        </div>
    );
}

export default MovieCard;
