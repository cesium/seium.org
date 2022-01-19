import Dashboard from "/components/moonstone/sponsor/utils/Dashboard";

import SponsorBadgeButton from "/components/moonstone/sponsor/dashboard/SponsorBadgeButton";

export default function SponsorDashboard() {
  return (
    <Dashboard href="dashboard">
      <div>
        <div className="md:mt-16 mt-8">
          <h1 className="font-ibold text-4xl text-iextrabold sm:text-5xl">
            {" "}
            Dashboard{" "}
          </h1>
          <p className="mt-4 text-xl font-iregular">
            Neste local, pode dar badges e premiar os participantes que se
            encontram no seu stand.
          </p>
        </div>

        <div className="col-span-1 w-full md:w-1/2">
          <div className="border-black border-b-2 mt-8 pb-2">
            <span className="font-ibold text-xl sm:text-2xl">Comandos</span>
          </div>

          <div className="mt-5 ml-3  w-3/4">
            <SponsorBadgeButton sponsor="Accenture" />
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
