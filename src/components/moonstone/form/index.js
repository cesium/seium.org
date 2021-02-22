import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Input from "../Input";

const FormSignup = (props) => {
  // const resetID = window.location.;
  return (
    <div>
      <Input type="password" label="PASSWORD" placeholder="**********" />
      <Input
        type="password"
        label="CONFIRM PASSWORD"
        placeholder="**********"
      />
    </div>
  );
};
const FormLogin = (props) => {
  return (
    <div>
      <Input type="text" label="EMAIL" placeholder="johnrobert@email.com" />
      <Input type="password" label="PASSWORD" placeholder="**********" />
    </div>
  );
};

FormSignup.getInitialProps = ({ query }) => ({ query });

export { FormLogin, FormSignup };
