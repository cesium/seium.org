import { IAttendee, useAuth } from "@context/Auth";
import { ROLES } from "@lib/user";
import Link from "next/link";

interface Mention {
  nickname: string;
  name: string;
}

export default function AttendeeMention({ attendee }: { attendee: Mention }) {
  const { user } = useAuth();
  const isSelf =
    user &&
    user.type === ROLES.ATTENDEE &&
    (user as IAttendee).nickname === attendee.nickname;

  return (
    <Link href={`/attendees/${attendee.nickname}`}>
      <span
        className={`font-ibold hover:underline ${isSelf ? "text-quinary" : ""}`}
      >
        {attendee.name}
      </span>
    </Link>
  );
}
