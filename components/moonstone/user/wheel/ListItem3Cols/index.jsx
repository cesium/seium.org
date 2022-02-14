export default function ListItem3({
  user,
  badge,
  when,
  isLast = false,
  isFullBold = false,
}) {
  if (!isLast) {
    var border = "border-b-solid border-b-2";
  }
  if (isFullBold) {
  }
  return (
    <div className={`mb-5 w-full pb-3 ${border} grid grid-cols-3`}>
      <div className="text-left">
        <p className="font-ibold">{user}</p>
      </div>
      <div className="ml-4 text-left">
        <p className="text-iregular">{badge}</p>
      </div>
      <div className="text-right">
        <p className="text-ibold pr-4 font-bold text-quinary">{when}</p>
      </div>
    </div>
  );
}
