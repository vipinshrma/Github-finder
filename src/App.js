import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import dotenv from "dotenv";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import UserDetails from "./components/pages/UserDetails";

function App() {
  dotenv.config();
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/about" component={About} />
        <Route path="/userdetails/:user" component={UserDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
