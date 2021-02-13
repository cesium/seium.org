import Activity from "../../carousels/activity";
import CoffeeBreak from "../../carousels/coffeeBreak";

let contentStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  maxWidth: "450px",
};

function Day25() {
  return (
    <div style={contentStyle}>
      <Activity
        start="9:30"
        end="11:30"
        bigTitle="DevOps: The Next Generation!"
        title="Workshop"
        animator="Critical Software"
      />
      <Activity
        start="9:30"
        end="11:30"
        bigTitle="Primavera"
        title="Workshop"
        animator="Primavera"
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="TBD"
        title="Talk"
        start="12:00"
        end="13:00"
        animator="TBD"
      />
      <CoffeeBreak name="Lunch Break" />
      <Activity
        main="yes"
        bigTitle="TBD"
        title="Talk"
        start="14:00"
        end="15:00"
        animator="TBD"
      />
      <Activity
        main="yes"
        bigTitle="Developing software remotely and asynchronously"
        title="Talk"
        start="15:00"
        end="16:00"
        animator="Gonçalo Silva (Doist)"
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="BNP Paribas"
        title="Pitch"
        start="16:30"
        end="16:45"
      />
      <Activity
        main="yes"
        bigTitle="OutSystems"
        title="Pitch"
        start="16:45"
        end="17:00"
      />
      <Activity
        main="yes"
        bigTitle="Google HashCode"
        start="17:30"
        end="22:00"
      />
      <Activity
        main="yes"
        bigTitle="Discord Social Meeting"
        title="Activity"
        start="22:00"
        end="23:00"
      />
    </div>
  );
}

export default Day25;
