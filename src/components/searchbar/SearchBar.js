import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <h1>Download High Quality Images by creators</h1>
      <div className="search-input">
        <input
          type="text"
          placeholder="Search for photos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
