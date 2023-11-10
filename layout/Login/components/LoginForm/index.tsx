import { useRef, useState } from "react";

import { useAuth } from "@context/Auth";

import Button from "@components/Button";
import Text from "@layout/moonstone/authentication/Text";

import Form from "@components/Form";
import Input from "@components/Input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function LoginForm() {
  const { errors, login, isLoading } = useAuth();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onFinish = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    login({ email, password });
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
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
        <div>
          <Input
            text="YOUR PASSWORD"
            id="password"
            name="password"
            type={isPasswordVisible ? "text" : "password"}
            fgColor="white"
            bgColor="primary"
            autoComplete="current-password"
            right={
              <FontAwesomeIcon
                className="mx-2"
                onClick={togglePasswordVisibility}
                icon={isPasswordVisible ? faEyeSlash : faEye}
              />
            }
            ref={passwordRef}
          />
        </div>
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
        {errors && <p className="text-center text-failure">{errors}</p>}
      </Form>
    </div>
  );
}
