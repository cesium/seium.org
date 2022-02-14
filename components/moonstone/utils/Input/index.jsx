import { forwardRef } from "react";

export default forwardRef(function Input(
  {
    text,
    id,
    name,
    type,
    value,
    autocomplete,
    fgColor,
    bgColor,
    onChange,
    enabled,
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
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autocomplete}
          value={value}
          required
          className={`text-iregular ${textColor} ${backColor} block w-full appearance-none rounded-full border border-gray-300 px-3 py-2 pl-6 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm`}
          onChange={onChange}
          disabled={enabled == false}
          ref={ref}
        />
      </div>
    </div>
  );
});
