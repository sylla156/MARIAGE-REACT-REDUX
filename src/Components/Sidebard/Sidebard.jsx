import React from "react";
import "./sidebard.scss";
import logo from "../../Assets/img/Icons/logo.png";
import dh from "../../Assets/img/Icons/dh.png";
import brunch from "../../Assets/img/Icons/brunch.png";
import about from "../../Assets/img/Icons/about.png";
import crc from "../../Assets/img/Icons/crc.png";
import cr from "../../Assets/img/Icons/cr.png";
import dgj from "../../Assets/img/Icons/dgj.png";
import galerie from "../../Assets/img/Icons/Galerie.png";
import setting from "../../Assets/img/Icons/setting.png";
import user from "../../Assets/img/Icons/user.png";
import novate from "../../Assets/img/Icons/novate.png";

const Sidebard = () => {
  return (
    <div className="dashboard__sidebard">
      <div className="logo">
        <img src={logo} alt="logo of app" />
      </div>
      <DashboardTitle img={dh} title="tableau de bord" />
      <p className="subtitle">
        <span>ceremonie</span>
      </p>
      <DashboardTitle img={cr} title="ceremonie religieuse" />
      <DashboardTitle img={crc} title="ceremonie civile" />
      <DashboardTitle img={crc} title="diner gala soiree civile" />
      <DashboardTitle img={dgj} title="diner gala pour jeunes" />
      <DashboardTitle img={brunch} title="brunch" />

      <div className="divise"></div>
      <p className="subtitle">
        <span>SITE INTERNET</span>
      </p>
      <DashboardTitle img={about} title="A propos de nous" />
      <DashboardTitle img={setting} title="information" />
      <DashboardTitle img={galerie} title="galerie photo" />
      <DashboardTitle img={user} title="Administrateurs" />

      <div className="footer">
        <span>Powered by</span> <img src={novate} alt="entreprise" />
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

export default Sidebard;
