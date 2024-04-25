import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementCartItemQuantity,
  incrementCartItemQuantity,
  removeItem,
} from "../../../store/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeItem(item.id));
  };

  return (
    <li className="cart-item">
      <img
        src={item.medias.length > 0 ? item.medias[0].image : "text.jpg"}
        alt={item.name}
      />
      <div className="cart-item-details">
        <h4>{item.nom}</h4>
        <p>${item.prix}</p>
      </div>
      <div className="cart-item-quantity">
        <button
          type="button"
          onClick={() => dispatch(decrementCartItemQuantity(item.id))}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          type="button"
          onClick={() => dispatch(incrementCartItemQuantity(item.id))}
        >
          +
        </button>
      </div>
      <button type="button" onClick={() => handleRemoveFromCart(item.id)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;
