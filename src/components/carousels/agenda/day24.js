import Activity from "../../carousels/activity";
import CoffeeBreak from "../../carousels/coffeeBreak";

let contentStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  maxWidth: "450px",
};

function Day24() {
  return (
    <div style={contentStyle}>
      <Activity
        start="9:30"
        end="11:30"
        bigTitle="Workshop"
        title="Workshop"
        animator="Company"
      />
      <Activity
        start="9:30"
        end="11:30"
        bigTitle="Workshop"
        title="Workshop"
        animator="Company"
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="Talk"
        title="Talk"
        start="12:00"
        end="13:00"
        animator="Speaker"
      />
      <CoffeeBreak name="Lunch Break" />
      <Activity
        main="yes"
        bigTitle="Talk"
        title="Talk"
        start="14:00"
        end="15:00"
        animator="Speaker"
      />
      <Activity
        main="yes"
        bigTitle="Sistemas de Larga Escala - O que esperar da indústria"
        title="Talk"
        start="15:00"
        end="16:00"
        animator="Tiago Carção (Glovo)"
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="Ubiwhere"
        title="Pitch"
        start="16:30"
        end="16:45"
      />
      <Activity
        main="yes"
        bigTitle="Pitch"
        title="Pitch"
        start="16:45"
        end="17:00"
      />
      <Activity
        main="yes"
        bigTitle="Tertulia"
        title="Tertulia"
        start="17:00"
        end="18:00"
      />
      <Activity
        main="yes"
        bigTitle="Activity"
        title="Activity"
        start="21:00"
        end="23:00"
      />
    </div>
  );
}

export default Day24;
