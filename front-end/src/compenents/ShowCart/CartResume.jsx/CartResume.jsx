import React from "react";
import { useSelector } from "react-redux";
import "./cartresume.css";
const OrderDetails = ({ totalPrice, handleCommande }) => {

  return (
    <div className="order-details">
      <h3>Order Details</h3>
      <p>Total Price: ${totalPrice}</p>
      <button type="button" onClick={handleCommande}>Commander ({totalPrice})</button>
    </div>
  );
};

export default OrderDetails;
