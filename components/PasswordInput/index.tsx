import { forwardRef, InputHTMLAttributes, useState } from "react";

import Input from "@components/Input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  autocomplete?: string;
  fgColor: string;
  bgColor: string;
  enabled?: boolean;
}

export default forwardRef<HTMLInputElement, Props>(function PasswordInput(
  {
    text = "PASSWORD",
    id = "password",
    name = "password",
    type = "password",
    autocomplete = "current-password",
    fgColor,
    bgColor,
    ...rest
  },
  ref
) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <Input
      {...rest}
      text={text}
      id={id}
      name={name}
      type={isPasswordVisible ? "text" : "password"}
      fgColor="white"
      bgColor="primary"
      autoComplete="current-password"
      right={
        <FontAwesomeIcon
          className="mx-2 cursor-pointer"
          onClick={togglePasswordVisibility}
          icon={isPasswordVisible ? faEyeSlash : faEye}
        />
      }
      ref={ref}
    />
  );
});
