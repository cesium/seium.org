import Button from "/components/utils/Button";

export default function Hackathon() {
    return (
        <div className="spacing bg-tertiary py-20">
            <div className="max-w-screen-xl mx-auto">
                <div className="px-5">
                    <p className="text-2xl text-quinary font-iextrabold">
                        Hackathon 2022
                    </p>
                    <p className="font-iextrabold text-5xl md:text-6xl lg:text-8xl text-white">
                        Create products, train skills and learn new technologies
                    </p>
                    <div className="sm:flex pt-6 sm:pt-4">
                        <span className="self-center w-56">
                            <Button text="REGISTER YOUR TEAM" customStyle="text-white bg-secondary border-gray-900 hover:bg-gray-900" />
                        </span>
                        <div className="pt-3 sm:pt-0 self-center pl-4 sm:pl-8 opacity-80 text-white text-md">
                            2-5 people
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}