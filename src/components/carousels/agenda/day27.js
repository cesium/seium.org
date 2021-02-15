import Activity from "../../carousels/activity";
import CoffeeBreak from "../../carousels/coffeeBreak";

let contentStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  maxWidth: "450px",
};

function Day27() {
  return (
    <div style={contentStyle}>
      <Activity
        main="yes"
        bigTitle="Hackathon (42 hours)"
        start="00:00"
        end="13:00"
      />
      <CoffeeBreak name="Lunch Break" />
      <Activity
        main="yes"
        bigTitle="Hackathon (42 hours)"
        start="14:00"
        end="24:00"
      />
    </div>
  );
}

export default Day27;
