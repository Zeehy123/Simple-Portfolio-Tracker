import React, { useState } from "react";
import "./StockHolding.css";

const StockHolding = () => {
  const [stocks, setStocks] = useState([
    {
      id: 1,
      name: "Apple Inc",
      ticker: "$36.82",
      quantity: "+24.17%",
      buyPrice: "$130.25",
      currentPrice: "AAPL",
    },
    {
      id: 2,
      name: "Microsoft",
      ticker: "$74.40",
      quantity: "+24.00%",
      buyPrice: "$310.00",
      currentPrice: "MSFT",
    },
    // Add more stock data here...
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  //  edit button click
  const handleEdit = (id) => {
    const stockToEdit = stocks.find((stock) => stock.id === id);
    setEditingId(id);
    setEditData(stockToEdit);
  };

  // delete button click
  const handleDelete = (id) => {
    setStocks(stocks.filter((stock) => stock.id !== id));
  };

  // input change in the edit form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  //  save button click after editing
  const handleSave = () => {
    setStocks(
      stocks.map((stock) =>
        stock.id === editingId ? { ...stock, ...editData } : stock
      )
    );
    setEditingId(null);
  };

  return (
    <div className="stock-table-container">
      <h1 className="stock-table-title">Stock Holding Table</h1>
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
                    type="text"
                    name="quantity"
                    value={editData.quantity}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="buyPrice"
                    value={editData.buyPrice}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="currentPrice"
                    value={editData.currentPrice}
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
                <td>{stock.buyPrice}</td>
                <td>{stock.currentPrice}</td>
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
