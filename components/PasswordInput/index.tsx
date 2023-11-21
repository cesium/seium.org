import { forwardRef, InputHTMLAttributes, useState } from "react";

import { inputStyle } from "@components/Input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  fgColor: string;
  bgColor: string;
  enabled?: boolean;
}

export default forwardRef<HTMLInputElement, Props>(function PasswordInput(
  {
    text = "PASSWORD",
    type = "password",
    autoComplete = "current-password",
    id,
    name,
    value,
    fgColor,
    bgColor,
    onChange,
    enabled,
    ...rest
  },
  ref
) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div>
      <label
        htmlFor={id}
        className={`pl-6 font-iregular text-${fgColor} mt-5 block text-sm`}
      >
        {text}
      </label>
      <div className={inputStyle(fgColor, bgColor, enabled)}>
        <input
          {...rest}
          type={isPasswordVisible ? "text" : "password"}
          autoComplete={autoComplete}
          id={id}
          name={name}
          value={value}
          required
          className="w-full bg-transparent outline-none"
          onChange={onChange}
          disabled={enabled == false}
          ref={ref}
        />
        <FontAwesomeIcon
          className="mx-2 cursor-pointer"
          onClick={togglePasswordVisibility}
          icon={isPasswordVisible ? faEyeSlash : faEye}
        />
      </div>
    </div>
  );
});
