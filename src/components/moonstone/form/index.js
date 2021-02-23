import React from "react";
import Input from "../Input";

const FormSignup = (props) => {
  return (
    <div>
      <Input type="password" label="Password" placeholder="**********" />
      <Input
        type="password"
        label="Confirm Password"
        placeholder="**********"
      />
    </div>
  );
};
const FormLogin = (props) => {
  return (
    <div>
      <Input type="email" label="EMAIL" placeholder="johnrobert@email.com" />
      <Input type="password" label="PASSWORD" placeholder="**********" />
    </div>
  );
};

FormSignup.getInitialProps = ({ query }) => ({ query });

export { FormLogin, FormSignup };
