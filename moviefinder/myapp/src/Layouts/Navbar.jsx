import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { } from 'bootstrap-icons/font/bootstrap-icons.css';


const Navbar = () => {
  return (
    <div className="box">
        <nav className="navbar navbar-expand-lg navbar-light bg-success px-2">
    
  <div className="container-fluid">
    <div className="brand">
      <div className="brand-box">
    <Link className="navbar-brand" to="/">Movie finder</Link>
      <i className="bi bi-person-hearts fs-3 text-white"></i>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Search">Search Movies</Link>
        </li>
      </ul>
    </div>
    </div>
  </div>
  <div className="acknowledge">
    <h2>Welcome to Movie finder application🌼,  developed by abhinav ✨!</h2>
  </div>
</nav>
    </div>
  )
}

export default Navbar