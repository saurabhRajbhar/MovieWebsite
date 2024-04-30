import React from 'react';
import Footer from './Footer';

const MovieDetail = ({ movie, onClose }) => {
    return (
        <>
            <div className=" top-0 left-0 bottom-0 w-full h-full bg-gradient-to-br from-blue-300 to-gray-400 bg-opacity-75 flex justify-center items-center">
                <div className="bg-yellow-100 rounded-lg p-8 max-w-md px-4 max-h-30 relative mt-6 mb-6 min-w-sm sm:w-sm">
                    <button className="absolute top-4 right-4 text-gray-600 hover:text-red-800" onClick={onClose}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <img className="w-60 h-80 mb-4 mx-auto transition transform hover:scale-110 " src={movie.moviemainphotos[0]} alt={movie.movietitle} />
                    <h2 className="text-xl font-bold mb-2 text-center">{movie.movietitle}</h2>
                    <div>
                        <p className="mb-2"><strong>IMDb Movie ID:</strong> {movie.imdbmovieid}</p>
                        <p className="mb-2"><strong>Languages:</strong> {movie.movielanguages.join(', ')}</p>
                        <p><strong>Countries:</strong> {movie.moviecountries.join(', ')}</p>
                        <p><strong>Genres:</strong> {movie.moviegenres.join(', ')}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MovieDetail;
