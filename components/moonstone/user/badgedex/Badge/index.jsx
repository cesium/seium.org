export default function Badge({ name, id, avatar, tokens }) {
  return (
    <div
    // onClick={handleClick}
    >
      <div>
        <img src={avatar} className="" alt="Error"></img>
      </div>
      <div className="grid grid-rows-2 justify-items-center font-iregular">
        <div>{name}</div>
        <div>{tokens} 💰 </div>
      </div>
    </div>
  );
}
