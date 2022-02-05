import { withoutAuth } from "/components/Auth";
import Dashboard from "/components/moonstone/user/utils/Dashboard";

import Award from "/components/moonstone/user/awards/Award";

function Awards() {
  return (
    <Dashboard href="awards">
      <div>
        <div className="mt-8 md:mt-16">
          <h1 className="text-iextrabold text-4xl font-bold sm:text-5xl">
            Awards
          </h1>
          <p className="text-md text-iregular sm:text-lg">
            Win awards with your collected tokens
          </p>
        </div>

        <div className="mt-14 border-b-2 border-black">
          <span className="font-ibold text-xl sm:text-2xl">Achievements</span>
          <span className="text-md ml-24 font-iregular sm:text-lg">
            💰170 tokens
          </span>
          <span className="text-md ml-24 font-iregular sm:text-lg">
            🏅68 badges
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 justify-items-center gap-y-8 gap-x-2 lg:grid-cols-4 lg:gap-x-8">
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

export default withoutAuth(Awards);
