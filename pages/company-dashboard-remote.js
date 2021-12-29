import Dashboard from '/components/moonstone/sponsor/utils/Dashboard';
import Heading from '/components/moonstone/utils/Heading';
import SponsorPrizeButton from '/components/moonstone/sponsor/dashboard/SponsorPrizeButton';
import SponsorBadgeButton from '/components/moonstone/sponsor/dashboard/SponsorBadgeButton';

export default function CompanyDashboardRemote() {
    return (
        <Dashboard title="Dashboard" description="Neste local, pode dar badges ao participantes que se encontram no seu stand">
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
                <div className="w-full mr-3">
                    <Heading text="Participantes no stand"/>
                </div>

                <div className="w-full ml-3">
                    <Heading text="Comandos"/>

                    <div className="w-3/4 m-auto">
                        <div className="mt-5">
                            <SponsorBadgeButton sponsor="Accenture" all={false}/> 
                            <SponsorPrizeButton prize="Câmara ligada"/>
                            <SponsorPrizeButton prize="Conversa Interessante"/>
                            <SponsorPrizeButton prize="Participante Excecional"/>
                        </div>

                        <div className="mt-24">
                            <SponsorBadgeButton sponsor="Accenture" all={true}/> 
                        </div>
                    </div>
                    
                </div>
            </div>
        </Dashboard>
    );
}