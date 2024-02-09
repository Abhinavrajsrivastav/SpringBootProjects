import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [movie,setMovie] = useState({
    title: ""
  });
  const {title} = movie;

  const onInputChange = e => {
    setMovie({...movie, [e.target.name]: e.target.value})
  }

  const onSubmit = async e => {
        e.preventDefault();
        await axios.post("https://spring-boot-projects-2wjl-idu8dbnl7-abhinavrajsrivastav.vercel.app/", movie);
        navigate("/Search");
  }

return (
  <div className="container">   
  <div className="title">
  <h2>Want to search any movie..?</h2>
  </div>
  <form onSubmit={(e) => onSubmit(e)} method="post">
  <div className="search">
  <input
    type="text"
    placeholder="Search Movies"
    name="title"
    //movies title is bind with "title" variable
    value={title}
    onChange={(e) => onInputChange(e)}
    />
    <button className="btn bg-success">Search</button>
  </div>
  </form>

  </div>
  )
}

export default Home;