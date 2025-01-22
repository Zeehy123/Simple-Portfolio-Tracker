import React, { useState } from "react";
import axios from "../axiosInstance";
import "./AddStock.css";
const AddStock = () => {
  const [formData, setFormData] = useState({
    name: "",
    ticker: "",
    quantity: "",
    buy_price: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      name: formData.name,
      ticker: formData.ticker,
      quantity: formData.quantity,
      buy_price: formData.buy_price,
    };

    axios
      .post("http://127.0.0.1:8000/api/stocks/", dataToSend, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Stock added:", response.data);
        setFormData({
          name: "",
          ticker: "",
          quantity: "",
          buyPrice: "",
        });
      })
      .catch((error) => {
        console.error(
          "Error adding stock:",
          error.response?.data || error.message
        );
      });
  };

  return (
    <div className="add-stock-form">
      <h2>Add New Stock</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Stock added successfully!</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Stock Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Stock Ticket:</label>
          <input
            type="text"
            name="ticker"
            value={formData.ticker}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Buy Price:</label>
          <input
            type="number"
            name="buy_price"
            value={formData.buy_price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="create-button">
          Create
        </button>
      </form>
    </div>
  );
};

export default AddStock;
