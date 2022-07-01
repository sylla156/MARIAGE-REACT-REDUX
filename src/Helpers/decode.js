import jwtDecode from "jwt-decode";

const decode = (token) => {
  const decoded = jwtDecode(token);
  return decoded;
};

export default decode;
