import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem/CartItem";
import { axios } from "../../lib/axios";
import {
  clearCart,
  selectCartItems,
  selectCartTotalPrice,
} from "../../store/slices/cartSlice";
import "./showcart.css";
import Header from "../Header";
import Footer from "../Footer";
import OrderDetails from "./CartResume.jsx/CartResume";
import { fetchProduits } from "../../store/slices/produitsSlice";
import Produit from "../Produit";
import { useNavigate } from "react-router-dom";
const ShowCart = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const { produits } = useSelector((state) => state.produits);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(fetchProduits({ page: 1 }));
  }, [dispatch]);

  const handleCommande = async () => {
    if (!isAuthenticated) {
      alert("Connectez-vous d'abord pour passer votre commande ! 😉");
      return;
    }

    const confirmation = window.confirm(
      "Voulez-vous vraiment passer la commande?"
    );
    if (!confirmation) {
      return;
    }
    try {
      const response = await axios.post(
        "/commandes",
        {
          user_userId: JSON.parse(sessionStorage.getItem("current_user")).user
            .userId,
          prix_total: totalPrice,
          cartItems: cartItems,
        },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("auth_token")}`,
          },
        }
      );
      alert("Commande passée avec succès! 🎉");
      dispatch(clearCart());
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Header />
      <div className="show-cart-container">
        <div className="show-cart">
          <h3>My Cart</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
              <OrderDetails
                totalPrice={totalPrice}
                handleCommande={handleCommande}
              />
            </div>
          )}
        </div>
        <div className="related-products">
          <h2>Products</h2>
          <div className="products-list">
            {produits.map((product) => (
              <Produit
                key={product.id}
                images={product.medias}
                title={product.nom}
                price={product.prix}
                link={`/product/${product.id}/detail`}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShowCart;
