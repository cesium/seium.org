import Dashboard from "/components/moonstone/user/utils/Dashboard";

import Award from "/components/moonstone/user/awards/Award";

export default function Awards() {
  return (
    <Dashboard href="awards">
      <div>
        <div className="md:mt-16 mt-8">
          <h1 className="font-bold text-4xl text-iextrabold sm:text-5xl">
            Awards
          </h1>
          <p className="text-md sm:text-lg text-iregular">
            Win awards with your collected tokens
          </p>
        </div>

        <div className="border-black border-b-2 mt-14">
          <span className="font-ibold text-xl sm:text-2xl">Achievements</span>
          <span className="font-iregular ml-24 text-md sm:text-lg">
            💰170 tokens
          </span>
          <span className="font-iregular ml-24 text-md sm:text-lg">
            🏅68 badges
          </span>
        </div>

        <div className="grid gap-y-8 gap-x-2 grid-cols-1 lg:grid-cols-4 justify-items-center lg:gap-x-8 mt-10">
          <div>
            <Award
              image="/images/speakers/joaooliveira.png"
              cost={100}
              available={10}
              message="You can redeem 1 more"
              enabled={true}
            />
          </div>

          <div>
            <Award
              image="/images/speakers/joaooliveira.png"
              cost={100}
              available={10}
              message="You can redeem 2 more"
              enabled={true}
            />
          </div>

          <div>
            <Award
              image="/images/speakers/joaooliveira.png"
              cost={100}
              available={10}
              message="You can redeem 2 more"
              enabled={true}
            />
          </div>

          <div>
            <Award
              image="/images/speakers/joaooliveira.png"
              cost={100}
              available={10}
              message="You already reached the redeem limit"
              enabled={false}
            />
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
