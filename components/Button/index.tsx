import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  customStyle?: string;
}

export default function Button({
  text,
  type,
  disabled,
  onClick,
  customStyle,
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${
        customStyle || ""
      } w-full items-center rounded-full border px-4 py-4 text-center font-iregular text-sm shadow-sm`}
    >
      {text}
    </button>
  );
}
