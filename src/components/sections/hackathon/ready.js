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
                      href="https://forms.gle/wLdyCmaGaqKko1Jd9"
                    >
                      <Button background="#102333" className="button">
                        Register your team
                      </Button>
                    </a>

                    <p
                      style={{ fontSize: "14px", opacity: "0.6" }}
                      className="people"
                    >
                      3-5 people
                    </p>
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
