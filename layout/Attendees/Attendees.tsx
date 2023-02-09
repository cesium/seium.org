import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { withAuth } from "@context/Auth";

import Badge from "@components/Badge";
import BadgeFilter from "@components/BadgeFilter";

import Dashboard from "./components/Dashboard";
import Heading from "@components/Heading";
import { getAttendee, isAttendeeRegistered } from "@lib/api";

function Profile() {
  const [attendee, updateAttendee] = useState(null);
  const router = useRouter();
  const { uuid } = router.query;
  const [filter, updateFilter] = useState(null);

  useEffect(() => {
    getAttendee(uuid)
      .then((response) => {
        updateAttendee(response.data);
      })
      .catch((error) => {
        router.replace("/404");
      });
  }, []);

  if (!attendee) return null;
  return (
    <Dashboard
      href="profile"
      title={`Welcome to ${attendee.name}'s profile!`}
      description={`Welcome to your profile!`}
    >
      <div className="mt-12 grid-cols-2 overflow-hidden">
        <div className="col-span-1 float-left w-full xl:w-1/2">
          <Heading text="User Profile"></Heading>
          <div className="pl-6">
            <div className="relative h-[220px] w-[220px] overflow-hidden rounded-full hover:border-2 hover:border-quinary">
              <img
                src={attendee.avatar}
                alt="Avatar Photo"
                className="rounded-full"
              />
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
          <p className="mb-10 text-2xl font-bold xl:mb-0">Filter by</p>
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
    </Dashboard>
  );
}

export default withAuth(Profile);
