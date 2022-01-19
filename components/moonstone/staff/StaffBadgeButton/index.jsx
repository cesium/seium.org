export default function StaffBadgeButton({ badge, start, end }) {
  return (
    <div className="w-auto mt-8">
      <button className="block m-auto bg-quinary rounded-full w-full h-16">
        <p className="font-bold font-ibold">🥇 Dar Badge {badge}</p>
        <p className="font-iregular text-slate-200">
          Atribuível entre as {start}-{end}
        </p>
      </button>
    </div>
  );
}
