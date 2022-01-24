import { withAuth } from "/components/Auth";
import Dashboard from "/components/moonstone/staff/utils/Dashboard";

import StaffBadgeButton from "/components/moonstone/staff/StaffBadgeButton";
import StaffRedeemButton from "/components/moonstone/staff/StaffRedeemButton";

function Awards() {
  return (
    <Dashboard>
      <div>
        <div className="mt-8 md:mt-16">
          <h1 className="font-ibold text-4xl sm:text-5xl">Staff</h1>
        </div>

        <div className="grid-cols-2 overflow-hidden">
          <div className="col-span-1 float-left mt-6 w-full md:w-1/2">
            <div className="mt-14 border-b-2 border-black pb-2">
              <span className="font-ibold text-xl sm:text-2xl">Badges</span>
              <span className="text-md ml-4 font-iregular sm:text-lg">
                disponíveis para atribuir neste momento
              </span>
            </div>

            <div className="mt-5 ml-3 w-3/4">
              <StaffBadgeButton badge="X" start="9" end="11" />
              <StaffBadgeButton badge="X" start="9" end="11" />
              <StaffBadgeButton badge="X" start="9" end="11" />
              <StaffBadgeButton badge="X" start="9" end="11" />
              <StaffBadgeButton badge="X" start="9" end="11" />
            </div>
          </div>

          <div className="col-span-1 float-left mt-6 w-full pl-8 md:w-1/2">
            <div className="mt-14 border-b-2 border-black pb-2">
              <span className="font-ibold text-xl sm:text-2xl">Prizes</span>
            </div>

            <div className="mt-5 ml-3  w-3/4">
              <StaffRedeemButton />
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}

export default withAuth(Awards);
