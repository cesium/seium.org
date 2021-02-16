const Achievement = (props) => {
  return (
    <div className="achievement" style={{ ...props.style }}>
      <p className="achievements">{props.text}</p>
    </div>
  );
};

export default Achievement;
