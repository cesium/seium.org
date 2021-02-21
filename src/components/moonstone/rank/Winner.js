export default function Winner(props) {
  return (
    <div className="winner">
      <p className="award info">{props.rank}</p>
      <p className="winnerName info">{props.username}</p>
      <p className="timing info">{props.badges}</p>
    </div>
  );
}
