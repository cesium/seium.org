import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  fgColor: string;
  bgColor: string;
  enabled?: boolean;
  right?: ReactNode;
}

export default forwardRef<HTMLInputElement, Props>(function Input(
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
    right,
    ...rest
  },
  ref
) {
  let textColor = `text-${fgColor}`;
  let backColor = `bg-${bgColor}`;

  if (enabled === false) {
    textColor = "text-gray-500";
    backColor = "bg-gray-100";
  } else if (enabled === true) {
    textColor = `bg-${fgColor}`;
    backColor = `bg-${bgColor}`;
  }

  return (
    <div>
      <label
        htmlFor={id}
        className={`pl-6 font-iregular text-${fgColor} mt-5 block text-sm`}
      >
        {text}
      </label>
      <div
        className={`text-iregular mt-2 flex items-center ${textColor} ${backColor} appearance-none rounded-full border border-gray-300 px-3 py-2 pl-6 placeholder-gray-400 shadow-sm sm:text-sm`}
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
        {right}
      </div>
    </div>
  );
});
