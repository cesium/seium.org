import Dashboard from "/components/moonstone/staff/utils/Dashboard";

import StaffBadgeButton from '/components/moonstone/staff/StaffBadgeButton';
import StaffRedeemButton from "/components/moonstone/staff/StaffRedeemButton";

export default function Awards() {
  return (
    <Dashboard>
        <div>
            <div className="md:mt-16 mt-8">
                <h1 className="font-ibold text-4xl text-iextrabold sm:text-5xl">STAFF</h1>
            </div>
            
            <div className="grid-cols-2 overflow-hidden">
                <div className="mt-6 col-span-1 w-full md:w-1/2 float-left">
                    <div className="border-black border-b-2 mt-14 pb-2">
                        <span className="font-ibold text-xl sm:text-2xl">Badges</span>
                        <span className="font-iregular ml-4 text-md sm:text-lg">disponíveis para atribuir neste momento</span>
                    </div>

                    <div className="mt-5 ml-3 w-3/4">
                        <StaffBadgeButton badge="X" start="9" end="11"/>
                        <StaffBadgeButton badge="X" start="9" end="11"/>
                        <StaffBadgeButton badge="X" start="9" end="11"/>
                        <StaffBadgeButton badge="X" start="9" end="11"/>
                        <StaffBadgeButton badge="X" start="9" end="11"/>
                    </div>
                </div>

                <div className="mt-6 pl-8 col-span-1 w-full md:w-1/2 float-left">
                    <div className="border-black border-b-2 mt-14 pb-2">
                        <span className="font-ibold text-xl sm:text-2xl">Prizes</span>
                    </div>

                    <div className="mt-5 ml-3  w-3/4">
                        <StaffRedeemButton/>
                    </div>
                </div>
            </div>
        </div>
    </Dashboard>
  );
}