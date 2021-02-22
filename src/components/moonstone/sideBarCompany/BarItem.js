import React, { useState } from "react";

export default function BarItem(props) {
  let selected = props.selected === true ? " selected" : "";
  return (
    <div
      onClick={props.onClick}
      className={"barItem" + selected}
      style={props.style}
    >
      <p className={"label" + selected}>{props.page}</p>
    </div>
  );
}
