import React, { useState } from "react";
import ActivityFooter from "../carousels/activityFooter";
import windowDimensions from "../utils/windowDimensions";
import Fade from "react-reveal/Fade";
import Button from "../buttons/button";

function parseTime(s, e) {
  const startTime = new Date("2020/01/01 " + s);
  const endTime = new Date("2020/01/01 " + e);

  const difference = endTime.getTime() - startTime.getTime();

  const minutes = Math.round(difference / 60000);

  return Math.min(200, Math.max(85, minutes));
}

function Activity(props) {
  const [expand, setExpand] = useState(false);

  let { width } = windowDimensions();

  let ActivityStyle = () => {
    if (width >= 1200) {
      return {
        event: {
          // marginRight: '8px',
          width: "47%",
          borderTop: "1px solid white",
          padding: "10px 15px 25px 15px",
          position: "relative",
          //height: "0",
          paddingBottom: parseTime(props.start, props.end) + "px",
        },
        timing: {},
        bigTitle: {
          paddingTop: "6px",
          width: "90%",
        },
      };
    } else if (width >= 768) {
      return {
        event: {
          // marginRight: '8px',
          width: "47%",
          borderTop: "1px solid white",
          padding: "10px 15px 25px 15px",
          position: "relative",
          //height: "0",
          paddingBottom: parseTime(props.start, props.end) + "px",
        },
        timing: {
          fontSize: "14px",
        },
        bigTitle: {
          paddingTop: "6px",
          width: "90%",
          fontSize: "14px",
        },
      };
    } else {
      return {
        event: {
          // marginRight: '8px',
          width: "47%",
          borderTop: "1px solid white",
          padding: "10px 15px 25px 15px",
          position: "relative",
          //height: "0",
          paddingBottom: parseTime(props.start, props.end) + "px",
        },
        timing: {
          fontSize: "12px",
        },
        bigTitle: {
          paddingTop: "6px",
          width: "90%",
          fontSize: "10px",
          lineHeight: "11px",
        },
      };
    }
  };

  let bigTitle = props.bigTitle ? (
    <span className="medium-3" style={ActivityStyle().bigTitle}>
      {props.bigTitle}
    </span>
  ) : (
    ""
  );

  let eventStyle = props.main
    ? { ...ActivityStyle().event, ...{ width: "100%", marginRight: "0" } }
    : ActivityStyle().event;

  console.log(expand);
  console.log(props);

  return (
    <div style={{ ...eventStyle, ...props.style }}>
      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <p className="medium-3" style={ActivityStyle().timing}>
            {props.start}
            {props.start ? "—" : ""}
            {props.end}
          </p>
        </div>
        {props.description && (
          <Button onClick={() => setExpand(!expand)}>
            {expand ? "-" : "+"}
          </Button>
        )}
      </div>

      <p className="medium" style={ActivityStyle().bigTitle}>
        {bigTitle} {props.title}
      </p>

      <div
        style={{
          position: "absolute",
          bottom: "10px",
          display: "flex",
          width: "100%",
        }}
      >
        <ActivityFooter
          advanced={props.advanced}
          label={props.label}
          join={props.join}
        />
      </div>
      <p style={{ opacity: "0.5", marginTop: "5px", fontSize: "14px" }}>
        <a
          href={
            (props.day ? "/speakers?day=" + props.day : "/speakers") +
            (props.speakerID ? `#${props.speakerID}` : "")
          }
          style={{ color: "white", textDecoration: "none" }}
        >
          {props.animator}
        </a>
      </p>
      {expand && (
        <Fade>
          <p
            style={{
              color: "white",
              opacity: "0.8",
              marginTop: "16px",
              fontSize: "14px",
            }}
          >
            {props.description}
          </p>
        </Fade>
      )}
    </div>
  );
}

export default Activity;
