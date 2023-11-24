import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  description?: string;
  customStyle?: string;
  bold?: boolean;
}

interface ButtonTitleProps {
  title: string;
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
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${
        customStyle || ""
      } m-auto block rounded-full hover:opacity-75 disabled:bg-gray-400 disabled:opacity-75`}
    >
      <ButtonTitle title={title} bold={bold} />
      <p className="font-iregular">{description}</p>
    </button>
  );
}

function ButtonTitle({ title, bold }: ButtonTitleProps) {
  return (
    <p className={bold ? "font-ibold font-ibold" : "font-iregular"}>{title}</p>
  );
}
