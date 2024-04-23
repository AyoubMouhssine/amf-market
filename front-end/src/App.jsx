import React from "react";
//
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
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Produits />} />
          <Route path="/product/:id/detail" element={<ProductDetail />} />
        </Route>
        <Route path="/user/register" element={<RegisterUser />} />
        <Route path="/vondeur/register" element={<RegisterSeller />} />
        <Route path="/user/login" element={<LoginUser />} />
        <Route path="/vondeur/login" element={<LoginSeller />} />
        <Route path="/vondeur/create/store" element={<CreateStore />} />
        <Route path="/seller" element={<Layoyt />}>
          <Route index element={<DashboardSeller />} />
          <Route path="/seller/dashboard" element={<DashboardSeller />} />
          <Route path="/seller/createproduct" element={<CreateProduct />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
