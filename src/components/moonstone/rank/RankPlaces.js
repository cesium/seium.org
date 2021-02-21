import "../../../assets/css/rank.css";

export default function RankPlaces(props) {
  return (
    <div className="rankPlace">
      <p className="place info">{props.rank}</p>
      <p className="placeName info">{props.username}</p>
      <p className="badge info">{props.badges}</p>
    </div>
  );
}
