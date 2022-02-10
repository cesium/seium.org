export default function StaffBadgeButton({ badge, start, end, onClick }) {
  return (
    <div className="mt-8 w-auto">
      <button
        onClick={onClick}
        className="m-auto block h-16 w-full rounded-full bg-quinary"
      >
        <p className="font-ibold font-bold">🥇 Dar Badge {badge}</p>
        <p className="font-iregular text-slate-200">
          Atribuível entre as {start}-{end}
        </p>
      </button>
    </div>
  );
}
