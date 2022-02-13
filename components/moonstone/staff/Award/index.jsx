import Image from "next/image";

export default function Award({ name, image, redeemable, onValueChange }) {
  return (
    <div className="block text-center">
      <div>
        <Image src={image} width="200" height="200" alt="Award"></Image>
        <div className="mt-8 w-auto">
          <label className="font-iregular">Reedem</label>
          <input
            type="number"
            defaultValue="0"
            min="0"
            max={redeemable}
            onChange={onValueChange}
          ></input>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="font-ibold text-lg font-bold">{name}</p>
        <p className="font-iregular">{redeemable} redeemable</p>
      </div>
    </div>
  );
}
