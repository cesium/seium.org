import React, { useState } from "react";
import { useAuth } from "../components/moonstone/context/auth";
import { useHistory } from "react-router-dom";
import Logo from "../assets/img/logo/moonstoneLogo.svg";
import Button from "../components/moonstone/Button";
import Card from "../components/moonstone/Card";
import Robot from "../assets/img/robot/Robot.svg";
import Container from "../components/moonstone/Container";
import Input from "../components/moonstone/Input";

import API from "../utils/api";

import "../assets/css/moonstone.css";

const Login = () => {
  let history = useHistory();
  const { dispatch } = useAuth();
  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  };
  const [data, setData] = useState(initialState);
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (data.isSubmitting) return null;
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });
    API.post("/api/auth/sign_in", {
      email: data.email,
      password: data.password,
    })
      .then((res) => {
        dispatch({
          type: "LOGIN",
          payload: res.data,
        });
        API.get("/api/v1/user").then((user) => {
          switch (user.data.type) {
            case "attendee":
              history.replace("/profile");
              return null;
            case "company":
              history.replace("/dashboard");
              return null;
            default:
              throw new Error(`Unknown type: ${user.data.type}`);
          }
        });
      })
      .catch((error) => {
        console.log(error.response);
        let errorMessage = null;
        if (error.response) {
          errorMessage = error.response.statusText;
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          errorMessage = "The server did not respond. Bad server!";
        } else {
          errorMessage =
            "Something happened and we don't know what. Reload and try again?";
        }
        setData({
          ...data,
          isSubmitting: false,
          errorMessage,
        });
      });
  };

  return (
    <Container className="register">
      <a className="small back" href="/">
        {"< Back to SEI website"}
      </a>
      <div className="form-container">
        <img src={Logo} alt="logo" className="logo" />
        <h1 className="sign-up header-1">Log in</h1>
        <div>
          <Input
            type="text"
            name="email"
            label="EMAIL"
            value={data.email}
            handleChange={handleInputChange}
            error={false}
          />
          <Input
            type="password"
            name="password"
            label="PASSWORD"
            value={data.password}
            handleChange={handleInputChange}
            error={false}
          />
        </div>
        <div className="button-reg">
          <Button width="340px" onClick={handleFormSubmit}>
            {data.isSubmitting ? "Authenticating..." : "LET'S GO!"}
          </Button>
        </div>
        {data.errorMessage && (
          <div className="label login-error">{data.errorMessage}</div>
        )}
        <div className="label login-here">
          Don't have an account?{" "}
          <a href="/register" className="login">
            Sign up here
          </a>
        </div>
      </div>
      <div className="card-reg">
        <Card
          img={Robot}
          quote="Very restricted area. You just need to fill the form."
        />
      </div>
    </Container>
  );
};

export default Login;
