import React, { useCallback, useEffect, useState } from "react";
import "./dashboard.scss";
import Sidebard from "../../Components/Sidebard/Sidebard";
import DashboardCenter from "../../Components/DashboardCenter/DashboardCenter";
import decode from "../../Helpers/decode";
import { useSelector } from "react-redux";
import Events from "../../Feature/Events/Events";
import About from "../About/About";
import Setting from "../Setting/Setting";
import Galerie from "../Galerie/Galerie";
import User from "../User/User";

const Dashboard = () => {
  const [sidebardSwitch, setsidebardSwitch] = useState("ceremonie");
  const [content, setContent] = useState(
    <DashboardCenter dashboardPosition={sidebardSwitch} />
  );
  const token = useSelector((state) => state.auth.value);

  const changeSwitch = useCallback((value) => {
    setsidebardSwitch(value);
  }, []);
  useEffect(() => {
    switch (sidebardSwitch) {
      case "tableau de bord":
        setContent();
        break;
      case "about":
        setContent(<About/>);
        break;
      case "setting":
        setContent(<Setting/>);
        break;
      case "galerie":
        setContent(<Galerie/>);
        break;
      case "user":
        setContent(<User/>);
        break;

      default:
        setContent(<DashboardCenter dashboardPosition={sidebardSwitch} />);
        break;
    }
  }, [sidebardSwitch]);

  return (
    <div className="dashboard">
      {/* sidebard left for app */}
      <Sidebard onSidebardSwitch={changeSwitch} />
      {/* dashboard center */}
      {content}
    </div>
  );
};

export default Dashboard;
