import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { withAuth } from "/components/Auth";

import { getBadge } from "/lib/api";

import Dashboard from "/components/moonstone/user/utils/Dashboard";
import Heading from "/components/moonstone/utils/Heading";
import Badge from "/components/moonstone/user/badgedex/Badge";

function BadgeOwner({ user, badge, when }) {
  return (
    <div className="border-b-solid mb-5 grid w-full grid-cols-3 border-b-2 border-black pb-3">
      <div className="text-left">
        <p className="font-ibold">{user}</p>
      </div>
      <div className="text-center">
        <p className="text-iregular">{badge}</p>
      </div>
      <div className="text-right">
        <p className="text-ibold font-bold text-quinary">{when}</p>
      </div>
    </div>
  );
}

function BadgeSlug() {
  const [badge, updateBadge] = useState(null);
  const router = useRouter();
  useEffect(() => {
    getBadge(router.query.slug)
      .then((response) => {
        updateBadge(response.data.data);
      })
      .catch((_) => router.replace("/404"));
  }, [badge]);

  const owners = badge
    ? badge.attendees.map((entry, id) => (
        <BadgeOwner
          key={id}
          user={entry.name}
          badge={badge.name}
          when="19 seconds ago"
        />
      ))
    : [];

  return (
    <Dashboard>
      <div>
        <h1 className="font-iextrabold text-4xl sm:text-5xl">Badge Page</h1>
        <p className="text-md mt-2 font-iregular sm:text-lg">
          Check who already has this badge
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 justify-items-center gap-y-8 gap-x-2 lg:grid-cols-2">
        <div className="w-full">
          <Heading text="Badge info">
            <span className="mt-1 mr-12 font-iregular">Talk Badge</span>
          </Heading>

          <Badge {...badge} />
        </div>

        <div className="w-full">
          <Heading text="Owners" />

          <div className="mt-10">{owners}</div>
        </div>
      </div>
    </Dashboard>
  );
}

export default withAuth(BadgeSlug);
