import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "title"> {
  title: ReactNode;
  description?: string;
  bold?: boolean;
}

interface ButtonTitleProps {
  title: ReactNode;
  bold?: boolean;
}

export default function Button({
  title,
  description,
  bold = false,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={`m-auto block select-none rounded-full hover:opacity-75 disabled:bg-gray-400 disabled:opacity-75 ${
        rest.className || ""
      }`}
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
