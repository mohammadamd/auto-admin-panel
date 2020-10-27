import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from "./pages/main";
import Products from "./pages/Products";

export default function App() {
  return (
    <Router>
          <Switch>
            <Route path="/products">
              <Products/>
            </Route>
            <Route path="/">
              <Main/>
            </Route>
          </Switch>
    </Router>
  );
}

