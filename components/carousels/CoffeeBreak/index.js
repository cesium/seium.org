import Coffee from "../../../public/images/Coffee.svg";
import windowDimensions from "../../utils/WindowDimensions";

let CoffeeStyle = () => {
  let { width, height } = windowDimensions();
  if (width >= 1200) {
    return {
      text: {},
    };
  } else {
    return {
      text: {
        fontSize: "14px",
      },
    };
  }
};
function CoffeeBreak(props) {
  let container = {
    borderTop: "1px solid white",
    padding: "10px 13px",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  };
  return (
    <div style={container}>
      <p className="medium-3" style={CoffeeStyle().text}>
        {props.name}
      </p>
      <img src={Coffee} alt="" />
    </div>
  );
}

export default CoffeeBreak;
