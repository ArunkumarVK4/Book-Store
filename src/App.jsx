import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
import Catalog from "./components/Catalog";
import BookDetails from './components/BookDetails';

// I try to find Book Store API. But, I didn't get that. So, I use Ecommerce API. 

const App = () => {
  const [cart, setCart] = useState([]);
  const [mockBooks, setMockBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        setMockBooks(response.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);
  // console.log(mockBooks)
  
  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  alert("Book added Successfully")
// console.log(cart)
  };

  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter((book) => book.id !== bookId));
  };

  return (
    <Router>
      <div>
        <nav style={{margin:"20px", marginLeft:"60%"}}>
            <button>
              <Link to="/">Catalog</Link>
            </button>
            <button>
              <Link to="/cart">Cart Items {cart.length == 0 ? '' : cart.length}</Link>
            </button>
         
        </nav>

        <Routes>
          <Route
            path="/"
            element={<Catalog mockBooks={mockBooks} addToCart={addToCart} />}
          />
          <Route
            path="/books/:id"
            element={
              <BookDetails mockBooks={mockBooks} 
              addToCart={addToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
            }
          />
          <Route path="/checkout" element={<Checkout setCart={setCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

