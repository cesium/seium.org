import "../../../assets/css/rank.css";

export default function RankPlaces(props) {
  return (
    <div className="rankPlace">
      {props.owner === "owner" ? (
        <p className="ownerplace info">{props.rank}</p>
      ) : (
        <p className="place info">{props.rank}</p>
      )}
      {props.owner === "owner" ? (
        <p className="ownerplaceName info">{props.username}</p>
      ) : (
        <p className="placeName info">{props.username}</p>
      )}
      <p className="badge info">{props.badges}</p>
    </div>
  );
}
