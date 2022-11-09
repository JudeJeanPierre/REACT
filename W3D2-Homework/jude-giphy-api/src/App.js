// const API_URL = "http://api.giphy.com/v1/gifs/search?apikey=VpUziqe8qe7zePj7ewxOMGLGZuvp8pV8";

// jude-giphy-api key: VpUziqe8qe7zePj7ewxOMGLGZuvp8pV8

import { useState, useEffect } from "react";
import GifDisplay from "./components/GifDisplay";
import Form from './components/Form';
import Random from "./components/Random";
import RandomDisplay from "./components/RandomDisplay";
// import Favorite from './components/Favorite';
// import addButton from './components/Button';
import './style.css'

function App() {
  const apiKey = "VpUziqe8qe7zePj7ewxOMGLGZuvp8pV8";
 
  // Establish ApiKey
  const [gifImg, setGifImg] = useState(null);
  
  const getGif = async (searchTerm) => {
    try {
      // get Giphy&save response to state
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/search?apikey=${apiKey}&q=${searchTerm}&limit=12`
      );

      const data = await response.json();
      console.log(data);
      
      // Set response
      setGifImg(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getGif("");
  }, []);

  const [Images, setImages] = useState(null);
  const getGiphy = async () =>{

    try{
      const result = await fetch(
        `http://api.giphy.com/v1/gifs/random?apikey=${apiKey}&tag=happy` 
      );

      const randomData = await result.json();
      console.log(randomData);
      setImages(randomData.data.images.original.url);

      // Set Response to state
   
    } catch (e) {
      console.error(e);
    }
      
  };

  const handleClick = () =>{
    getGiphy("");

  }

  useEffect(() => {
    getGiphy("");
  }, []);

  return(
    <div className="app">
      <h1 className="headTitle">Giphy Show</h1>
      <Form gifSearch = {getGif} /><br/> <br/> 
      <GifDisplay gif = {gifImg}/><br/> <br/> 
      <Random giphy={getGiphy} handleClick={handleClick} /> <br/> <br/> 
      <RandomDisplay giphy={Images} /> 
      {/* <Favorite list={array} addGif= {addGif} deleteGif = {deleteGif}/> */}
    </div>
   
  );
// const [array, setArray] = useState([]);
// const addGif = () => {
//   console.log("got it");
//   setArray(oldArray => [...oldArray, gif])
// }

// const deleteGif = (e) =>{
//   const title = e.target.getAttribute("title")
//   setArray(array.filter(item => item.Title !== title)
// )}

}

export default App;