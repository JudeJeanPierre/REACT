import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from './components/Form';
import Cart from './components/Cart';
import addButton from './components/Button';
import './style.css'

function App() {
  const apiKey = "f5068e78";
  // Establish ApiKey

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      // get Movie&save response to state
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );

      const data = await response.json();

      // Set Response to state
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMovie("Clueless");
  }, []);

  const [array, setArray] = useState([])
  const addMovie = () => {
    console.log("got it")
    setArray(oldArray => [...oldArray, movie])
  }

  const deleteMovie = (e) =>{
    const title = e.target.getAttribute("title")
    setArray(array.filter(item => item.Title !== title)
  )
}
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
      
      <Cart list={array} addMovie= {addMovie} deleteMovie = {deleteMovie}/>
      
    </div>
  );
}

export default App;