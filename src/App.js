import React from "react";

import Home from "./components/sections/landing/landing";
import Agenda from "./components/sections/agendaPage/agenda";
import Speakers from "./components/sections/Speakers/speakers";
import Challenges from "./components/sections/challenges/challenges";
import Team from "./components/sections/team/team";
import Error from "./components/sections/error";
import Hackathon from "./components/sections/hackathon/hackathon";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/agenda">
            <Agenda />
          </Route>
          <Route path="/speakers">
            <Speakers />
          </Route>
          <Route path="/challenges">
            <Challenges />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/hackathon">
            <Hackathon />
          </Route>
          <Route path="/404">
            <Error />
          </Route>
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
