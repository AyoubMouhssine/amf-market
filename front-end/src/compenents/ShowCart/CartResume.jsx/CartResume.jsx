import React from "react";
import { useSelector } from "react-redux";
import { selectCartTotalPrice } from "../../../store/slices/cartSlice";

const OrderDetails = () => {
  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <div className="order-details">
      <h3>Order Details</h3>
      <p>Total Price: ${totalPrice}</p>
      <button>Commander ({totalPrice})</button>
    </div>
  );
};

export default OrderDetails;
