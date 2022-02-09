import Image from "next/image";

export default function Award({ image, cost, available, message, enabled }) {
  return (
    <div className="block text-center">
      <div className={enabled ? "opacity-100" : "opacity-50"}>
        <img src={image} width="200" height="200" alt="Award"/>
        <div className="mt-8 w-auto">
          <button className="m-auto block h-20 w-64 rounded-full bg-quinary">
            <p className="font-ibold font-bold">REDEEM</p>
            <p className="font-iregular">{cost} tokens 💰</p>
          </button>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="font-ibold font-bold">{available} available</p>
        <p className="font-iregular">{message}</p>
      </div>
    </div>
  );
}
