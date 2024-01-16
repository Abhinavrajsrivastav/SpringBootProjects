import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { } from 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
  return (
    <div className="box">
    <nav className="navbar navbar-expand-lg navbar-light bg-dark px-2">
    
    <div className="container-fluid">
    <div className="brand">
    <div className="brand-box">
    <Link className="navbar-brand" to="/">Xeiver View</Link>
    <i class="bi bi-check2-all fs-3 text-white"></i>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link active" to="/Search">Search Movies</Link>
      </li>
      <li className="nav-item">
          <a className="nav-link active" href="https://www.youtube.com/">Youtube</a>
      </li>
    </ul>
    </div>
    </div>
  </div>
  {/* <div className="acknowledge">
    <h2>Welcome to Movie finder application🌼,  developed by abhinav ✨!</h2>
  </div> */}
  </nav>
  </div>
  )
}

export default Navbar