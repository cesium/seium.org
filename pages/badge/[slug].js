import Dashboard from "/components/moonstone/Dashboard";
import Heading from '/components/moonstone/Heading';
import Badge from '/components/moonstone/Badge';

function BadgeOwner({user, badge, when}) {
    return (
        <div className="w-full mb-5 pb-3 border-b-solid border-b-2 border-black grid grid-cols-3">
            <div className="text-left">
                <p className="font-bold">{user}</p>
            </div>
            <div className="text-center">
                <p>{badge}</p>
            </div>
            <div className="text-right">
                <p className="font-bold text-aqua">{when}</p>
            </div>
        </div>
    );
}

export default function BadgeSlug() {
    return (
        <Dashboard>
            <div>
                <h1 className="font-bold text-4xl sm:text-5xl">Badge Page</h1>
                <p className="mt-2 text-md sm:text-lg">Check who already has this badge</p>
            </div>

            <div className="grid gap-y-8 gap-x-2 grid-cols-1 md:grid-cols-2 justify-items-center mt-10">
                <div className="w-full">
                    <Heading text="Badge info">
                        <span className="mt-1 mr-12">Talk Badge</span>
                    </Heading>

                    <Badge/>
                </div>

                <div className="w-full">
                    <Heading text="Owners"/>

                    <div className="mt-10">
                        <BadgeOwner user="usernameX" badge="Award" when="19 seconds ago"/>
                        <BadgeOwner user="usernameX" badge="Award" when="19 seconds ago"/>
                        <BadgeOwner user="usernameX" badge="Award" when="19 seconds ago"/>
                        <BadgeOwner user="usernameX" badge="Award" when="19 seconds ago"/>
                        <BadgeOwner user="usernameX" badge="Award" when="19 seconds ago"/>
                        <BadgeOwner user="usernameX" badge="Award" when="19 seconds ago"/>
                        <BadgeOwner user="usernameX" badge="Award" when="19 seconds ago"/>
                    </div>
                </div>
            </div>
        </Dashboard>
    );
}