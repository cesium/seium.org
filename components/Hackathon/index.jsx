import Button from "/components/Button";

export default function Hackathon() {
    return (
        <div className="bg-black py-20">
            <h3 className="px-60 text-2xl text-blue-500 font-bold">
                Hackathon 2022
            </h3>
            <h1 className="px-60 text-9xl text-white font-bold">
                Create products, train skills and learn new
            </h1>
            <div className="grid grid-cols-12">
                <div className="col-start-1 col-end-5">
                    <h1 className="px-60 text-9xl text-white font-bold">
                        technologies.
                    </h1>
                </div>
                <div className="col-start-6 col-end-10 pl-80">
                    <div className="pt-14">
                        <Button text="REGISTER YOUR TEAM" />
                    </div>
                </div>
                <div>
                    <div className="col-start-11 col-end-12 pt-4">
                        <h5 className="pt-14 text-gray-100">
                            2-5 people
                        </h5>
                    </div>
                </div>
            </div>
        </div >
    );
}