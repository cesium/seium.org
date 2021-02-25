import React from "react";

import Container from "../../container/container";
import "../../../assets/css/awards.css";

function Awards(props) {
  return (
    <div className="awards" style={{ ...props.style }}>
      <h3 className="section-title">Awards</h3>
      <div class="places">
        <div className="section">
          <h6>1.º Place</h6>
          <p className="hackathonplace">🏆 450€in gift card</p>
        </div>
        <div className="section">
          <h6>2.º Place</h6>
          <p className="hackathonplace">🏆 250€ in gift card</p>
        </div>
        <div className="section">
          <h6>3.º Place</h6>
          <p className="hackathonplace">🏆 100€ in gift card</p>
        </div>
      </div>
    </div>
  );
}

export default Awards;
