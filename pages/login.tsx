/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { motion as Motion } from "framer-motion";

import { useAuth, withoutAuth } from "@components/Auth";

import Button from "@components/utils/Button";
import Card from "@components/utils/Card";

import Return from "@components/moonstone/utils/Return";
import Form from "@components/moonstone/utils/Form";
import Input from "@components/moonstone/utils/Input";

import Title from "@components/moonstone/authentication/Title";
import Text from "@components/moonstone/authentication/Text";

function Login() {
  const { errors, login, isLoading } = useAuth();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onFinish = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    login({ email, password });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-secondary">
      <Return componentStyle="sm:ml-20 mt-20 sm:mt-20" />
      <img
        className="absolute -left-[380px] bottom-0 hidden w-[750px] xl:block"
        src="/images/mascot-head.png"
      />
      <div className="mt-10 flex flex-col items-center justify-center sm:mt-40">
        <Title text="Log in" />
        <div className="mt-8">
          <Form onSubmit={onFinish}>
            <Input
              text="YOUR EMAIL"
              id="email"
              name="email"
              type="email"
              fgColor="white"
              bgColor="primary"
              autoComplete="email"
              ref={emailRef}
            />
            <Input
              text="YOUR PASSWORD"
              id="password"
              name="password"
              type="password"
              fgColor="white"
              bgColor="primary"
              autoComplete="current-password"
              ref={passwordRef}
            />
            <Text
              padding="6"
              text="Forgot your password?"
              link="Right this way"
              href="/forgot-password"
            />
            <Button
              text={isLoading ? "Authenticating..." : "LET'S GO"}
              disabled={isLoading}
              type="submit"
              customStyle="text-secondary bg-quinary border-quinary"
            />
            {errors && (
              <p className="text-center text-failure">
                Incorrect e-mail or password
              </p>
            )}
          </Form>
        </div>
        <Text
          text="Don’t have an account?"
          link="Register here"
          href="https://sei22.eventbrite.pt"
        />
        <div className="absolute bottom-0 right-60 hidden lg:block xl:hidden">
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ y: -15, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Card
              img="/images/mascot-footer.svg"
              alt="MascotFooter"
              inverted={false}
            >
              Just really awesome people here. Please login and prepare to be
              amazed. 🔮
            </Card>
          </Motion.div>
        </div>
      </div>
    </div>
  );
}

export default withoutAuth(Login);
