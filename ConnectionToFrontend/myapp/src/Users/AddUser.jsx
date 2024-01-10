import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const AddUser = () => {

    //===> useNavigate() - use to navigate any page.
    let navigate = useNavigate();

    //==> user(entry) object.
    const[user,setUser] = useState({
        name:"",
        username:"",
        email:""
    });

    //==> Destructuring the user object.
    const {name, username, email} = user;  
    //console.log(name)==> "Abhinav"
    //console.log(username)==> "abhinav254"
    //console.log(email)==> "abhinav@gmail.com"
    
    const onInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    //===> async function - asynchronously, meaning they don't block the execution of the program.
    //==>e.preventDefault() - prevent the web pafe loading.
    //==> axios library - use to send a (POST/GET/DELETE/UPDATE) request to the URL "http://localhost:8085/user" with user object data.
    //==> await keyword - is used here to wait for the asynchronous operation (the POST request) to complete before proceeding to the next line.
    //==> navigate() - to navigate to the home page after the user is added.
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:8085/user", user);
        navigate("/");
    }

  return (
    <div className="container">
       <div className="row">
             <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center mb-4">Register students</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                 <div className="mb-3">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                id="Name"
                name="name"  // Add name attribute
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="User name"
                className="form-control"
                id="UserName"
                name="username"  
                value={username} //===> is used to """bind""" the input field's value to a variable named
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                id="Email"
                name="email"  // Add name attribute
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
                <button className="btn btn-outline-primary">Submit</button>
                  <Link to="/" className="btn btn-outline-danger mx-2">Cancel</Link>
                  </form>
             </div>
       </div>
    </div>
  );
}

export default AddUser;
