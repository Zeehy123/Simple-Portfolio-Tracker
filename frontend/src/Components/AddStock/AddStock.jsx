import React, { useState } from "react";
import "./AddStock.css";

const AddStock = () => {
  const [formData, setFormData] = useState({
    stockName: "",
    stockTicket: "",
    quantity: "",
    buyPrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Add your API call or functionality here
  };

  return (
    <div className="add-stock-form">
      <h2>Add New Stock</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Stock Name:</label>
          <input
            type="text"
            name="stockName"
            value={formData.stockName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Stock Ticket:</label>
          <input
            type="text"
            name="stockTicket"
            value={formData.stockTicket}
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
            name="buyPrice"
            value={formData.buyPrice}
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
