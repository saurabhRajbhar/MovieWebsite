import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import MovieDetail from './Components/MovieDetails';
import moviesData from "./data/movies.json"
const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  }

  const handleCloseDetail = () => {
    setSelectedMovie(null);
  }

  return (
    <div>
      {selectedMovie ?
        <MovieDetail movie={selectedMovie} onClose={handleCloseDetail} /> :
        <MovieList movies={moviesData} onMovieClick={handleMovieClick} />
      }
    </div>
  );
}

export default App;
