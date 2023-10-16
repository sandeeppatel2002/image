import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/searchbar/SearchBar";
import PhotoList from "./components/photolist/PhotoList";

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("a");

  const UNSPLASH_API_KEY = "2OBNY9zdv1qGtUF3qGndWRd4V5Qz51SgD57YKMDOXRA";
  const UNSPLASH_API_URL = "https://api.unsplash.com";

  const fetchPhotos = async (query = "") => {
    try {
      const response = await axios.get(`${UNSPLASH_API_URL}/search/photos`, {
        params: {
          query: query,
          page: 1,
          per_page: 50,
        },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
        },
      });
      console.log(response.data.results);
      setPhotos(response.data.results);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    if (searchQuery === "") fetchPhotos();
    else fetchPhotos(searchQuery); // Always fetch based on the current search query
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <h1>Download High Quality Images by creators</h1>
      <SearchBar onSearch={handleSearch} />
      <PhotoList photos={photos} />
    </div>
  );
}

export default App;
