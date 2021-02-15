const Card = (props) => {
  return (
    <div className="card-container" style={{ ...props.style }}>
      <img src={props.img} alt="props.alt" />
      <div className="card">
        <h3>{props.quote}</h3>
      </div>
    </div>
  );
};
export default Card;
