import React from "react";

import "../../../assets/css/ready.css";
import Button from "../../buttons/button";

function Ready(props) {
  return (
    <div className="ready-bg">
      <div
        className="ready"
        style={{
          ...{ flexDirection: "column", paddingBottom: "80px" },
          ...props.style,
        }}
      >
        <div className="container">
          <div className="details">
            <div className="expect">
              <h4>Ready to go? 👉</h4>
            </div>
            <div className="quote">
              <div className="ready-register">
                <h1>
                  <span className="span">
                    <a
                      target="_blank"
                      href="/docs/RegulamentoHackathon.pdf"
                    >
                      <Button background="#102333" className="button">
                        Read the rules
                      </Button>
                    </a>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Ready;
