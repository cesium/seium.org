import AttendeeMention from "@components/AttendeeMention";
import PaginatedSearch from "@components/PaginatedSearch";
import Layout from "@components/Layout";
import { IPublicAttendee, IBadge, IStaff, withAuth } from "@context/Auth";
import { useEffect, useState } from "react";
import Table, { TableColumn } from "@components/Table";

interface IBadgeAward {
  attendee: IPublicAttendee;
  badge: IBadge;
  staff: IStaff;
  timestamp: string;
}

function displayTimestamp(timestamp: string) {
  return timestamp; //TODO
}

export function BadgeHistory() {
  const x = {
    timestamp: "2023-02-16T15:34:27Z",
    attendee: {
      avatar:
        "https://sei24-staging.s3.amazonaws.com/uploads/attendee/avatars/f7c90ab0-aa79-4528-bff3-3ad6a811ac83/original.png?v=63872645262",
      badge_count: 13,
      badges: [
        {
          avatar: null,
          begin: "2023-02-14T09:00:00Z",
          description: "Visita o stand da IT Sector",
          end: "2023-02-16T19:00:00Z",
          id: 28,
          name: "IT Sector",
          tokens: 40,
          type: 4,
        },
        {
          avatar: null,
          begin: "2023-02-15T09:00:00Z",
          description: "Visita o stand da Continental",
          end: "2023-02-17T17:00:00Z",
          id: 29,
          name: "Continental",
          tokens: 40,
          type: 4,
        },
      ],
      course: 2,
      cv: "https://sei24-staging.s3.amazonaws.com/uploads/attendee/cvs/f7c90ab0-aa79-4528-bff3-3ad6a811ac83/original.pdf?v=63872641922",
      entries: 14,
      id: "f7c90ab0-aa79-4528-bff3-3ad6a811ac83",
      name: "attendee69",
      nickname: "jmf",
      prizes: [
        {
          avatar:
            "https://sei24-staging.s3.amazonaws.com/uploads/prize/avatars/14/original.png?v=63870223172",
          id: 14,
          is_redeemable: false,
          name: "Nada",
          not_redeemed: 1,
        },
      ],
      redeemables: [
        {
          id: 18,
          image:
            "https://sei24-staging.s3.amazonaws.com/uploads/redeemable/avatars/18/original.png?v=63870223178",
          name: "Caneca SEI '23",
          not_redeemed: 1,
          price: 0,
          quantity: 1,
        },
      ],
      token_balance: 110,
    },
    badge: {
      avatar: null,
      begin: "2023-02-14T09:00:00Z",
      description: "Visita o stand da IT Sector",
      end: "2023-02-16T19:00:00Z",
      id: 28,
      name: "IT Sector",
      tokens: 40,
      type: 4,
    },
    staff: {
      email: "staff13@seium.org",
      id: 13,
      type: "staff",
      is_admin: false
    },
  };
  const fetchAwards = () => [x,x,x,x,x];

  return (
    <Layout title="Badge History" description="Check the history of awarded badges throughout the event">
      <PaginatedSearch<IBadgeAward> fetchElems={fetchAwards}
        showElems={(ee) =>
          <Table<IBadgeAward> elems={ee}>
            <TableColumn<IBadgeAward> header="Attendee" getter={(e) => <AttendeeMention attendee={e.attendee} />} />
            <TableColumn<IBadgeAward> header="Badge" getter={(e) => e.badge.name } />
            <TableColumn<IBadgeAward> header="Staff" getter={(e) => e.staff.email } />
            <TableColumn<IBadgeAward> header="Timestamp" getter={(e) => displayTimestamp(e.timestamp) } />
          </Table>
        }
        limit={50}
      />
    </Layout>
  );
}

export default withAuth(BadgeHistory);