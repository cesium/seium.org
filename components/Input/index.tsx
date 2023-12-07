import { forwardRef, InputHTMLAttributes } from "react";

export interface InputBaseProps
  extends Pick<InputHTMLAttributes<HTMLDivElement>, "id" | "children"> {
  text: string;
  fgColor: string;
  bgColor: string;
  enabled?: boolean;
}

export interface InputDefaultProps
  extends InputBaseProps,
    InputHTMLAttributes<HTMLInputElement> {}

// A wrapper to the <input> to standardize styles for the container
export function InputBase({
  text,
  id,
  fgColor,
  bgColor,
  enabled,
  children,
}: InputBaseProps) {
  let textColor = `text-${fgColor}`;
  let backColor = `bg-${bgColor}`;

  return (
    <div>
      <label
        htmlFor={id}
        className={`pl-6 font-iregular text-${fgColor} mt-5 block select-none text-sm`}
      >
        {text}
      </label>
      <div
        className={`text-iregular mt-2 flex items-center  ${
          enabled == false ? "text-gray-500" : textColor
        } ${backColor} appearance-none rounded-full border border-gray-300 px-3 py-2 pl-6 placeholder-gray-400 shadow-sm sm:text-sm`}
      >
        {children}
      </div>
    </div>
  );
}

export default forwardRef<HTMLInputElement, InputDefaultProps>(function Input(
  {
    text,
    id,
    name,
    type,
    value,
    autoComplete,
    fgColor,
    bgColor,
    onChange,
    enabled,
    ...rest
  },
  ref
) {
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
        type={type}
        autoComplete={autoComplete}
        value={value}
        required
        className="w-full bg-transparent outline-none"
        onChange={onChange}
        disabled={enabled == false}
        ref={ref}
        {...rest}
      />
    </InputBase>
  );
});
