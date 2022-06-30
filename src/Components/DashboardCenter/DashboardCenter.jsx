import React from "react";
import DashboardCenterData from "../DashboardCenterData/DashboardCenterData";
import Navbar from "../Navbar/Navbar";
import "./dashboardCenter.scss";

const DashboardCenter = () => {
  return (
    <div className="dashboard__center">
      {/* navbar top por setting et search of app */}
      <Navbar />
      {/* where the data will be represente  */}
      <DashboardCenterData />
    </div>
  );
};

export default DashboardCenter;
