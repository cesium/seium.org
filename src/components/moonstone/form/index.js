import Input from "../Input";

const FormSignup = (props) => {
  return (
    <div>
      <Input type="text" label="Name" placeholder="John Robert" />
      <Input type="email" label="EMAIL" placeholder="johnrobert@email.com" />
      <Input type="text" label="USERNAME" placeholder="username" />
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

export { FormLogin, FormSignup };
