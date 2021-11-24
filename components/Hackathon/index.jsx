import Button from "/components/Button";

export default function Hackathon() {
    return (
        <div className="bg-medium_blue py-5">
            <div className="spacing">
                <h3 className="px-5 text-2xl text-aqua font-bold">
                    Hackathon 2022
                </h3>
                <h1 className="px-5 text-7xl text-white font-bold">
                    Create products, train skills and learn new technologies
                            <span className="pl-4 align-middle"><Button text="REGISTER YOUR TEAM" /></span>
                            <span className="text-gray-100 text-2xl pl-4 align-middle">
                                2-5 people
                            </span>
                </h1>
            </div>
        </div>
    );
}