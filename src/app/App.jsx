import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import Counter from "../features/Counter";

import ROUTES from "./routes";
import "./App.css";

export default function App() {
  return (
    <Router>
      <header>
        <img src={reactLogo} className="logo" />
        <img src={viteLogo} className="logo" />
      </header>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.firstRoute()} activeclassname="active">
              Route_1
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.secondRoute()} activeclassname="active">
              Route_2
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.thirdRoute()} activeclassname="active">
              Route_3
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="" element={<Route_Default />} />
        <Route path="/route_1/*" element={<Route_1 />} />
        <Route path="/route_2/*" element={<Route_2 />} />
        <Route path="/route_3/*" element={<Route_3 />} />
      </Routes>
    </Router>
  );
}

function Route_Default() {
  return (
    <React.Fragment>
      <h1>Default Route</h1>
      <Counter />
    </React.Fragment>
  );
}

function Route_1() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="" element={<h1>Route 1</h1>} />
        <Route path="subroute" element={<h1>Route 1 SUBROUTE</h1>} />
      </Routes>
    </React.Fragment>
  );
}

function Route_2() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="" element={<h1>Route 2</h1>} />
        <Route path="subroute" element={<h1>Route 2 SUBROUTE</h1>} />
      </Routes>
    </React.Fragment>
  );
}

function Route_3() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="" element={<h1>Route 3</h1>} />
        <Route path="subroute" element={<h1>Route 3 SUBROUTE</h1>} />
      </Routes>
    </React.Fragment>
  );
}
