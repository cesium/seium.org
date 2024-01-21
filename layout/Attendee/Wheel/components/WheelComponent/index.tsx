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

  colors = colors.map((entry) => "#FF800D" + toHex(entry));

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
      <div
        className="h-full w-full rounded-full bg-quinary"
        style={styleGlobal}
      >
        {borders}
      </div>
      <div className="absolute top-0 flex h-full w-full select-none flex-wrap content-center justify-center">
        <img className="mb-6 h-12 w-12 " src="/images/wheel-arrow.svg" />
      </div>
    </div>
  );
}
