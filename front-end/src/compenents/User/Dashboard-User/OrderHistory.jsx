import React, { useEffect, useState } from "react";
import { axios } from "../../../lib/axios";
import "./UserProfile.css";
import Header from "../../Header";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import useCheckAuth from "../../../lib/helpers/useCheckAuth";

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  useCheckAuth("user");
  const user = JSON.parse(sessionStorage.getItem("current_user")).user;
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`/user/${user.userId}/commandes`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("auth_token")}`,
          },
        });

        setOrders(response.data.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <>
      <Header />
      <div className="Order-History">
        <h1>My Orders</h1>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <table className="table-Order-History" border="1px">
            <thead>
              <tr>
                <th>Date Ordered</th>
                <th>Total Price</th>
                <th>Order Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.commandeId}>
                  <td>
                    <p>{order.date_commande}</p>
                  </td>
                  <td>
                    <p>{order.prix_total} Dhs</p>
                  </td>
                  <td>
                    <p className="statusorder">{order.status}</p>
                  </td>
                  <td className="actionDetail">
                    <Link to={`/user/commandes/${order.commandeId}/detail`}>
                      Detail
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </>
  );
}

export default OrderHistory;
