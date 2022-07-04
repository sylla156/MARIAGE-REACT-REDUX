import React, { useCallback, useEffect, useState } from "react";
import "./dashboard.scss";
import Sidebard from "../../Components/Sidebard/Sidebard";
import DashboardCenter from "../../Components/DashboardCenter/DashboardCenter";
import decode from "../../Helpers/decode";
import { useSelector } from "react-redux";
import Events from "../../Feature/Events/Events";

const Dashboard = () => {
  const [sidebardSwitch, setsidebardSwitch] = useState("ceremonie");
  const token = useSelector(state => state.auth.value)

  const changeSwitch = useCallback(
    (value) => {
      setsidebardSwitch(value);
    },
    []
  );

  return (
    <div className="dashboard">
      {/* sidebard left for app */}
      <Sidebard onSidebardSwitch={changeSwitch} />
      {/* dashboard center */}
      <DashboardCenter dashboardPosition={sidebardSwitch}/>
    </div>
  );
};

export default Dashboard;
