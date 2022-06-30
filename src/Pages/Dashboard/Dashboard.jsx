import React from "react";
import "./dashboard.scss";
import Sidebard from "../../Components/Sidebard/Sidebard";
import DashboardCenter from "../../Components/DashboardCenter/DashboardCenter";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* sidebard left for app */}
      <Sidebard/>
      {/* dashboard center */}
      <DashboardCenter />
    </div>
  );
};

export default Dashboard;
