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
          <p className="place">🏆 450€ em cartão presente</p>
        </div>
        <div className="section">
          <h6>2.º Place</h6>
          <p className="place">🏆 250€ em cartão presente</p>
        </div>
        <div className="section">
          <h6>3.º Place</h6>
          <p className="place">🏆 100€ em cartão presente</p>
        </div>
      </div>
    </div>
  );
}

export default Awards;
