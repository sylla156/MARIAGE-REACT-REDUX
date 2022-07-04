import axios from "axios";
const Events = async (email, password) => {
  const URL = process.env.REACT_APP_APIURL + process.env.REACT_APP_EVENTS;
  const request = await axios.get(URL);
  return request;
};

export default Events;
