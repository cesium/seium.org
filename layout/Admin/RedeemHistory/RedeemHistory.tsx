import AttendeeMention from "@components/AttendeeMention";
import PaginatedSearch from "@components/PaginatedSearch";
import Layout from "@components/Layout";
import { IPublicAttendee, IPrize, IStaff, withAuth, IRedeemable, IAttendee } from "@context/Auth";
import { useEffect, useState } from "react";
import Table, { TableColumn } from "@components/Table";

interface IRedeem {
  attendee: IPublicAttendee;
  redeemable?: IRedeemable;
  prize?: IPrize;
  quantity: number;
  timestamp: string;
}

enum RedeemType {
  Prize,
  Redeemable
}

interface IRedeemDetails {
  attendee: IPublicAttendee;
  type: RedeemType;
  name: string;
  image: string;
  quantity: string;
  timestamp: string;
}

function redeemDetails(redeem : IRedeem) : IRedeemDetails {
  if (redeem.prize) {
    return {
      attendee: redeem.attendee,
      type: RedeemType.Prize,
      name: redeem.prize.name,
      image: redeem.prize.avatar,
      quantity: redeem.quantity.toString(),
      timestamp: redeem.timestamp
    }
  } else {
    return {
      attendee: redeem.attendee,
      type: RedeemType.Redeemable,
      name: redeem.redeemable.name,
      image: redeem.redeemable.image,
      quantity: "-",
      timestamp: redeem.timestamp
    }
  }
}

function displayRedeemType(type: RedeemType) {
  switch (type) {
    case RedeemType.Prize:      return "Prize";
    case RedeemType.Redeemable: return "Shop Item"
  }
}

function displayTimestamp(timestamp: string) {
  return timestamp; //TODO
}

export function RedeemHistory() {
  const x: IRedeem = {
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
    redeemable: {
      id: 18,
      image:
        "https://sei24-staging.s3.amazonaws.com/uploads/redeemable/avatars/18/original.png?v=63870223178",
      name: "Caneca SEI '23",
      not_redeemed: 1,
      price: 0,
      quantity: 1,
    },
    quantity: 1
  };
  const y:IRedeem = {
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
    prize: {
      avatar:
        "https://sei24-staging.s3.amazonaws.com/uploads/prize/avatars/14/original.png?v=63870223172",
      id: 69,
      is_redeemable: true,
      name: "Air Fryer",
      not_redeemed: 1,
    },
    quantity: 1
  };
  const fetchRedeems = (query:string , offset:number, limit:number) => [x,y,x,x,y];
  
  return (
    <Layout title="Redeem History" description="Check the history of redeemed wheel prizes and shop items throughout the event">
      <PaginatedSearch<IRedeem> fetchElems={fetchRedeems}
        showElems={(ee) =>
          <Table<IRedeemDetails> elems={ee.map(redeemDetails)}>
            <TableColumn<IRedeemDetails> header="Attendee" getter={(e) => <AttendeeMention attendee={e.attendee} />} />
            <TableColumn<IRedeemDetails> header="Type" getter={(e) => displayRedeemType(e.type) } />
            <TableColumn<IRedeemDetails> header="Redeem" getter={(e) => e.name } />
            <TableColumn<IRedeemDetails> header="Quantity" getter={(e) => e.quantity } />
            <TableColumn<IRedeemDetails> header="Timestamp" getter={(e) => e.timestamp } />
          </Table>
        }
        limit={50}
      />
    </Layout>
  );
}

export default withAuth(RedeemHistory);
