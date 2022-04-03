import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./component.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
const defaultState = JSON.parse(localStorage.getItem("basket")) || { cash: 0 };
const reducer = (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    case "TYPE_CREATE":
      let local = { ...defaultState, ...action.obj };
      localStorage.setItem("basket", JSON.stringify(local));
      return local;
      break;
    case "TYPE_DESTROY":
      return { ...defaultState, message: "remove" };
      break;
  }
};
const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
