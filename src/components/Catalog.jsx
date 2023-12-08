import React, { useState } from 'react';
import Book from './Book';
import SearchBar from './SearchBar';
import { useEffect } from 'react';

const Catalog = ({ mockBooks, addToCart }) => {
  const [filteredBooks, setFilteredBooks] = useState(mockBooks);

  // console.log(mockBooks) 
  // console.log(filteredBooks)
  
  useEffect(() => {
    setFilteredBooks(mockBooks);
  }, [mockBooks]);
 

  const handleSearch = (searchTerm) => {
    const filtered = mockBooks.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <>
      <SearchBar  onSearch={handleSearch} />
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {filteredBooks.map((book) => (
        <Book key={book.id} book={book} addToCart={addToCart} />
      ))}
    </div>
    </>
  );
};

export default Catalog;
