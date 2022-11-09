import React, { useState, useEffect } from "react";

import ArtistCard from "./components/ArtistCard";
import "./style.css";

const API_URL = "http://www.omdbapi.com?apikey=1792d045";

const album1 = {
  "Title": "Wyclef Jean: All Star Jam at Carnegie Hall",
  "Year": "2004",
  "imdbID": "tt0960885",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2OTAyODk3MF5BMl5BanBnXkFtZTgwMTE3MTA2MDE@._V1_SX300.jpg"
}
const App = () => {
  const [albums, setAlbums] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchAlbums = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setAlbums(data.Search);
  }
  useEffect(() => {
    searchAlbums('wyclef');
  }, [])
  return (
    <div className="app">
      <h1>My MusicBox</h1>
      <div className="search">
        <input placeholder="Search for Albums"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input id="sub" type="submit"
          value="Search"
          onClick={() => searchAlbums(searchTerm)} />
      </div>
      {
        albums?.length > 0
          ? (
            <div className="container">
              {albums.map((album) => (
                <ArtistCard album={album} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No albums found</h2>
            </div>
          )
      }

    </div>

  );
}





export default App; 