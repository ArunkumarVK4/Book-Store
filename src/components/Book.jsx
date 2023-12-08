import { Link } from "react-router-dom";

const Book = ({ book, addToCart }) => (
  <div style={{ flex: "0 0 33.33%", boxSizing: "border-box", padding: "10px", textAlign: "center" }}>
    <img style={{ width: "50%" }} src={book.image} alt={book.title} />
    <h3>{book.title}</h3>
    <p>{book.author}</p>
    <p>${book.price}</p>
    <button onClick={() => addToCart(book)}>Add to Cart</button>
    <Link to={`/books/${book.id}`}>View Details</Link>
  </div>
);

export default Book;
