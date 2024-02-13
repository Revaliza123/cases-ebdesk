// Dashboard.jsx
import React from "react";
import Sidebar from "../components/sidebar.jsx";
import Navbar from "../components/navbar.jsx";
import Chart from "../components/chart.jsx";
import Chart2 from "../components/lineChart.jsx";
import Chart3 from "../components/bulatChart.jsx";
import Chart4 from "../components/chartbar2.jsx";
import Chart5 from "../components/chartbar3.jsx";
import Chart6 from "../components/chartss.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  try {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-slate-100">
          <Navbar />
          {/* ... */}
          <div className="flex">
            <div key="chart2" className="w-1/2 p-4 ms-4 mt-4 bg-white shadow-md rounded-md mr-4">
              <Chart2 />
            </div>
            <div key="chart1" className="w-1/2 p-4 bg-white shadow-md rounded-md">
              <Chart />
            </div>
          </div>
          <div className="flex mt-5 px-8 gap-10">
            <div key="chart3" className="w-1/3 p-4 bg-white shadow-md rounded-md">
              <Chart3 />
            </div>
            <div key="chart4" className="w-1/3 p-4 bg-white shadow-md rounded-md">
              <Chart4 />
            </div>
            <div key="chart5" className="w-1/3 p-4 bg-white shadow-md rounded-md">
              <Chart />
            </div>
          </div>
          <div className="flex mt-5 px-10 gap-10">
            <div key="chart6" className="w-1/3 p-4 bg-white shadow-md rounded-md">
              <Chart />
            </div>
            <div key="chart7" className="w-1/2 p-4 bg-white shadow-md rounded-md">
              <Chart5 />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Dashboard rendering error:', error);
    return null; // or some fallback UI
  }
}
