import React from 'react';
import './MovieComponent.css';

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail">
      <img src={movie.Poster} alt={movie.Title} />
      <div>
        <h2>{movie.Title}</h2>
        <p>Year: {movie.Year}</p>
        <p>Type: {movie.Type}</p>
        <p>ID: {movie.imdbID}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
