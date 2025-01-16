import React from "react";

const StockTable = ({ data }) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#e8f7fc",
          borderRadius: "5px",
        }}
      >
        <thead>
          <tr>
            <th style={styles.headerS}>Stock Symbol</th>
            <th style={styles.headerS}>Price Change</th>
            <th style={styles.headerS}>Percentage Change</th>
            <th style={styles.headerS}>Current Price</th>
            <th style={styles.headerS}>Ticker</th>
          </tr>
        </thead>
        <tbody>
          {data.map((stock, index) => (
            <tr
              key={index}
              style={index % 2 === 0 ? styles.evenRow : styles.oddRow}
            >
              <td style={styles.cell}>{stock.name}</td>
              <td style={styles.cell}>#{stock.priceChange.toFixed(2)}</td>
              <td style={styles.cell}>{stock.percentageChange.toFixed(2)}%</td>
              <td style={styles.cell}>#{stock.currentPrice.toFixed(2)}</td>
              <td style={styles.cell}>{stock.ticker}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  headerS: {
    backgroundColor: "#272b3b",
    color: "#ffff",
    padding: "10px",
    textAlign: "left",
    border: "1px solid #ccc",
  },
  cell: {
    padding: "10px",
    border: "1px solid #ccc",
  },
  evenRow: {
    backgroundColor: "#f8fcfe",
  },
  oddRow: {
    backgroundColor: "#ffffff",
  },
};

export default StockTable;
