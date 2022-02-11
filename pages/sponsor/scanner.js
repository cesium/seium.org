import { withAuth } from "/components/Auth";
import Dashboard from "/components/moonstone/sponsor/utils/Dashboard";

import SponsorBadgeButton from "/components/moonstone/sponsor/dashboard/SponsorBadgeButton";

function SponsorDashboard() {
  return (
    <Dashboard href="dashboard">
      <div className="mt-8 md:mt-16">
        <h1 className="text-iextrabold font-ibold text-4xl sm:text-5xl">
          Dashboard
        </h1>
        <p className="mt-4 font-iregular text-xl">
          Neste local, pode dar badges e premiar os participantes que se
          encontram no seu stand.
        </p>
      </div>

      {/* TODO */}
    </Dashboard>
  );
}

export default withAuth(SponsorDashboard);
