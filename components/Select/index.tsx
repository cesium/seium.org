import { SelectHTMLAttributes } from "react";

import { ChevronDownIcon } from "@heroicons/react/solid";

interface Option {
  key: any;
  name: string;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  text: string;
  options: Option[];
  customStyle?: string;
  fgColor: string;
  bgColor: string;
  enabled?: boolean;
}

export default function Select({
  id,
  text,
  options,
  enabled,
  fgColor,
  bgColor,
  customStyle,
  ...rest
}: Props) {
  let textColor = `text-${fgColor}`;
  let backColor = `bg-${bgColor}`;
  let disabled = enabled == false;

  return (
    <div>
      <label
        htmlFor={id}
        className={`pl-6 font-iregular text-${fgColor} mt-5 block select-none text-sm`}
      >
        {text}
      </label>
      <div
        className={`text-iregular relative mt-2 flex ${textColor} ${backColor} block w-full appearance-none rounded-full border border-gray-300 py-2 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm`}
      >
        <select
          id={id}
          disabled={disabled}
          className={`text-iregular ${
            disabled ? "text-gray-500" : textColor
          } ${backColor} block w-full appearance-none rounded-full px-3 pr-10 pl-6 placeholder-gray-400 opacity-100 focus:outline-none sm:text-sm`}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.key} value={option.key}>
              {option.name}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          className={`${
            !disabled ? "block" : "hidden"
          } pointer-events-none absolute top-0 bottom-0 right-3 m-auto h-7 text-${fgColor}`}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
