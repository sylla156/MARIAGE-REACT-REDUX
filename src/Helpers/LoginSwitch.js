import Cookies from "js-cookie";

const LoginSwitch = (props) => {
  let cookieToken = Cookies.get("token");
  if (cookieToken === undefined) {
    return props.home;
  } else {
    return props.app;
  }
};

export default LoginSwitch;
