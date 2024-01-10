import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    
    <nav className=" navbar bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Student Management Appication</a>
    <Link className="btn btn-outline-light" to="/AddUser" type="button">
      Add User
    </Link>
  </div>
   </nav>
    
    </div>
  )
}

export default Navbar