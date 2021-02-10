import React from "react";

const containerStyle = {
  width: "100%",
  maxWidth: "1440px",
  paddingTop: "1%",
  paddingBottom: "5%",
  paddingLeft: "5vw",
  paddingRight: "5vw",
};

function Container(props) {
  return (
    <div style={{ ...containerStyle, ...props.style }}>{props.children}</div>
  );
}

export default Container;
