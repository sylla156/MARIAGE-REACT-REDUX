import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./App/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import LoginSwitch from "./Helpers/LoginSwitch";
import Home from "./Pages/Home/Home";



const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LoginSwitch app={<App />} home={<Home />} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
