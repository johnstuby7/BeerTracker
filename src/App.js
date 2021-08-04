import './App.css';
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Beer, Pub, Map } from "./components";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/beer" exact component={() => <Beer />} />
          <Route path="/map" exact component={() => <Map />} />
          <Route path="/pub" exact component={() => <Pub />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
