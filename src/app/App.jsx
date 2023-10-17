import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import viteLogo from '../../vite.svg';
import reactLogo from '../assets/react.svg';

import Counter from '../features/Counter';

import ROUTES from './routes';
import './App.css';

export default function App() {
  return (
    <Router>
      <header>
        <h1>React + Vite</h1>
        <img src={reactLogo} alt="react logo" className="logo" />
        <img src={viteLogo} alt="vite logo" className="logo" />
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
        <Route path="" element={<RouteDefault />} />
        <Route path="/route_1/*" element={<Route1 />} />
        <Route path="/route_2/*" element={<Route2 />} />
        <Route path="/route_3/*" element={<Route3 />} />
      </Routes>
    </Router>
  );
}

function RouteDefault() {
  return (
    <>
      <h1>Default Route</h1>
      <Counter />
    </>
  );
}

function Route1() {
  return (
    <Routes>
      <Route path="" element={<h1>Route 1</h1>} />
      <Route path="subroute" element={<h1>Route 1 SUBROUTE</h1>} />
    </Routes>
  );
}

function Route2() {
  return (
    <Routes>
      <Route path="" element={<h1>Route 2</h1>} />
      <Route path="subroute" element={<h1>Route 2 SUBROUTE</h1>} />
    </Routes>
  );
}

function Route3() {
  return (
    <Routes>
      <Route path="" element={<h1>Route 3</h1>} />
      <Route path="subroute" element={<h1>Route 3 SUBROUTE</h1>} />
    </Routes>
  );
}
