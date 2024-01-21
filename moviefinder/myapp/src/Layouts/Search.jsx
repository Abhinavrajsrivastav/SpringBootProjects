import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import MovieDetail from './MovieComponent/MovieComponent';
import './Search.css';
import YouTube from 'react-youtube';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [mainVideo, setMainVideo] = useState(false);
  const [id, setId] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      let response = await axios.get("http://localhost:8091/Movies");
      let answer = response.data;
      setMovies(answer);
    } catch (error) {
      console.error("Error loading movies:", error);
    }
  }

  const opts = {
    height: window.innerWidth <= 767 ? '200' : '570',
    width: '100%',
    'border-radius': '50px',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className="result">
        <div className="mainVideo">
          {mainVideo ?
            (<YouTube videoId={id} opts={opts} ref={playerRef} />)
            :
            (<YouTube videoId="" opts={opts} ref={playerRef} />)
          }
        </div>
        <div className="sideVideo">
          <div className="side">
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
