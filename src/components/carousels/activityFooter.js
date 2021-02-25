import Button from "../buttons/button";
import windowDimensions from "../utils/windowDimensions";

function ActivityFooter(props) {
  let { width, height } = windowDimensions();
  let footerStyle = () => {
    if (width >= 1200) {
      return {
        labelStyle: {
          width: "55%",
          whiteSpace: "nowrap",
          opacity: "0.5",
        },
        headerStyle: {
          display: "flex",
          flexDirection: "row",
        },
        containerStyle: {
          minHeight: "25px",
        },
        buttonStyle: {},
        joinStyle: {
          fontSize: "12px",
        },
      };
    } else if (width >= 768) {
      return {
        labelStyle: {
          width: "55%",
          whiteSpace: "nowrap",
          opacity: "0.5",
          fontSize: "10px",
        },
        headerStyle: {
          display: "flex",
          flexDirection: "row",
        },
        containerStyle: {
          minHeight: "25px",
        },
        buttonStyle: {
          padding: "0px 12px 3px",
        },
        joinStyle: {
          fontSize: "10px",
        },
      };
    } else {
      return {
        labelStyle: {
          width: "55%",
          whiteSpace: "nowrap",
          opacity: "0.5",
          fontSize: "10px",
        },
        headerStyle: {
          display: "flex",
          flexDirection: "row",
        },
        containerStyle: {
          minHeight: "25px",
        },
        buttonStyle: {
          padding: "0px 12px 3px",
        },
        joinStyle: {
          fontSize: "10px",
        },
      };
    }
  };
  let button = props.advanced ? (
    <Button background={"#173149"} style={footerStyle().buttonStyle}>
      +
    </Button>
  ) : (
    ""
  );
  const main = (
    <div style={footerStyle().headerStyle}>
      <div style={footerStyle().containerStyle}>
        <p style={footerStyle().labelStyle} className="nav-bar-link">
          {props.label}
        </p>
        {props.join ? (
          <a className="x-large" target="_blank" href={props.join}>
            Join
          </a>
        ) : (
          ""
        )}
        {button}
      </div>
    </div>
  );
  return main;
}

export default ActivityFooter;
