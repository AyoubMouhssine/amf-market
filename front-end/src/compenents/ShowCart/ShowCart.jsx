import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem/CartItem";
import { selectCartItems } from "../../store/slices/cartSlice";
import "./showcart.css";
import Header from "../Header";
import Footer from "../Footer";
import OrderDetails from "./CartResume.jsx/CartResume";
import useCheckAuth from "../../lib/helpers/useCheckAuth";
const ShowCart = () => {
  const user = useCheckAuth("user");
  const cartItems = useSelector(selectCartItems);

  return (
    <>
      <Header />
      <div className="show-cart-container">
        <div className="show-cart">
          <h3>My Cart</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
              <OrderDetails />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShowCart;
