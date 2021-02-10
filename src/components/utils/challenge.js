import React from "react";
import "../../assets/css/challenge.css";

function PrizeList(props) {
  const list = props.list;

  const listItems = list.map((c, i) => (
    <p key={i} className="x-small5 place">{c}</p>
  ));

  return <div>{listItems}</div>;
}

function Challenge(props) {
  return (
    <div className="challenge-compo">
      <h3>{props.title}</h3>
      <p className="parag">{props.parag}</p>
      {props.buttonText}
      <p className="medium-3 winner-text"> Awards 🏆</p>
      <PrizeList list={props.prizes}/>
      {/* <Button>READ THE RULES</Button> */}
    </div>
  );
}
export default Challenge;
