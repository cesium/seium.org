export default function SponsorBadgeButton({ sponsor, all }) {
  let text = all ? (
    <>
      a <b className="font-ibold">todos</b> na sala
    </>
  ) : (
    sponsor
  );
  return (
    <div className="mt-8 w-auto">
      <button className="m-auto block h-16 w-full rounded-full bg-quinary">
        <p className="font-iregular"> 🏅 Dar Badge {text} </p>
      </button>
    </div>
  );
}
