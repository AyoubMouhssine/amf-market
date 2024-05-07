import React from "react";
import { Outlet } from "react-router-dom";
import MenuAdmin from "../MenuAdmin";
import HeaderAdmin from "../HeaderAdmin/index";
import "./adminlayout.css";
function AdminLayout() {
  return (
    <>
      <div>
        <MenuAdmin />
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
      <HeaderAdmin />
    </>
  );
}

export default AdminLayout;
