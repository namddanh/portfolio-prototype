import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Contact from "./pages/contact";
import Loading from "./components/Loading";
import "./style/global.scss";
import "./App.scss";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  });

  return (
    <React.Fragment>
      <Router>
        <Switch>
          {isLoading === true ? (
            <Loading isLoading={isLoading} />
          ) : (
            <Route path="/" component={Home} exact />
          )}

          <Route path="/contact" component={Contact} exact />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
