import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Navbar.css';
// Import Bootstrap icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
  return (
    <div className="box">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark px-2">

        <div className="container-fluid">
          <div className="brand">
            <div className="brand-box">
              <Link className="navbar-brand text-white nav-hover" to="/">View</Link>
              <i className="bi bi-check2-all fs-3 text-success fs-3"></i>
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
                  <a className="nav-link active" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">Youtube</a>
                </li>
              </ul>
            </div>
          </div>
          <form class="form-inline my-2 my-lg-0">
      <div>
        
      </div>
    </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
