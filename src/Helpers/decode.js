import jwtDecode from "jwt-decode";

const decode = (token) => {
  const decoded = jwtDecode(token);
  return decoded;
};
const premier = false;
if (typeof premier === false){
  console.log('premier');
}
console.log(premier);
export default decode;
