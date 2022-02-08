export default function Table({ list, user, maxUsersToShow }) {
  const toShow = list.slice(0, Math.min(maxUsersToShow, list.length));
  const rows = toShow.map((entry, id) => (
    <div
      key={id}
      className="mb-2 flex h-auto border-t-2 border-t-slate-700 pt-2"
    >
      <div
        className={`w-1/3 text-left font-iregular ${
          entry.id == user ? "text-quinary" : ""
        }`}
      >
        {id + 1}
      </div>
      <div
        className={`w-1/3 text-center font-ibold ${
          entry.id == user ? "text-quinary" : ""
        }`}
      >
        {entry.name}
      </div>
      <div
        className={`w-1/3 text-right font-iregular ${
          entry.id == user ? "text-quinary" : ""
        }`}
      >
        {entry.badges}
      </div>
    </div>
  ));

  let userId = 0;
  let userBadges = 0;
  let userName = "";
  for (var i = 0; i < list.length; i++) {
    if (list[i].id == user) {
      userId = i;
      userName = list[i].name;
      userBadges = list[i].badges;
      break;
    }
  }

  let extraUser =
    userId < maxUsersToShow ? (
      <></>
    ) : (
      <div className="h-8 grid-cols-3 border-t-2 border-t-slate-700 pt-2 pb-2">
        <div className="col-span-1 float-left w-1/3 text-left font-iregular text-quinary">
          {userId + 1}
        </div>
        <div className="col-span-1 float-left w-1/3 text-center font-ibold text-quinary">
          {userName}
        </div>
        <div className="text-aqua col-span-1 float-left w-1/3 text-right font-iregular text-quinary">
          {userBadges}
        </div>
      </div>
    );

  return (
    <div className="overflow-hidden">
      <div className="mt-12 h-8 grid-cols-3 pt-2">
        <div className="col-span-1 float-left w-1/3 text-left font-iregular">
          Rank
        </div>
        <div className="col-span-1 float-left w-1/3 text-center font-iregular">
          Name
        </div>
        <div className="col-span-1 float-left w-1/3 text-right font-iregular">
          Badges
        </div>
      </div>

      {rows}
      {extraUser}
    </div>
  );
}
