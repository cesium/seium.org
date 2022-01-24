import { withAuth } from "/components/Auth";
import Dashboard from "/components/moonstone/sponsor/utils/Dashboard";
import Heading from "/components/moonstone/utils/Heading";
import SponsorPrizeButton from "/components/moonstone/sponsor/dashboard/SponsorPrizeButton";
import SponsorBadgeButton from "/components/moonstone/sponsor/dashboard/SponsorBadgeButton";
import ParticipantSelector from "/components/moonstone/sponsor/dashboard/ParticipantSelector";

function SponsorDashboard() {
  const participants = ["Nome 1", "Nome 2", "Nome 3", "Nome 4"];

  const onParticipantChange = (p) => {};

  return (
    <Dashboard
      title="Dashboard"
      description="Neste local, pode dar badges ao participantes que se encontram no seu stand"
    >
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2">
        <div className="mr-3 w-full">
          <Heading text="Participantes no stand" />
          <div className="mt-8 w-auto">
            <button className="bg-aqua m-auto block h-10 w-32 rounded-full">
              <p className="font-iregular">Refresh</p>
            </button>
          </div>
          <ParticipantSelector
            participants={participants}
            onParticipantChange={onParticipantChange}
          />
        </div>

        <div className="ml-3 w-full">
          <Heading text="Comandos" />

          <div className="m-auto w-3/4">
            <div className="mt-5">
              <SponsorBadgeButton sponsor="Accenture" all={false} />
              <SponsorPrizeButton prize="Câmara ligada" />
              <SponsorPrizeButton prize="Conversa Interessante" />
              <SponsorPrizeButton prize="Participante Excecional" />
            </div>

            <div className="mt-24">
              <SponsorBadgeButton sponsor="Accenture" all={true} />
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}

export default withAuth(SponsorDashboard);
