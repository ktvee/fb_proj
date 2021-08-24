import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from "react";
import Facebook from './components/Facebook';
import Saved from './components/Saved'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css"

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/saved">Saved</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/saved">
            <Saved />
          </Route>
          <Route path="/">
            <Facebook />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

