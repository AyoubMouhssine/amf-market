import React, { useEffect, useState } from "react";
import HeaderSeller from "../Header-Seller/index";
import MenuSeller from "../Menu-Seller/index";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardSeller from "../Dashboard";
import { axios, isAuthenticated } from "../../../lib/axios";
import AuthVendeur from "../../../lib/helpers/AuthVendeur";

function index() {

  return (
    <>
      <div>
        <MenuSeller />
        <div>
          <Outlet />
        </div>
      </div>
      <HeaderSeller />
      <DashboardSeller />
    </>
  );
}

export default index;
