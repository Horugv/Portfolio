import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import CVBlock from "./block/CVBlock";
import Nav from "./components/Nav";

import About from "./page/About";
import Resume from "./page/Resume";
import Work from "./page/Work";
import Contact from "./page/Contact";

import "../styles/index.scss";

const App = () => {
  return (
    <div className="App">
      <main className="main">
        <Nav />
        <div className="main__block">
          <CVBlock />
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/works" exact component={Work} />
            <Route path="/contact" exact component={Contact} />
            <Redirect from="/" to="/about" />
            <Redirect to="/about" />
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default App;
