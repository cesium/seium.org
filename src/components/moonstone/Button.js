import React from "react";

export default function Button(props) {
  const buttonStyle = {
    display: "block",
    width: props.width,
    backgroundColor: props.noBack ? "#ffffff" : "#00ffb7",
  };

  return (
    <a
      onClick={props.onClick}
      href={props.href}
      className="buttonText"
      style={{ ...buttonStyle, ...props.style }}
      disabled={props.disabled}
    >
      {props.children}
      {props.inner ? <p className="buttonInner">{props.inner}</p> : ""}
    </a>
  );
}
