import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  //==> to navigate on other page
  const navigate = useNavigate();

  //==> to store object body 
  const [movie, setMovie] = useState({
    title: ""
  });

  //==> destructuring
  const {title} = movie;

  //==> reflect the changes in input field
     const onInputChange = e => {
        setMovie({...movie, [e.target.name]: e.target.value})
    }

    //==> to submit the form
    //==> axios is a http library use for making http request
    //==> await is use to keep wait next line of code until the response is not come 
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:8090/", movie);
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
    <button className="btn bg-primary">Search</button>
  </div>
</form>

    </div>
  )
}

export default Home;