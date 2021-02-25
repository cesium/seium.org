import pluralize from "pluralize";

const Achievement = ({ style, emoji, quantity, item, text = "" }) => {
  return (
    <div className="achievement" style={{ ...style }}>
      <p
        className="achievements"
        style={{ fontSize: "16px", margin: "0", padding: "0" }}
      >{`${emoji} ${pluralize(item, quantity, true)} ${text}`}</p>
    </div>
  );
};

export default Achievement;
