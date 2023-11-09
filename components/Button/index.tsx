import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  description: string;
  customStyle?: string;
}

export default function Button({
  title,
  description,
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
      } m-auto block h-20 rounded-full bg-quinary hover:opacity-75 disabled:bg-gray-400 disabled:opacity-75`}
    >
      <p className="font-ibold font-bold">{title}</p>
      <p className="font-iregular">{description}</p>
    </button>
  );
}
