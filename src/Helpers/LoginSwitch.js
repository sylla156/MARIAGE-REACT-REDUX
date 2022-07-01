import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { login } from "../Feature/Auth/AuthSlice";

const LoginSwitch = (props) => {
  let token = Cookies.get("token");
  const dispatch = useDispatch()
  if (token === undefined) {
    return props.home;
  } else {
    dispatch(login({token}));
    return props.app;
  }
};

export default LoginSwitch;
