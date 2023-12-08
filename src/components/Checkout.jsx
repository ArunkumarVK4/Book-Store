import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Checkout = ({setCart}) => {
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Checkout Successfully");
    setCart([])
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Checkout</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label>Name:</label>
        <input
          style={{ margin: "20px", padding: "5px", borderRadius: "3px" }}
          type="text"
          name="name"
          value={shippingInfo.name}
          onChange={handleChange}
          required

        />
        <label>Address:</label>
        <textarea
          style={{ margin: "5px", padding: "5px", borderRadius: "3px" }}
          name="address"
          value={shippingInfo.address}
          onChange={handleChange}
          required
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
