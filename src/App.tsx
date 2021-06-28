import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Contact from "./pages/contact";
import "./style/global.scss";
import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} exact />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
