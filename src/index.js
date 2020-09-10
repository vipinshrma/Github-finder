import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/StateProvider";
import { initialState } from "./context/GithubReducer";
import reducer from "./context/GithubReducer";

ReactDOM.render(
  <GithubProvider initialState={initialState} reducer={reducer}>
    <App />
  </GithubProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
