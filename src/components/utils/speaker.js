import React from "react";
import { useHistory } from "react-router-dom";
import "../../assets/css/speaker.css";
import windowDimensions from "../utils/windowDimensions";

export default function Speaker(props) {
  let { width, height } = windowDimensions();
  const history = useHistory();

  let imgStyle = () => {
    if (width >= 992) {
      return { w: "210px", h: "210px", mrB: "15px" };
    } else if (width >= 768) {
      return { w: "161px", h: "161px", mrB: "15px" };
    } else if (width >= 540) {
      return { w: "161px", h: "161px", mrB: "15px" };
    } else if (width >= 411) {
      return { w: "140px", h: "140px", mrB: "15px" };
    } else if (width >= 375) {
      return { w: "126px", h: "126px", mrB: "15px" };
    } else if (width >= 360) {
      return { w: "115px", h: "115px", mrB: "15px" };
    } else if (width >= 320) {
      return { w: "100px", h: "100px", mrB: "15px" };
    } else {
      return { w: "100px", h: "100px", mrB: "15px" };
    }
  };

  const handleSpeakerClick = () => {
    history.push(
      (props.day ? "/speakers?day=" + props.day : "/speakers") +
        (props.speakerID ? `#${props.speakerID}` : "")
    );
  };

  return (
    <div
      id={props.speakerID}
      className="speaker"
      style={{
        marginBottom: imgStyle().mrB,
        width: imgStyle().w,
      }}
      onClick={() => handleSpeakerClick()}
    >
      <div className="wrapper">
        <img
          src={props.speaker}
          alt={props.alt}
          width={imgStyle().w}
          height={imgStyle().h}
        />
        <div className="overlay" style={{ height: imgStyle().h }} />
      </div>

      <div className="description">
        <p className="medium-3">{props.name}</p>
        <p className="medium-3 text">{props.job}</p>
        <p className="medium-3 text">({props.desc})</p>
      </div>
    </div>
  );
}
