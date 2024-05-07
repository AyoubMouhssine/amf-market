import React, { useEffect, useState } from "react";
import { axios } from "../../../lib/axios";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import "./Statistics.css";
Chart.register(
  BarElement,
  ArcElement,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);
const Statistics = () => {
  const [statistics, setStatistics] = useState(null);
  const [salesData, setSalesData] = useState(null);

  useEffect(() => {
    fetchStatistics();
    fetchSalesData();
  }, []);

  const fetchSalesData = async () => {
    try {
      const response = await axios.get("/dashboard/sales");
      setSalesData(response.data);
    } catch (error) {
      console.error("Error fetching sales data:", error);
    }
  };

  const fetchStatistics = async () => {
    try {
      const response = await axios.get("/dashboard/statistics");
      setStatistics(response.data);
    } catch (error) {
      console.error("Error fetching statistics:", error);
    }
  };

  return (
    <div className="statistics">
      {statistics && salesData && (
        <div className="charts">
          <div className="chart">
            <h3>Total Achats Par Jour</h3>
            <div>
              <Line
                title="Total Achat"
                data={{
                  labels: salesData.labels,
                  datasets: [
                    {
                      label: "Total Sales",
                      data: salesData.data,
                      fill: false,
                      borderColor: "rgba(75, 192, 192, 1)",
                      tension: 0.1,
                    },
                  ],
                }}
                options={{
                  scales: {
                    x: {
                      type: "category",
                    },
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="chart">
            <h3>Total Users, Stores, Vendors, and Achats</h3>
            <Bar
              data={{
                // labels: ["Users", "Stores", "Vendors", "Total Sales ($)"],
                labels: ["Users", "Stores", "Vendors"],
                datasets: [
                  {
                    label: "Count",
                    data: [
                      statistics.total_users,
                      statistics.total_stores,
                      statistics.total_vendeurs,
                      // statistics.total_sales,
                    ],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.6)",
                      "rgba(54, 162, 235, 0.6)",
                      "rgba(255, 159, 64, 0.6)",
                      // "rgba(153, 102, 255, 0.6)",
                    ],
                  },
                ],
              }}
            />
          </div>
          <div className="chart">
            <h3>Total Products per Store</h3>
            <Bar
              data={{
                labels: Object.keys(statistics.products_per_store),
                datasets: [
                  {
                    label: "Total Products",
                    data: Object.values(statistics.products_per_store),
                    backgroundColor: "rgba(75, 192, 192, 0.6)",
                  },
                ],
              }}
            />
          </div>

          <div className="chart">
            <h3>Total Commandes per User</h3>
            <Bar
              data={{
                labels: statistics.commands_per_user.map(
                  (user) => user.full_name
                ),
                datasets: [
                  {
                    label: "Total Commands",
                    data: statistics.commands_per_user.map(
                      (user) => user.total_commands
                    ),
                    backgroundColor: "rgba(255, 99, 132, 0.6)",
                  },
                ],
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
