import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { withAuth } from "/components/Auth";

import { getBadge } from "/lib/api";

import Dashboard from "/components/moonstone/user/utils/Dashboard";
import Heading from "/components/moonstone/utils/Heading";
import Badge from "/components/moonstone/user/badgedex/Badge";

function Owner({ attendee }) {
  return (
    <div className="border-b-solid mb-5 grid w-full grid-cols-2 border-b-2 border-slate-400 pb-3">
      <div className="text-left">
        <p className="font-ibold">{attendee.nickname || attendee.name}</p>
      </div>
    </div>
  );
}

function BadgeSlug() {
  const [badge, updateBadge] = useState({});
  const router = useRouter();
  const { slug } = router.query;
  const maxUsersToShow = 5;

  useEffect(() => {
    getBadge(slug)
      .then((response) => {
        updateBadge(response.data.data);
      })
      .catch((_) => router.replace("/404"));
  }, [slug]);

  return (
    <Dashboard>
      <div>
        <h1 className="font-iextrabold text-4xl sm:text-5xl">{badge.name}</h1>
        <p className="text-md mt-2 font-iregular sm:text-lg">
          Check who already has this badge
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 justify-items-center gap-y-8 gap-x-2 lg:grid-cols-2">
        <div className="w-full">
          <Heading text="Badge info" />
          <Badge {...badge} />
        </div>

        <div className="w-full">
          <Heading text="Owners" />
          <div className="mt-10">
            {badge && badge.attendees
              ? badge.attendees.map(
                  (attendee, i) =>
                    i < maxUsersToShow && (
                      <Owner key={attendee.id} attendee={attendee} />
                    )
                )
              : []}
          </div>
        </div>
      </div>
    </Dashboard>
  );
}

export default withAuth(BadgeSlug);
