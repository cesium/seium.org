export default function ListItem4Cols({
  name,
  maxQuantity,
  quantity,
  img,
  isLast = false,
}) {
  if (!isLast) {
    var border = "border-b-solid border-b-2";
  }
  return (
    <div className={`mb-5 w-full pb-3 ${border} grid grid-cols-6 items-center`}>
      <div className="select-none justify-self-center">
        <img src={img} className="w-6" />
      </div>
      <div className="col-span-3 text-left">
        <p className="font-ibold">{name}</p>
      </div>
      <div className="text-center">
        <p className="text-iregular">
          {maxQuantity > 1000 ? "∞" : maxQuantity}
        </p>
      </div>
      <div className="text-center">
        <p className="text-iregular pr-4">{quantity > 1000 ? "∞" : quantity}</p>
      </div>
    </div>
  );
}
