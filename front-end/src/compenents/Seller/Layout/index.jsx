import React, { useEffect, useState } from "react";
import HeaderSeller from "../Header-Seller/index";
import { Outlet } from "react-router-dom";
import MenuSeller from "../Menu-Seller";

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
    </>
  );
}

export default index;
