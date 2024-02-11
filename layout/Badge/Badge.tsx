import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { getBadge } from "@lib/api";

import { withAuth, useAuth } from "@context/Auth";

import Layout from "@components/Layout";
import Heading from "@components/Heading";
import Badge from "@components/Badge";

interface Attendee {
  id: number;
  name: string;
  nickname: string;
}

interface BadgeData {
  id: number;
  name: string;
  description: string;
  tokens: number;
  avatar: string;
  attendees: Attendee[];
}

const Owner: React.FC<{ attendee: Attendee }> = ({ attendee }) => {
  return (
    <div className="border-b-solid mb-5 grid w-full grid-cols-2 border-b-2 border-slate-400 pb-3">
      <div className="text-left">
        <p className="font-ibold">{attendee.nickname || attendee.name}</p>
      </div>
    </div>
  );
};

const BadgeSlug: React.FC = () => {
  const { user } = useAuth();
  const [badge, updateBadge] = useState<BadgeData | null>(null);
  const router = useRouter();
  const { slug } = router.query;
  const maxUsersToShow = 5;

  useEffect(() => {
    getBadge(slug as string)
      .then((response) => {
        updateBadge(response.data.data);
      })
      .catch((_) => router.replace("/404"));
  }, [slug]);

  return (
    badge && (
      <Layout
        title={`${badge?.name} Badge`}
        description="Check who already has this badge"
      >
        <div className="mt-5 grid grid-cols-1 justify-items-center gap-y-8 gap-x-2 lg:grid-cols-2">
          <div className="w-full">
            <Heading text="Badge info" />
            {badge && (
              <Badge
                name={badge.name}
                id={badge.id}
                avatar={badge?.avatar}
                tokens={badge.tokens}
                owned={badge.attendees.some(
                  (attendee) => attendee.id === user.id
                )}
              />
            )}
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
                : null}
            </div>
          </div>
        </div>
      </Layout>
    )
  );
};

export default withAuth(BadgeSlug);
