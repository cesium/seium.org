import { useState } from "react";
import { withAuth } from "/components/Auth";

import Dashboard from "/components/moonstone/user/utils/Dashboard";

import Badge from "/components/moonstone/user/badgedex/Badge";
import Filter from "/components/moonstone/user/badgedex/Filter";

function BadgeButton({ text, val, setValue, selected }) {
  const changeValAll = function () {
    if (val != true) setValue(true);
  };

  const changeValMine = function () {
    if (val == true) setValue(false);
  };

  let onClick;

  if (text == "ALL") {
    onClick = changeValAll;
  } else {
    onClick = changeValMine;
  }

  let button = (
    <button
      className={`${selected ? "bg-quinary" : "bg-white text-opacity-40"}
                        ${text == "ALL" ? "px-12 xl:px-6" : "px-10 xl:px-4"}
                        w-full rounded-full inline-flex items-center text-sm text-black
                       `}
      onClick={onClick}
    >
      {text}
    </button>
  );
  return button;
}

function Badgedex() {
  let badges = [];
  for (var i = 0; i < 18; i++) {
    badges.push(<Badge />);
  }
  const [val, setValue] = useState(true);

  return (
    <Dashboard
      href="badgedex"
      title="BadgeDex"
      description="Explore all existing badges"
    >
      <div className="pt-10 xl:flex xl:flex-auto">
        <div className="flex flex-auto space-x-5">
          <p className="mb-10 xl:mb-0 font-bold text-2xl">Filter by</p>
          <Filter />
        </div>
        <div className="w-auto lg:w-1/2 xl:w-auto font-bold text-2xl grid grid-cols-3 xl:gap-x-8">
          <div>Show</div>
          <BadgeButton
            text="ALL"
            val={val}
            setValue={setValue}
            selected={val}
          />
          <BadgeButton
            text="MINE"
            val={val}
            setValue={setValue}
            selected={!val}
          />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-y-3">
        {badges}
      </div>
    </Dashboard>
  );
}

export default withAuth(Badgedex);
