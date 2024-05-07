import React, { useEffect, useState } from "react";
import HeaderSeller from "../Header-Seller/index";
import { Outlet } from "react-router-dom";
import MenuAdmin from "../../Admin/MenuAdmin";

function index() {
  return (
    <>
      <div>
        <MenuAdmin />
        <div>
          <Outlet />
        </div>
      </div>
      <HeaderSeller />
    </>
  );
}

export default index;
