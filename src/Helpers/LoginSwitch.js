import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Home from "../Pages/Home/Home";

const LoginSwitch = (props) => {
  const token = useSelector((state) => state.auth.value);
  if (typeof token === "number") {
    return props.home;
  } else if (typeof token === "object") {
    return props.app;
  }
};

export default LoginSwitch;
