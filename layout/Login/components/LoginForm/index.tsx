import { useRef } from "react";

import { useAuth } from "@context/Auth";

import Button from "@components/Button";
import Text from "@layout/moonstone/authentication/Text";

import Form from "@components/Form";
import Input from "@components/Input";

export default function LoginForm() {
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
          title={isLoading ? "Authenticating..." : "LET'S GO"}
          disabled={isLoading}
          type="submit"
          customStyle="text-secondary bg-quinary border-quinary w-full h-16"
        />
        {errors && <p className="text-center text-failure">{errors}</p>}
      </Form>
    </div>
  );
}
