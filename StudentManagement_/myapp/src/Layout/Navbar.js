import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
const Navbar = () => {
  return (
    <div className="flex">
    
    <nav className="navbar bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand nav" href="#">Student Management Appication</a>
    <Link className="btn btn-outline-light bg-success" to="/AddUser" type="button">
      Add User
    </Link>
  </div>
   </nav>
    
    </div>
  )
}

export default Navbar