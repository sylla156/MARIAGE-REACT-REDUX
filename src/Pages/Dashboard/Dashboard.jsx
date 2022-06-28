import React from "react";
import "./dashboard.scss";
import logo from "../../Assets/img/logo.png";
import dh from "../../Assets/img/dh.png";
import brunch from "../../Assets/img/brunch.png";
import about from "../../Assets/img/about.png";
import crc from "../../Assets/img/crc.png";
import cr from "../../Assets/img/cr.png";
import dgj from "../../Assets/img/dgj.png";
import galerie from "../../Assets/img/Galerie.png";
import setting from "../../Assets/img/setting.png";
import user from "../../Assets/img/user.png";
import novate from '../../Assets/img/novate.png';
const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* sidebard left for app */}
      <div className="dashboard__sidebard">
        <div className="logo">
          <img src={logo} alt="logo of app" />
        </div>
        <DashboardTitle img={dh} title="tableau de bord"/>
        <p className="subtitle">
          <span>ceremonie</span>
        </p>
        <DashboardTitle img={cr} title="ceremonie religieuse"/>
        <DashboardTitle img={crc} title="ceremonie civile"/>
        <DashboardTitle img={crc} title="diner gala soiree civile"/>
        <DashboardTitle img={dgj} title="diner gala pour jeunes"/>
        <DashboardTitle img={brunch} title="brunch"/>

        <div className="divise"></div>
        <p className="subtitle">
          <span>SITE INTERNET</span>
        </p>
        <DashboardTitle img={about} title="A propos de nous"/>
        <DashboardTitle img={setting} title="information"/>
        <DashboardTitle img={galerie} title="galerie photo"/>
        <DashboardTitle img={user} title="Administrateurs"/>

        <div className="footer">
          <span>Powered by</span> <img src={novate} alt="entreprise" />
        </div>
      </div>

      <div className="dashboard__center">
        {/* navbar top por setting et search of app */}
        <div className="dashboard__center--navbar"></div>

        {/* where the data will be represente  */}
        <div className="dashboard__center--data"></div>
      </div>
    </div>
  );
};

const DashboardTitle = (props) => {
  return (
    <div className="table">
      <img src={props.img} alt="tableau de title" />
      <span>{props.title}</span>
    </div>
  );
};
export default Dashboard;
