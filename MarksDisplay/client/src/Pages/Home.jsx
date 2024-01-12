import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Home = () => {
  //object 
  const [user, setUser] = useState({
    name: "",
    marks: ""
  });

  //for adding input object into table.
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //for submiting the form.
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8083/", user);
      console.log("User Added");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  //for loading the user.
  useEffect(() => {
    loadUser();
  }, []);

  //for loading the user.
  const loadUser = async () => {
    try {
      const result = await axios.get("http://localhost:8083/");
      setUser(result.data);
      console.log(result.data);
    } catch (error) {
      console.error("Error loading user:", error);
    }
  };

  return (
    <div>
      <form>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control mx-2 my-5"
              placeholder="name"
              name="name"
              value={user.name}
              onChange={onInputChange}
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control mx-2 my-5"
              placeholder="marks"
              name="marks"
              value={user.marks}
              onChange={onInputChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary mx-2 my-5"
            onClick={(e) => onSubmit(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
