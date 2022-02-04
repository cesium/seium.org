import { useState } from "react";

import { useAuth } from "/components/Auth/useAuth";
import { withoutAuth } from "/components/Auth";
import Fade from "react-reveal/Fade";

import Button from "/components/utils/Button";
import Card from "/components/utils/Card";

import Return from "/components/moonstone/utils/Return";
import Form from "/components/moonstone/utils/Form";
import Input from "/components/moonstone/utils/Input";

import Title from "/components/moonstone/authentication/Title";
import Text from "/components/moonstone/authentication/Text";

function Login() {
  const { user, isLoading, login } = useAuth();
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [loginTried, updateLoginTried] = useState(false);

  const requestLogin = async function () {
    updateLoginTried(true);
    await login({ email, password });
  };

  const onFinish = ({ email, password }) => {
    login({ email, password });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-secondary">
      <Return componentStyle="sm:ml-20 mt-20 sm:mt-20" />
      <div className="mt-10 flex flex-col items-center justify-center sm:mt-40">
        <Title text="Log in" />
        <div className="mt-8">
          <Form onFinish={onFinish}>
            <Input
              text="YOUR EMAIL"
              id="email"
              name="email"
              type="email"
              fgColor="white"
              bgColor="primary"
              autoComplete="email"
              onChange={(e) => updateEmail(e.currentTarget.value)}
            />
            <Input
              text="YOUR PASSWORD"
              id="password"
              name="password"
              type="password"
              fgColor="white"
              bgColor="primary"
              autoComplete="current-password"
              onChange={(e) => updatePassword(e.currentTarget.value)}
            />
            <Text
              padding="6"
              text="Forgot your password?"
              link="Right this way"
              href="/forgot-password"
            />
            <Button
              text="LET'S GO"
              customStyle="text-secondary bg-quinary border-quinary"
              onClick={(e) => {
                e.preventDefault();
                requestLogin();
              }}
            />
            {!user && !isLoading && loginTried && (
              <p className="text-center text-red-700">
                Incorrect e-mail or password
              </p>
            )}
          </Form>
        </div>
        <Text text="Don’t have an account?" link="Signup here" href="/signup" />
        <div className="absolute bottom-0 right-60 hidden lg:block">
          <Fade bottom>
            <Card
              img="/images/mascot-footer.svg"
              alt="MascotFooter"
              inverted={false}
            >
              Just really awesome people here. Please login and prepare to be
              amazed. 🔮
            </Card>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default withoutAuth(Login);