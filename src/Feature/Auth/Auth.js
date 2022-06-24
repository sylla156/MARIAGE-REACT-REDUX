import axios from "axios";
const Auth = async (email, password) => {
  const URL = process.env.REACT_APP_APIURL + process.env.REACT_APP_PAGE_AUTH;
  const request = axios.post(URL, {
    email: email,
    password: password,
  });

  return request;
};

export default Auth;
