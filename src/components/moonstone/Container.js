export default function Container(props) {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    minHeight: "100%",
    overflow: "auto",
    backgroundColor: "#181818",
  };

  return (
    <div className="bigContainer" style={{ ...containerStyle, ...props.style }}>
      <div
        className={"container".concat(props.className)}
        style={{
          ...{ maxWidth: "1440px", paddingLeft: "40px" },
          ...props.style,
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
