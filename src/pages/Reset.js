import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../assets/img/logo/moonstoneLogo.svg";
import Input from "../components/moonstone/Input";
import Button from "../components/moonstone/Button";
import Card from "../components/moonstone/Card";
import Robot from "../assets/img/robot/Robot.svg";
import Container from "../components/moonstone/Container";
import API from "../utils/api";

import { useQuery } from "../utils/query";
import "../assets/css/moonstone.css";

// https://seium.org/reset?token=YnxxOCyb0RqB7sDS2Xxxx1s1_jAmM-mGExpqIVMHh7xZvl-u

const Reset = () => {
  let token = useQuery().get("token");
  let history = useHistory();

  if (token === null) history.replace("/login");

  const [passwd1, setPasswd1] = useState("");
  const [passwd2, setPasswd2] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("LET'S GO!");

  const handleSubmit = () => {
    if (isSubmitting) return null;
    setIsSubmitting(true);
    setButtonLabel("Submitting...");
    if (passwd1 !== passwd2) {
      setError("The two passwords don't match");
      setIsSubmitting(false);
      setButtonLabel("LET'S GO!");
      return null;
    }
    setError("");
    API.put(`api/auth/passwords/${token}`, {
      user: {
        password: passwd1,
      },
    })
      .then((res) => {
        setButtonLabel("DONE!");
        setTimeout(() => history.replace("/login"));
      })
      .catch((err) => {
        setButtonLabel("Error...");
        setTimeout(() => setButtonLabel("LET'S GO!"));
      })
      .finally(() => {
        isSubmitting(false);
        setError("");
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
        <h1 className="sign-up header-1">Password Reset</h1>
        <div>
          <Input
            type="password"
            value={passwd1}
            handleChange={(event) => setPasswd1(event.target.value)}
            label="Password"
          />
          <Input
            type="password"
            label="Confirm Password"
            value={passwd2}
            error={error}
            handleChange={(event) => setPasswd2(event.target.value)}
          />
        </div>
        <div className="button-reg">
          <Button onClick={() => handleSubmit()} width="340px">
            {buttonLabel}
          </Button>
        </div>
        <div className="label login-here">
          Already have an account?{" "}
          <a href="/login" className="login">
            Login here
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

export default Reset;
