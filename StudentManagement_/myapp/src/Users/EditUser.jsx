  import React, { useEffect } from 'react';
  import { useState } from 'react';
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';
  import { Link } from 'react-router-dom';
  import { useParams } from 'react-router-dom';


  const EditUser = () => {

      //==> to navigate to another page 
      let navigate = useNavigate();

      //==>1. to get the id from the url
      //==>2.  get id parameter from the object returned by the useParams hook.
      //==>3. Let's say the route looks like this: /users/:id, 
      //and the URL is /users/123. When this component is rendered,
      ///useParams will return an object with a property named id, and its value will be '123'
      const { id } = useParams();

      const[user,setUser] = useState({
          name:"",
          username:"",
          email:""
      });

      const {name, username, email} = user;  
      

      const onInputChange = e => {
          setUser({...user, [e.target.name]: e.target.value})
      }

      const onSubmit = async e => {
          e.preventDefault();
          await axios.put(`http://localhost:8085/user/${id}`, user);
          navigate("/");
      }

      //==>data fetching ????
      useEffect(() => {
          loadUser();
      }, []);

      const loadUser = async () => {
        const result = await axios.get(`http://localhost:8085/user/${id}`);
        setUser(result.data);
        console.log(result.data);
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
                  name="username"  // Add name attribute
                  value={username}
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

  export default EditUser;
