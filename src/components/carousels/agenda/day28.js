import Activity from "../../carousels/activity";

let contentStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  maxWidth: "450px",
};

function Day28() {
  return (
    <div style={contentStyle}>
      <Activity
        main="yes"
        bigTitle="Hackathon (42 hours)"
        start="00:00"
        end="15:00"
      />
      <Activity
        main="yes"
        bigTitle="Hackathon Final Pitches and Closing Session"
        start="15:00"
        end="17:00"
      />
    </div>
  );
}

export default Day28;
