import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { withAuth } from "@context/Auth";

import Badge from "@components/Badge";
import BadgeFilter from "@components/BadgeFilter";

import Layout from "@components/Layout";
import Heading from "@components/Heading";
import { getAttendeeByID, getAttendeeByUsername } from "@lib/api";

function Profile() {
  const [attendee, updateAttendee] = useState(null);
  const [filter, updateFilter] = useState(null);

  const router = useRouter();
  const { uuid } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAttendeeByID(uuid);
        updateAttendee(response.data);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          try {
            const response = await getAttendeeByUsername(uuid);
            updateAttendee(response.data);
          } catch (usernameError) {
            router.replace("/404");
          }
        } else {
          router.replace("/404");
        }
      }
    };

    fetchData();
  }, []);

  const getAttendeeDisplayName = (attendee): string => {
    if (attendee.name.endsWith("s")) {
      return `${attendee.name}'`;
    }

    return `${attendee.name}'s`;
  };

  if (!attendee) return null;

  return (
    <Layout title={`Welcome to ${getAttendeeDisplayName(attendee)} profile!`}>
      <div className="mt-12 grid-cols-2 overflow-hidden">
        <div className="col-span-1 float-left w-full xl:w-1/2">
          <Heading text="User Profile"></Heading>
          <div className="pl-6">
            <div className="relative h-[220px] w-[220px] select-none overflow-hidden rounded-full border-2 border-white hover:border-quinary">
              {attendee.avatar == null ? (
                <img
                  src="/images/mascot-head.png"
                  alt="Avatar Photo"
                  className="h-[220px] w-[220px] object-cover"
                />
              ) : (
                <img
                  src={attendee.avatar}
                  alt="Avatar Photo"
                  className="h-[220px] w-[220px] object-cover"
                />
              )}
            </div>
          </div>
        </div>

        <div className="col-span-1 float-right w-full xl:w-1/2 xl:pl-6">
          <div>
            <Heading text="Achievements">
              <button
                className="w-full items-center rounded-full border border-quinary bg-quinary py-2 px-4 text-center font-iregular text-sm text-secondary opacity-0 shadow-sm"
                type="submit"
                form="profile-form"
                disabled
              ></button>
            </Heading>
            <div className="grid-cols-2 overflow-hidden text-white">
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
          <p className="mb-10 select-none text-2xl font-bold xl:mb-0">
            Filter by
          </p>
          <BadgeFilter onChange={updateFilter} />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-y-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {attendee.badges
            .filter((badge) => badge.type == filter || filter == null)
            .map((badge) => (
              <Badge key={badge.id} {...badge} />
            ))}
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(Profile);
