import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearch = () => {
      onSearch(searchTerm);
  };

  return (
    <div style={{marginLeft:"40%"}}>
      <input
      style={{padding:"10px", width:"40%", margin:"10px"}}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search books..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
