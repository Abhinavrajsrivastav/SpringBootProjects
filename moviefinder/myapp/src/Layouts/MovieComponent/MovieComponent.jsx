import React, { useState, useRef } from 'react';
import axios from 'axios';
import './MovieComponent.css';
import { useNavigate } from 'react-router-dom';

const MovieDetail = ({ movie, setMainVideo, setId }) => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const playBtnClicked = async (e) => {
    e.preventDefault();
    console.log(movie.Title);
    try {
  const response = await axios.post(
    "https://spring-boot-projects-2wjl-git-main-abhinavrajsrivastav.vercel.app/seeMovie",
    { movieName: movie.Title },
    {headers: {'Content-Type': 'application/json',}}
    );

    console.log(response.data);
    const newVideoId = response.data;
    setVideoId(newVideoId);
    setId(newVideoId);
    setMainVideo(true);

    // If a video is already playing, stop it
    if (isPlaying) {
    console.log("isPlaying is true");
    setShowVideo(false);

     // Stop the playback of the previous video using the YouTube API
    if (playerRef.current) {
      playerRef.current.internalPlayer.stopVideo();
    }
    }

    setIsPlaying(true);
    setShowVideo(true);

    // Request full screen for the video container
    const videoContainer = document.querySelector(".video-container");
    if (videoContainer && videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
    } else if (videoContainer && videoContainer.mozRequestFullScreen) {
      videoContainer.mozRequestFullScreen();
      } else if (videoContainer && videoContainer.webkitRequestFullscreen) {
      videoContainer.webkitRequestFullscreen();
      } else if (videoContainer && videoContainer.msRequestFullscreen) {
      videoContainer.msRequestFullscreen();
    }

    // Pass the data to the parent component
    setMainVideo(true);
    setId(newVideoId);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const closeVideo = () => {
    setIsPlaying(false);
    setShowVideo(false);

    // Exit full screen when closing the video
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }

    // Stop the playback when the close button is clicked
    if (playerRef.current) {
      playerRef.current.internalPlayer.stopVideo();
    }
  };

  return (
    <div className="movie-detail">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="play-button">
        <i className="bi bi-play-circle-fill fs-3 text-white" onClick={(e) => playBtnClicked(e)}></i>
      </div>
      <div className="detail">
        <h5>{movie.Title}</h5>
        <p>Year: {movie.Year}</p>
        <p>Type: {movie.Type}</p>
        {/* <p>ID: {movie.imdbID}</p> */}
      </div>
     
    </div>
  );
};

export default MovieDetail;
