import React from "react";
import Navbar from "./Layout/Navbar";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./Users/AddUser";
import EditUser from "./Users/EditUser";
import ViewUser from "./Users/ViewUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={[
              <Navbar key="navbar" />,
              <Home key="home" />,
            ]}
          />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewUser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
