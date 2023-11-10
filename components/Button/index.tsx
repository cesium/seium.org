import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  description?: string;
  customStyle?: string;
  bold?: boolean;
}

export default function Button({
  title,
  description,
  type,
  disabled,
  onClick,
  customStyle,
  bold,
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${
        customStyle || ""
      } m-auto block rounded-full hover:opacity-75 disabled:bg-gray-400 disabled:opacity-75`}
    >
      <p className={bold ? "font-ibold font-ibold" : "font-iregular"}>
        {title}
      </p>
      <p className="font-iregular">{description}</p>
    </button>
  );
}
