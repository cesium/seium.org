import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../assets/img/logo/moonstoneLogo.svg";
import Button from "../components/moonstone/Button";
import Card from "../components/moonstone/Card";
import Robot from "../assets/img/robot/Robot.svg";
import Container from "../components/moonstone/Container";
import Input from "../components/moonstone/Input";

import "../assets/css/moonstone.css";
import { GlobalContext } from "../App";

const Login = () => {
  let history = useHistory();
  const { dispatch } = useContext(GlobalContext);
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
    fetch("https://sei21-staging.herokuapp.com/api/auth/sign_in", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((resJson) => {
        dispatch({
          type: "LOGIN",
          payload: resJson,
        });
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: null,
        });
        history.replace("/profile");
      })
      .catch((error) => {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.message || error.statusText,
        });
      });
  };

  return (
    <Container className="register">
      <a className="small back" href="/">
        {"<" + " Back to SEI website"}
      </a>
      <div className="form-container">
        <a href="#">
          <img src={Logo} alt="logo" className="logo" />
        </a>
        <h1 className="sign-up">Log in</h1>
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
