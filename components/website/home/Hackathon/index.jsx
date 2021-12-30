import Button from "/components/utils/Button";

export default function Hackathon() {
    return (
        <div className="spacing bg-tertiary py-20">
            <div className="max-w-screen-xl mx-auto">
                <h3 className="px-5 text-2xl text-quinary font-iextrabold">
                    Hackathon 2022
                </h3>
                <h1 className="font-iextrabold px-5 text-5xl md:text-6xl lg:text-8xl text-white">
                    Create products, train skills and learn new technologies
                            <span className="w-56 inline-block pl-4 pb-8 align-middle items-center text-center content-center">
                                <Button className="items-center" text="REGISTER YOUR TEAM" fg_color="white"/>
                            </span>
                            <span className="text-gray-100 text-2xl pl-4 align-middle">
                                2-5 people
                            </span>
                </h1>
            </div>
        </div>
    );
}