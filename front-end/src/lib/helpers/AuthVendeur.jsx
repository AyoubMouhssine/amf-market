import React from "react";
import { axios, isAuthenticated } from "../axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const AuthVendeur = () => {
  const [vendeur, setVendeur] = useState({});
  const navigate = useNavigate();

  const getUser = async () => {
    const response = await axios.get("/vendeur", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("auth_token")}`,
      },
    });

    const { vendeur } = response.data.data;
    setVendeur(vendeur);
  };

  useEffect(() => {
    const authStatus = isAuthenticated();
    if (!authStatus) navigate("/vondeur/login");

    getUser();
  }, []);

  return [vendeur, setVendeur];
};

export default AuthVendeur;
