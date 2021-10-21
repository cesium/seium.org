import React, { useEffect, useState } from "react";
import ActivityFooter from "../ActivityFooter";
import windowDimensions from "../../utils/WindowDimensions";
import Fade from "react-reveal/Fade";
import Button from "../../Button";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styles from "style.module.css";

function parseTime(s, e) {
  const startTime = new Date("2020/01/01 " + s);
  const endTime = new Date("2020/01/01 " + e);

  const difference = endTime.getTime() - startTime.getTime();

  const minutes = Math.round(difference / 60000);

  return Math.min(200, Math.max(85, minutes));
}

function Activity(props) {
  const [expand, setExpand] = useState(false);
  const history = useHistory();
  const isAgendaPage = props.location.pathname === "/agenda";

  useEffect(() => {
    const location_hash = props.location.hash;
    setExpand(location_hash === `#${props.activityID}`);
  }, []);

  let { width } = windowDimensions();

  let ActivityStyle = () => {
    if (width >= 1200) {
      return {
        event: {
          // marginRight: '8px',
          width: "47%",
          borderTop: "1px solid white",
          padding: "10px 15px 60px 15px",
          position: "relative",
          //height: "0",
          //paddingBottom: parseTime(props.start, props.end) + "px",
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
          padding: "10px 15px 60px 15px",
          position: "relative",
          //height: "0",
          //paddingBottom: parseTime(props.start, props.end) + "px",
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
          padding: "10px 15px 60px 15px",
          position: "relative",
          //height: "0",
          //paddingBottom: parseTime(props.start, props.end) + "px",
        },
        timing: {
          fontSize: "12px",
        },
        bigTitle: {
          paddingTop: "6px",
          width: "90%",
          fontSize: "14px",
          lineHeight: "16px",
        },
      };
    }
  };

  let bigTitle = props.bigTitle ? (
    <span style={ActivityStyle().bigTitle}>{props.bigTitle}</span>
  ) : (
    ""
  );

  let eventStyle = props.main
    ? { ...ActivityStyle().event, ...{ width: "100%", marginRight: "0" } }
    : ActivityStyle().event;

  const handleActivityClick = () => {
    const path =
      (props.day ? "?day=" + props.day : "") +
      (props.activityID ? `#${props.activityID}` : "");
    history.push("/agenda" + path);
  };

  return (
    <div
      id={props.activityID}
      style={{
        ...eventStyle,
        ...props.style,
      }}
      className={styles.activity}
    >
      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <p className={styles.activity-type} style={ActivityStyle().timing}>
            {props.start}
            {props.start ? "—" : ""}
            {props.end}
          </p>
        </div>
      </div>

      <p className={styles.activity} style={ActivityStyle().bigTitle}>
        <span className={styles.activity-type}>{props.title} </span>
        {!isAgendaPage ? (
          <span
            onClick={() => handleActivityClick()}
            style={{ cursor: "pointer" }}
          >
            {bigTitle}
          </span>
        ) : (
          <span>{bigTitle}</span>
        )}
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
      <p
        style={{
          opacity: "0.8",
          marginTop: "5px",
          fontSize: "14px",
          display: "block",
        }}
      >
        {props.speaker1ID ? (
          <a
            href={
              (props.day ? "/speakers?day=" + props.day : "/speakers") +
              (props.speaker1ID ? `#${props.speaker1ID}` : "")
            }
            className={styles.agenda-link}
          >
            {props.animator1}
          </a>
        ) : null}
        {props.speaker2ID ? (
          <a
            style={{ marginTop: "5px" }}
            href={
              (props.day ? "/speakers?day=" + props.day : "/speakers") +
              (props.speaker2ID ? `#${props.speaker2ID}` : "")
            }
            className={styles.agenda-link}
          >
            {props.animator2}
          </a>
        ) : null}
        {props.speaker3ID ? (
          <a
            style={{ marginTop: "5px" }}
            href={
              (props.day ? "/speakers?day=" + props.day : "/speakers") +
              (props.speaker3ID ? `#${props.speaker3ID}` : "")
            }
            className={styles.agenda-link}
          >
            {props.animator3}
          </a>
        ) : null}
      </p>
      {expand && (
        <Fade>
          <p
            style={{
              color: "white",
              opacity: "0.8",
              marginTop: "16px",
              fontSize: "14px",
              fontFamily: "Inter Regular",
            }}
          >
            {props.description}
          </p>
        </Fade>
      )}
      {props.description && isAgendaPage && (
        <div
          style={{
            position: "absolute",
            right: "0",
            bottom: "0",
            marginBottom: "10px",
            marginRight: "10px",
          }}
        >
          <Button onClick={() => setExpand(!expand)}>
            {expand ? "-" : "+"}
          </Button>
        </div>
      )}
    </div>
  );
}

export default withRouter(Activity);
