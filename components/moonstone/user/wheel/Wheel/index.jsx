import { getRouteMatcher } from "next/dist/shared/lib/router/utils";

function toHex(number) {
  var res = number.toString(16);
  res = res.length == 1 ? "0" + res : res;
  return res.toUpperCase();
}

export default function Wheel({ steps, angle }) {
  var colors = [];

  for (var i = 0; i < steps; i++) {
    colors.push((255.0 * i) / (steps - 1));
  }
  const percentage = 100 / steps + "%";
  colors = colors.map((entry) => "#36DBEE" + toHex(entry));

  const styleGlobal = {
    background: "conic-gradient(" + colors.join(",") + ")",
    transform: "rotate(" + angle + "deg)",
  };

  var borders = [];
  for (var i = 0; i <= steps; i++) {
    borders.push(i * (360 / steps));
  }

  const style = {
    position: "absolute",
    top: "50%",
    transformOrigin: "0% 50%",
    left: "50%",
    height: "1px",
    width: "50%",
    transform: "rotate(10deg)",
    backgroundColor: "white",
  };

  borders = borders.map((entry) => {
    var st = JSON.parse(JSON.stringify(style)); //Create copy of value
    st.transform = "rotate(" + entry + "deg)";

    return <div key={entry} style={st}></div>;
  });

  return (
    <div className="relative h-full w-full">
      <div className="h-full w-full rounded-full" style={styleGlobal}>
        {borders}
      </div>
      <div className="absolute top-1/2 left-1/2 -ml-6 -mt-6 h-full w-full font-iregular text-5xl text-tertiary">
        ↑
      </div>
    </div>
  );
}
