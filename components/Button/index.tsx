import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props {
  title: ReactNode;
  description?: string;
  customStyle?: string;
  bold?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

interface ButtonTitleProps {
  title: ReactNode;
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
  const className = bold ? "font-ibold" : "font-iregular";
  return <div className={className}>{title}</div>;
}
