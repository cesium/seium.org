import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { withAuth, useAuth } from "/components/Auth";

import Dashboard from "/components/moonstone/user/utils/Dashboard";
import Heading from "/components/moonstone/utils/Heading";
import Badge from "/components/moonstone/user/badgedex/Badge";
import { getAttendee } from "/lib/api";
import Filter from "/components/moonstone/user/badgedex/Filter";

function Profile() {
  const [attendee, updateAttendee] = useState(null);
  const router = useRouter();
  const { user } = useAuth();
  const { uuid } = router.query;
  const [filter, updateFilter] = useState(null);

  const maxUsersToShow = 5;
  useEffect(() => {
    getAttendee(uuid)
      .then((response) => {
        updateAttendee(response.data);
      })
      .catch((_) => router.replace("/404"));
  }, []);

  console.log(attendee);

  if (!attendee) return null;

  return (
    <Dashboard href="profile" title={`Welcome to ${attendee.name}'s profile!`}>
      <div className="mt-12 grid-cols-2 overflow-hidden">
        <div className="col-span-1 float-left w-full xl:w-1/2">
          <Heading text="User Profile" />
          <div className="pl-6">
            <img
              src={`${attendee.avatar}`}
              className="overflow-hidden rounded-full"
              width="220"
              height="220"
            />
          </div>
        </div>

        <div className="col-span-1 float-right w-full xl:w-1/2 xl:pl-6">
          <div>
            <Heading text="Achievements"></Heading>

            <div className="grid-cols-2 overflow-hidden">
              <div className="col-span-1 float-left w-1/2 font-iregular">
                🏅 {attendee.badge_count} Badges
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Heading text="Badges"></Heading>
        <div className="mt-5 flex flex-auto space-x-5">
          <p className="mb-10 text-2xl font-bold xl:mb-0">Filter by</p>
          <Filter onChange={updateFilter} />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-y-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {attendee.badges
            .filter((badge) => badge.type == filter || filter == null)
            .map((badge) => (
              <Badge key={badge.id} {...badge} />
            ))}
        </div>
      </div>
    </Dashboard>
  );
}

export default withAuth(Profile);
