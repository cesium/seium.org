import React, { useState } from "react";
import Participant from "./Participant";
import Header from "../Header";
import Button from "../Button";

export default function List(props) {
  const [selected, setSelected] = useState();

  let index = -1;
  return (
    <div className="participants">
      <Header
        title="Participantes no stand"
        style={{ marginBottom: "15px", width: "100%" }}
      />
      <Button
        style={{ width: "200px", margin: "auto", marginBottom: "30px" }}
        onClick={() => props.setRefresh(props.refresh + 1)}
      >
        Refresh
      </Button>
      {props.participants
        ? props.participants.map((user) => {
            index++;
            return (
              <Participant
                onClick={props.onClick}
                setSelected={setSelected}
                index={index}
                selected={selected === index}
                key={index}
                user={user}
              />
            );
          })
        : ""}
    </div>
  );
}
