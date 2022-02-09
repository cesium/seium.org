import { useState, useEffect } from "react";

import { withAuth, useAuth } from "/components/Auth";

import * as api from "/lib/api";

import Dashboard from "/components/moonstone/user/utils/Dashboard";

import Award from "/components/moonstone/user/awards/Award";

function Awards() {
  const { user } = useAuth();

  const [awards, setAwards] = useState(null);

  useEffect(() => {
    api
      .getAwards()
      .then((response) => {
        setAwards(response.data);
      })
  }, [])

  console.log(awards)

  return (
    <Dashboard href="awards">
      <div>
        <div className="mt-8 md:mt-16">
          <h1 className="text-iextrabold text-secondary text-4xl font-bold sm:text-5xl">
            Awards
          </h1>
          <p className="text-md text-iregular sm:text-lg">
            Win awards with your collected tokens
          </p>
        </div>

        <div className="mt-14 border-b-2 border-black">
          <span className="font-ibold text-xl sm:text-2xl">Achievements</span>
          <span className="text-md ml-24 font-iregular sm:text-lg">
            💰 {user.token_balance} tokens
          </span>
          <span className="text-md ml-24 font-iregular sm:text-lg">
            🏅 {user.badge_count} badges
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 justify-items-center gap-y-8 gap-x-2 lg:grid-cols-4 lg:gap-x-8">

          {awards && awards.map(award => (
            <div key={award.id}>
              <Award
                image={award.image}
                cost={award.price}
                available={award.stock}
                message={`You can redeem ${award.can_buy} more`}
                // message="You already reached the redeem limit"
                enabled={true}
              />
            </div>
          ))}

        </div>
      </div>
    </Dashboard>
  );
}

export default withAuth(Awards);