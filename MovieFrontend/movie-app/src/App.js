import { useEffect, useState } from 'react';
import Layout from './Components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/home/Home';
import api from './api/axiosConfig';

function App() {
  const [movies, setMovies] = useState(); 
  
  const getMovies = async () =>{ 
    try{ 
      const response = await api.get("/api/v1/movies");
      setMovies(response.data); 
   } 
   catch(err){ 
   console.log(err);    
}
}

useEffect (() => { 
  getMovies();
 }, []);


return ( 
<div className="App">
<Routes>
    <Route path="/" element={<Layout />}></Route>
        <Route path="/" element={<Home movies={movies}/>}></Route>
</Routes>
</div>
);

}

export default App;
