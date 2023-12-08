import { Link, useParams } from "react-router-dom";

const BookDetails = ({ mockBooks, addToCart }) => {
    const { id } = useParams();
    const book = mockBooks.find((book) => book.id.toString() === id);
    
    // console.log(mockBooks)
    const handleAddToCart = () => {
      addToCart(book);
      alert('Book added to cart!');
    };
  
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2>{book.title}</h2>
        <img style={{width:"200px"}} src={book.image} alt={book.title} />
        <p>{book.author}</p>
        <p>${book.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <Link to="/">Back to Catalog</Link>
      </div>
    );
  };
  

  export default BookDetails
