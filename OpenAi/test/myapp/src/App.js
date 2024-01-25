import React from 'react';
import Queries from './Components/MainComponents/Queries/Queries';
import Explore from './Components/MainComponents/Explore/Explore';
import './App.css';

const App = () => {
  return (
    <div className="container-1">
      <div className="explore">
        <Explore />
      </div>
      <div className="queries">
        <Queries />
      </div>
    </div>
  );
};

export default App;