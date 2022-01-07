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
                    <span className="mt-4 w-56 inline-block align-middle items-center text-center content-center">
                        <Button text="REGISTER YOUR TEAM" customStyle="text-white bg-secondary border-gray-900 hover:bg-gray-900" />
                    </span>
                    <span className="opacity-80 text-white text-2xl pl-8 pt-4 align-middle">
                        2-5 people
                    </span>
                </div>
            </div>
        </div>
    );
}