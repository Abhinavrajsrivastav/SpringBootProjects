// Search.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieDetail from './MovieComponent/MovieComponent';
import './Search.css';

const Search = () => {


  const [movies, setMovies] = useState([]);

  //==> call when search component is render
  useEffect(() => {
    loadMovies();
  }, []);

  //==> it will call when the search component is render
  const loadMovies = async () => {
      let response = await axios.get("http://localhost:8090/Movies");
      setMovies(response.data);
      console.log(response.data);
  }

  return (
    <>
    <div className="result">
    {/* //==> map function is used to itetrate a collection of elements */}
         {movies.map((movie) => (
            <MovieDetail movie={movie} key={movie.id} />
        ))}
    </div>
        
    </>
  )
}

export default Search;
