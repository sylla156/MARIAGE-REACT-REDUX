import React, { useRef } from "react";
import "./alerts.scss";

const Alerts = (props) => {
  const alert = useRef(null);
  const handleClick = (event) => {
    const Alerts = document.querySelector(".Alerts");
    Alerts.outerHTML = "";
  };
  return (
    <div className="Alerts" ref={alert}>
      <div className={props.method}>
        <div className="img">
          <div className="img__container"></div>
        </div>
        <div className="content">
          <p className="title">{props.title}</p>
          <p className="message">{props.message}</p>
        </div>
        <div className="exit" onClick={handleClick}>
          <div className="exit__container"></div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
