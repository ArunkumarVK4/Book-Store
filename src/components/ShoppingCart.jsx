import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShoppingCart = ({ cart, removeFromCart }) => (
  <div>
    <h2>Shopping Cart</h2>
    <div style={{marginLeft:"50%" , display:"flex", width:'100px', gap:100}}>
        <h3 style={{marginTop:"0 auto"}}>Total: ${cart.reduce((total, book) => total + book.price, 0)}</h3>
    <Link to="/checkout"><button style={{width:'200px', margin:'0 auto'}}>Proceed to Checkout</button></Link>
        </div>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cart.map((book) => (
        <div key={book.id} style={{ flex: '0 0 33.33%', boxSizing: 'border-box', padding: '10px', textAlign: 'center' }}>
          {book.image && (
            <img style={{ width: "70%", height:"50%" }} src={book.image} alt="" />
          )}
          <p>{book.title}</p>
          <p>${book.price}</p>
          <button onClick={() => removeFromCart(book.id)}>Remove</button>
        </div>
      ))}
    </div>
        
  </div>
);

export default ShoppingCart;
