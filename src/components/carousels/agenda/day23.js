import Activity from "../../carousels/activity";
import CoffeeBreak from "../../carousels/coffeeBreak";

let contentStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  maxWidth: "450px",
};

function Day23() {
  return (
    <div style={contentStyle}>
      <Activity main="yes" start="10:00" end="11:00" title="Opening session" />
      <Activity
        main="yes"
        start="11:00"
        end="11:30"
        title="Prizes and Contests"
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
        bigTitle="We Can Do It!"
        title="Talk"
        start="15:00"
        end="16:00"
        animator="João Oliveira (Tonic App)"
        day={0}
        speakerID="joaooliveira"
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="TBD"
        title="Pitch"
        start="16:30"
        end="16:45"
      />
      <Activity
        main="yes"
        bigTitle="TBD"
        title="Pitch"
        start="16:45"
        end="17:00"
      />
      <Activity
        main="yes"
        bigTitle="TBD"
        title="Tertulia"
        start="17:00"
        end="18:00"
      />
      <Activity
        bigTitle="CS:GO Tournament"
        title="Activity"
        start="21:00"
        end="23:00"
      />
      <Activity
        bigTitle="Chess Tournament"
        title="Activity"
        start="21:00"
        end="23:00"
      />
    </div>
  );
}

export default Day23;
