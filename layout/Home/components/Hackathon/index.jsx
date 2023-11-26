import Button from "@components/Button";

export default function Hackathon() {
  return (
    <div className="spacing bg-tertiary py-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="px-5">
          <p className="font-terminal-uppercase text-2xl text-quinary">
            Hackathon 2022
          </p>
          <p className="font-terminal-uppercase text-4xl text-white xs:text-5xl md:text-6xl lg:text-8xl">
            Create products, train skills and learn new technologies
          </p>
          <div className="pt-6 sm:flex sm:pt-4">
            <span className="w-56 self-center">
              <a href="https://forms.gle/8aSEUubkjei1Dpym6">
                <Button
                  title="REGISTER YOUR TEAM"
                  customStyle="text-white bg-secondary border-quaternary hover:border-quinary"
                />
              </a>{" "}
            </span>
            <div className="text-md self-center pt-3 pl-4 text-white opacity-80 sm:pt-0 sm:pl-8">
              3-5 people
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
