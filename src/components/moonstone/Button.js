import React from "react";

export default function Button(props) {
  const buttonStyle = {
    display: "block",
    width: props.width,
  };
  console.log(props.width);
  return (
    <a
      onClick={props.onClick}
      href={props.href}
      className="buttonText"
      style={{ ...buttonStyle, ...props.style }}
    >
      {props.children}
      {props.inner ? <p className="buttonInner">{props.inner}</p> : ""}
    </a>
  );
}
