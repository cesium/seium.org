export default function Winner(props) {
  return (
    <div className="winner">
      <p className="winnerName info">{props.user}</p>
      <p className="award info">{props.award}</p>
      <p className="timing info">{props.time}</p>
    </div>
  );
}
