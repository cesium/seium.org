import React, { createContext, useContext, useReducer } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { MoonstoneContextProvider } from "./components/moonstone/context";
import { useAuth } from "./components/moonstone/context/auth";

import Home from "./components/sections/landing/landing";
import Agenda from "./components/sections/agendaPage/agenda";
import Speakers from "./components/sections/Speakers/speakers";
import Challenges from "./components/sections/challenges/challenges";
import Team from "./components/sections/team/team";
import Error from "./components/sections/error";
import Hackathon from "./components/sections/hackathon/hackathon";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SideBar from "./components/moonstone/sideBar";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  const { auth } = useAuth();
  if (!auth.isAuthenticated) {
    //também há authState.token para o jwt
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (
    <MoonstoneContextProvider>
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
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/profile">
              <SideBar />
            </PrivateRoute>
            <Route path="/404">
              <Error />
            </Route>
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    </MoonstoneContextProvider>
  );
}

export default App;
