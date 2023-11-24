import { forwardRef, useState } from "react";

import { InputBase, InputDefaultProps } from "@components/Input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default forwardRef<HTMLInputElement, InputDefaultProps>(
  function PasswordInput(
    { text, id, name, type, fgColor, bgColor, enabled, ...rest },
    ref
  ) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    return (
      <InputBase
        text={text}
        id={id}
        fgColor={fgColor}
        bgColor={bgColor}
        enabled={enabled}
      >
        <input
          id={id}
          name={name}
          type={isPasswordVisible ? "text" : "password"}
          required
          className="w-full bg-transparent outline-none"
          disabled={enabled == false}
          ref={ref}
          {...rest}
        />
        <FontAwesomeIcon
          className="mx-2 cursor-pointer"
          onClick={togglePasswordVisibility}
          icon={isPasswordVisible ? faEyeSlash : faEye}
        />
      </InputBase>
    );
  }
);
