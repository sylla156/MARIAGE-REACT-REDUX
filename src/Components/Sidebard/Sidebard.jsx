import React, { useCallback, useEffect, useRef } from "react";
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

const Sidebard = (props) => {
  const dashboardSwitch = useCallback(
    (value) => {
      props.onSidebardSwitch(value)
    },
    [],
  )
  
  return (
    <div className="dashboard__sidebard">
      <div className="logo">
        <img src={logo} alt="logo of app" />
      </div>
      <DashboardTitle onDashboardChange={dashboardSwitch} img={dh} title="tableau de bord" position='tableau'/>
      <p className="subtitle">
        <span>ceremonie</span>
      </p>
      <DashboardTitle onDashboardChange={dashboardSwitch} img={cr} title="ceremonie religieuse" position='religieuse' />
      <DashboardTitle onDashboardChange={dashboardSwitch} img={crc} title="ceremonie civile" position='civile'/>
      <DashboardTitle onDashboardChange={dashboardSwitch} img={crc} title="diner gala soiree civile" position='soiree' />
      <DashboardTitle onDashboardChange={dashboardSwitch} img={dgj} title="diner gala pour jeunes" position='jeunes' />
      <DashboardTitle onDashboardChange={dashboardSwitch} img={brunch} title="brunch" position='brunch' />

      <div className="divise"></div>
      <p className="subtitle">
        <span>SITE INTERNET</span>
      </p>
      <DashboardTitle onDashboardChange={dashboardSwitch} img={about} title="A propos de nous" position='about'/>
      <DashboardTitle onDashboardChange={dashboardSwitch} img={setting} title="information" position='setting' />
      <DashboardTitle onDashboardChange={dashboardSwitch} img={galerie} title="galerie photo" position='galerie'/>
      <DashboardTitle onDashboardChange={dashboardSwitch} img={user} title="Administrateurs" position='user' />

      <div className="footer">
        <span>Powered by</span> <img src={novate} alt="entreprise" />
      </div>
    </div>
  );
};

const DashboardTitle = (props) => {
  const select = useRef();
  const handleClick = useCallback(() => {
    const AllSelect = Array.from( document.querySelectorAll(".table"));
    AllSelect.forEach((select) => select.classList.remove("tableActive"));
    select.current.classList.add("tableActive");
    //upload 
    props.onDashboardChange(props.position);
  }, [select]);
  return (
    <div className="table" onClick={handleClick} ref={select}>
      <img src={props.img} alt="tableau de title" />
      <span>{props.title}</span>
    </div>
  );
};

export default Sidebard;
