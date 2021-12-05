import Button from "/components/utils/Button";

export default function Hackathon() {
    return (
        <div className="spacing bg-medium_blue py-20">
            <div className="max-w-screen-xl mx-auto">
                <h3 className="px-5 text-2xl text-aqua font-bold">
                    Hackathon 2022
                </h3>
                <h1 className="px-5 text-5xl md:text-6xl lg:text-7xl text-white font-bold">
                    Create products, train skills and learn new technologies
                            <span className="pl-4 pb-8 align-middle items-center text-center content-center">
                                <Button className="items-center" text="REGISTER YOUR TEAM" />
                            </span>
                            <span className="text-gray-100 text-2xl pl-4 align-middle">
                                2-5 people
                            </span>
                </h1>
            </div>
        </div>
    );
}