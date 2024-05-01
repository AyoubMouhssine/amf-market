import React from "react";
import ProductDetail from "./compenents/Product-Detail";
import { Route, Routes } from "react-router-dom";
import RegisterSeller from "./compenents/Seller/Seller-Auth/register.jsx";
import RegisterUser from "./compenents/User/register.jsx";
import LoginSeller from "./compenents/Seller/Seller-Auth/login.jsx";
import LoginUser from "./compenents/User/login.jsx";
import CreateStore from "./compenents/Seller/Seller-Auth/createStore.jsx";
import Layout from "./compenents/Layout";
import CreateProduct from "./compenents/Seller/Seller-Product/CreateProduct";
import Layoyt from "./compenents/Seller/Layout";
import DashboardSeller from "./compenents/Seller/Dashboard";
import Produits from "./pages/Produits.jsx";
import SearchResults from "./compenents/SearchResults/SearchResults.jsx";
import ShowCart from "./compenents/ShowCart/ShowCart.jsx";
import UserProfile from "./compenents/User/Dashboard-User/UserProfile.jsx";
import EditUserInfo from "./compenents/User/Dashboard-User/EditUserInfo.jsx";
import OrderHistory from "./compenents/User/Dashboard-User/OrderHistory.jsx";
import ShowitemsOrdered from "./compenents/User/Dashboard-User/ShowitemsOrdered.jsx";
import AdminDashboard from "./compenents/Admin/AdminDashboard.jsx";
import SellerProfile from "./compenents/Seller/Seller-Auth/SellerProfile.jsx";
import EditSellerInfo from "./compenents/Seller/Seller-Auth/EditSellerInfo.jsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Produits />} />
        </Route>
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/profile/edit" element={<EditUserInfo />} />
        <Route path="/product/:id/detail" element={<ProductDetail />} />
        <Route path="/products" element={<SearchResults />} />
        <Route path="/user/register" element={<RegisterUser />} />
        <Route path="/vendeur/register" element={<RegisterSeller />} />
        <Route path="/user/login" element={<LoginUser />} />
        <Route path="/user/myorder" element={<OrderHistory />} />
        <Route
          path="/user/commandes/:commandeId/detail"
          element={<ShowitemsOrdered />}
        />
        <Route path="/vendeur/login" element={<LoginSeller />} />
        <Route path="/vendeur/create/store" element={<CreateStore />} />
        <Route path="/order" element={<ShowCart />} />
        <Route path="/seller" element={<Layoyt />}>
          <Route index element={<DashboardSeller />} />
          <Route path="/seller/dashboard" element={<DashboardSeller />} />
          <Route path="/seller/createproduct" element={<CreateProduct />} />
          <Route path="/seller/createstore" element={<CreateStore />} />
          <Route path="/seller/profile" element={<SellerProfile />} />
          <Route path="/seller/profile/edit" element={<EditSellerInfo />} />
        </Route>

        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
};

export default App;
