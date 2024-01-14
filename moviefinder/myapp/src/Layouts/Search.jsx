import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import MovieDetail from './MovieComponent/MovieComponent';
import './Search.css';
import YouTube from 'react-youtube';

const Search = () => {
  const [movies, setMovies] = useState([]); // Use state to manage movies
  const [mainVideo, setMainVideo] = useState(false);
  const [id, setId] = useState(null);
  const playerRef = useRef(null);

  // Call when search component is rendered
  useEffect(() => {
    loadMovies();
  }, []);

  // It will be called when the search component is rendered
  const loadMovies = async () => {
    try {
      let response = await axios.get("http://localhost:8091/Movies");
      setMovies(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error loading movies:", error);
    }
  }

  const opts = {
    height: '450',
    width: '700',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className="result">
        <div className="mainVideo">
          {mainVideo ? (
            <YouTube videoId={id} opts={opts} ref={playerRef} />
          ) : (
            <YouTube videoId={id} opts={opts} ref={playerRef} />
          )}
        </div>
        <div className="sideVideo">
          <div>
            {/* map function is used to iterate a collection of elements */}
            {movies.map((movie) => (
              <MovieDetail movie={movie} key={movie.id} setMainVideo={setMainVideo} setId={setId} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
