import Button from "/components/utils/Button";

export default function Hackathon() {
  return (
    <div className="py-20 spacing bg-tertiary">
      <div className="max-w-screen-xl mx-auto">
        <div className="px-5">
          <p className="text-2xl text-quinary font-iextrabold">
            Hackathon 2022
          </p>
          <p className="text-5xl text-white font-iextrabold md:text-6xl lg:text-8xl">
            Create products, train skills and learn new technologies
          </p>
          <div className="pt-6 sm:flex sm:pt-4">
            <span className="self-center w-56">
              <a href="https://forms.gle/8aSEUubkjei1Dpym6">
                <Button
                  text="REGISTER YOUR TEAM"
                  customStyle="text-white bg-secondary border-gray-900 hover:bg-gray-900"
                />
              </a>{" "}
            </span>
            <div className="self-center pt-3 pl-4 text-white sm:pt-0 sm:pl-8 opacity-80 text-md">
              2-5 people
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
