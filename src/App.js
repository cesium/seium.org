import React from 'react';

import Home from './components/sections/landing/landing'
import Carousel from './components/sections/landing/agenda/carousel-home'
import NavBar from "./components/nav/nav";
import Agenda from './components/sections/agendaPage/agenda'

import Speakers from './components/sections/Speakers/speakers'
import Challenges from './components/sections/challenges/challenges'
import Team from './components/sections/team/team'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SpeakerCaousel from './components/carousels/speakers-carousel';

function App() {
  return (
    <Router>

      <div>
        <Switch>
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
              <Route path="/">
                <Home />
              </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
