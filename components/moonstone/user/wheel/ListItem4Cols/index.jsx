export default function ListItem4({
  name,
  maxQnty,
  qnty,
  prob,
  isLast = false,
}) {
  if (!isLast) {
    var border = "border-b-solid border-b-2";
  }
  return (
    <div className={`w-full mb-5 pb-3 ${border} grid grid-cols-4`}>
      <div className="text-left">
        <p className="font-ibold">{name}</p>
      </div>
      <div className="text-center">
        <p className="text-iregular">{maxQnty}</p>
      </div>
      <div className="text-center">
        <p className="text-iregular">{qnty}</p>
      </div>
      <div className="text-right">
        <p className="font-iregular pr-4">{prob}</p>
      </div>
    </div>
  );
}
