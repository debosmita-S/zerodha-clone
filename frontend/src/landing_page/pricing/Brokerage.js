import React, { useState } from "react";
import "./Brokerage.css";
// // optional custom styles

function Brokerage() {
  const [activeTab, setActiveTab] = useState("equity");

  const renderTable = () => {
    if (activeTab === "equity") {
      return (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th></th>
              <th>Equity delivery</th>
              <th>Equity intraday</th>
              <th>F&O - Futures</th>
              <th>F&O - Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brokerage</td>
              <td>Zero Brokerage</td>
              <td>0.03% or ₹20/executed order</td>
              <td>0.03% or ₹20/executed order</td>
              <td>Flat ₹20 per executed order</td>
            </tr>
            <tr>
              <td>STT/CTT</td>
              <td>0.1% on buy & sell</td>
              <td>0.025% on the sell side</td>
              <td>0.02% on the sell side</td>
              <td>
                <ul>
                  <li>0.125% of intrinsic value (exercised)</li>
                  <li>0.1% on sell side (on premium)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Transaction charges</td>
              <td>NSE: 0.00297%, BSE: 0.00375%</td>
              <td>NSE: 0.00297%, BSE: 0.00375%</td>
              <td>NSE: 0.00173%, BSE: 0</td>
              <td>NSE: 0.03503%, BSE: 0.0325%</td>
            </tr>
            <tr>
              <td>GST</td>
              <td colSpan="4">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>
            <tr>
              <td>SEBI charges</td>
              <td colSpan="4">₹10 / crore</td>
            </tr>
            <tr>
              <td>Stamp charges</td>
              <td>0.015% or ₹1500 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      );
    } else if (activeTab === "currency") {
      return (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th></th>
              <th>Currency futures</th>
              <th>Currency options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brokerage</td>
              <td>0.03% or ₹20/executed order</td>
              <td>₹20/executed order</td>
            </tr>
            <tr>
              <td>STT/CTT</td>
              <td>No STT</td>
              <td>No STT</td>
            </tr>
            <tr>
              <td>Transaction charges</td>
              <td>NSE: 0.00035%, BSE: 0.00045%</td>
              <td>NSE: 0.0311%, BSE: 0.001%</td>
            </tr>
            <tr>
              <td>GST</td>
              <td colSpan="2">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>
            <tr>
              <td>SEBI charges</td>
              <td colSpan="2">₹10 / crore</td>
            </tr>
            <tr>
              <td>Stamp charges</td>
              <td>0.0001% or ₹10 / crore on buy side</td>
              <td>0.0001% or ₹10 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      );
    } else {
      return (
        <p className="mt-3 text-muted">
          Commodity pricing data will go here...
        </p>
      );
    }
  };

  return (
    <div className="container mt-5">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "equity" ? "active" : ""}`}
            onClick={() => setActiveTab("equity")}
          >
            Equity
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "currency" ? "active" : ""}`}
            onClick={() => setActiveTab("currency")}
          >
            Currency
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "commodity" ? "active" : ""}`}
            onClick={() => setActiveTab("commodity")}
          >
            Commodity
          </button>
        </li>
      </ul>

      {renderTable()}
    </div>
  );
}

export default Brokerage;
