import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Home from "../Pages/Home/Home";

const LoginSwitch = (props) => {
  let cookieToken = Cookies.get("token");
  if (cookieToken === undefined) {
    return props.home;
  } else {
    return props.app;
  }
};

export default LoginSwitch;
