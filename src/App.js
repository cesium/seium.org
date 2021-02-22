import React, { useLayoutEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { MoonstoneContextProvider } from "./components/moonstone/context";
import { useAuth } from "./components/moonstone/context/auth";
import API from "./utils/api";

import Home from "./components/sections/landing/landing";
import Agenda from "./components/sections/agendaPage/agenda";
import Speakers from "./components/sections/Speakers/speakers";
import Challenges from "./components/sections/challenges/challenges";
import Team from "./components/sections/team/team";
import Error from "./components/sections/error";
import Hackathon from "./components/sections/hackathon/hackathon";
import Reset from "./pages/Reset";
import Login from "./pages/Login";
import SideBar from "./components/moonstone/sideBar";
import SideBarCompany from "./components/moonstone/sideBarCompany";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  const { auth, dispatch: dispatchAuth } = useAuth();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isTokenValid, setIsTokenValid] = useState(true);
  const [isCheckingToken, setIsCheckingToken] = useState(false);
  const [userType, setUserType] = useState("");
  let { path } = rest;

  useLayoutEffect(() => {
    if (!auth.isAuthenticated) {
      let token = localStorage.getItem("token");
      if (token !== null) {
        setIsCheckingToken(true);
        dispatchAuth({ type: "LOGIN", payload: { jwt: token } });
        API.get("/api/v1/user")
          .then((res) => {
            setUserType(res.data.type);
          })
          .catch((error) => {
            setIsTokenValid(false);
            console.log(error.response);
          })
          .finally(() => {
            setIsCheckingToken(false);
          });
      }
    } else {
      API.get("/api/v1/user")
        .then((res) => {
          setUserType(res.data.type);
          console.log("type: " + res.data.type);
        })
        .catch((error) => {
          setIsTokenValid(false);
          console.log(error.response);
        });
    }
    setIsFirstRender(false);
  }, []);

  if (isFirstRender) return null;
  if (isCheckingToken) return null;
  if (userType === "") return null;
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (auth.isAuthenticated && isTokenValid && !isCheckingToken) {
          console.log("User type: " + userType);
          console.log("Path: " + path);
          switch (userType) {
            case "attendee":
              if (path === "/profile") {
                return children;
              }
              break;
            case "company":
              if (path === "/dashboard") {
                return children;
              }
              break;
            default:
              break;
          }
        }
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
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
            <Route path="/reset">
              <Reset />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/profile">
              <SideBar />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <SideBarCompany />
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
