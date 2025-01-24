import React, { useState, useEffect } from "react";
import axios from "../axiosInstance";
import "./StockHolding.css";

const StockHolding = () => {
  const [stocks, setStocks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [error, setError] = useState(null);

  // Fetch stocks from the API
  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get("/api/stocks/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setStocks(response.data);
      } catch (err) {
        console.error("Error fetching stocks:", err);
        setError("Failed to load stock data. Please try again.");
      }
    };

    fetchStocks();
  }, []);

  const handleEdit = (id) => {
    const stockToEdit = stocks.find((stock) => stock.id === id);
    setEditingId(id);
    setEditData(stockToEdit);
  };

  const handleDelete = async (id) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      await axios.delete(`/api/stocks/${id}/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setStocks(stocks.filter((stock) => stock.id !== id));
    } catch (err) {
      console.error("Error deleting stock:", err);
      setError("Failed to delete stock. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      await axios.put(`/api/stocks/${editingId}/`, editData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setStocks(
        stocks.map((stock) =>
          stock.id === editingId ? { ...stock, ...editData } : stock
        )
      );
      setEditingId(null);
    } catch (err) {
      console.error("Error updating stock:", err);
      setError("Failed to save changes. Please try again.");
    }
  };

  return (
    <div className="stock-table-container">
      <h1 className="stock-table-title">Stock Holding Table</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <table className="stock-table">
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Ticker</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Current Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) =>
            editingId === stock.id ? (
              <tr key={stock.id}>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="ticker"
                    value={editData.ticker}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="quantity"
                    value={editData.quantity}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="buy_price"
                    value={editData.buy_price}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="current_price"
                    value={editData.current_price}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <button onClick={handleSave}>Save</button>
                </td>
              </tr>
            ) : (
              <tr key={stock.id}>
                <td>{stock.name}</td>
                <td>{stock.ticker}</td>
                <td>{stock.quantity}</td>
                <td>${stock.buy_price}</td>
                <td>${stock.current_price}</td>
                <td>
                  <button
                    className="stock-btn"
                    onClick={() => handleEdit(stock.id)}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDelete(stock.id)}>Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StockHolding;
