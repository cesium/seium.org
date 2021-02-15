import Logo from "../assets/img/logo/moonstoneLogo.svg";
import Form from "../components/moonstone/form";
import Button from "../components/moonstone/Button";
import Card from "../components/moonstone/Card";
import Robot from "../assets/img/robot/Robot.svg";
import Container from "../components/moonstone/Container";

import "../assets/css/moonstone.css";

const Register = () => {
  return (
    <Container className="register">
      <a className="small back" href="/">
        {"<" + " Back to SEI website"}
      </a>
      <div className="form-container">
        <a href="#">
          <img src={Logo} alt="logo" className="logo" />
        </a>
        <h1 className="sign-up">Sign up</h1>
        <Form />
        <div className="button-reg">
          <Button width="340px"> LET'S GO!</Button>
        </div>
        <div className="label login-here">
          Already have an account?{" "}
          <a href="#" className="login">
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

export default Register;
