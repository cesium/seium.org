export default function SponsorPrizeButton({ prize }) {
  return (
    <div className="mt-8 w-auto">
      <button className="m-auto block h-16 w-full rounded-full bg-quinary">
        <p className="font-iregular"> 🏅 Prémio: {prize} </p>
      </button>
    </div>
  );
}
