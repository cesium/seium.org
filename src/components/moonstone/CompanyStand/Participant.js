export default function Participant(props) {
  return (
    <div
      onClick={() => {
        props.onClick(props.user.discord_id);
        props.setSelected(props.index);
      }}
      className={`participant ${props.selected ? "selected" : ""}`}
    >
      <p className="participantName info">{props.user.name}</p>
    </div>
  );
}
