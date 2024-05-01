import { axios } from "../../lib/axios.jsx";
import React, { useEffect, useLayoutEffect, useState } from "react";
import "./product-detail.css";
import Header from "../Header";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Produit from "../Produit";
import Review from "../Review/Review.jsx";
import AddReviewForm from "../AddReviewForm/AddReviewForm.jsx";
import { fetchProduits } from "../../store/slices/produitsSlice";
import { fetchReviews, addReview } from "../../store/slices/reviewSlice";
import { addItem } from "../../store/slices/cartSlice.jsx";
import Carousel from "../Carousel/index.jsx";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [hasReviewed, setHasReviewed] = useState(false);
  const [produit, setProduit] = useState({});
  useEffect(() => {
    const getProduitDetails = async () => {
      const response = await axios.get(`/produits/${id}`);

      setProduit(response.data.produit);
    };
    getProduitDetails();

    const checkUserReview = async () => {
      const currentUser = JSON.parse(sessionStorage.getItem("current_user"));
      const token = sessionStorage.getItem("auth_token");
      if (currentUser && token) {
        try {
          const response = await axios.get(
            `/produits/${id}/reviews/user/${currentUser.user.userId}`,
            {
              withCredentials: true,
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setHasReviewed(response.data.data.length > 0);
        } catch (err) {
          console.error(err);
        }
      }
    };
    checkUserReview();

    dispatch(fetchProduits({}));
    dispatch(fetchReviews(id));
  }, [id, dispatch]);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { reviews, loading, error } = useSelector((state) => state.reviews);
  const { produits } = useSelector((state) => state.produits);
  const currentUser = JSON.parse(sessionStorage.getItem("current_user"));

  const handleAddReview = async (review) => {
    try {
      const response = await axios.post(
        `/produits/${id}/reviews`,
        {
          user_userId: currentUser.user.userId,
          ...review,
        },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("auth_token")}`,
          },
        }
      );
      setHasReviewed(true);
      dispatch(addReview(response.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useLayoutEffect(() => {}, [id]);
  // console.log();
  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="product-detail-container">
            <div className="product-detail-image">
              {produit && produit.medias && produit.medias.length > 0 && (
                <Carousel
                  withIndicator={false}
                  time={4000}
                  images={produit.medias}
                  height={"400px"}
                />
              )}
            </div>
            <div className="product-detail-info">
              <div className="product-detail-title">{produit?.nom}</div>
              <div className="product-detail-price">
                <span className="price">{produit?.prix} dh</span>
              </div>
              <div className="product-detail-status">
                {produit?.stock > 0 ? "In Stock" : "out of stock"}
              </div>
              <div className="product-detail-description">
                <p>{produit?.description}</p>
              </div>

              <div className="product-detail-quantity">
                <button
                  type="button"
                  onClick={() => dispatch(addItem(produit))}
                >
                  Add Cart
                </button>
              </div>
            </div>
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
          <div className="reviews-container">
            {isAuthenticated ? (
              <>
                {hasReviewed ? (
                  <h2 style={{ textAlign: "center" }}>
                    You have already reviewed this product.
                  </h2>
                ) : (
                  <AddReviewForm onAddReview={handleAddReview} />
                )}
              </>
            ) : (
              <h2 style={{ textAlign: "center" }}>
                Espace avis réservé aux utilisateurs connectés
              </h2>
            )}
            <h2>Reviews</h2>
            <div className="reviews-list">
              {reviews.map((review) => (
                <Review key={review.reviewId} review={review} />
              ))}
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default ProductDetail;
