import { useRouter } from "next/router";
import { useAuth } from ".";
import * as USER from "/lib/user";

export function withAuth(WrappedComponent) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const router = useRouter();
    const { user } = useAuth();

    if (!user) {
      router.replace(`/login?from=${encodeURIComponent(router.asPath)}`);
      return null;
    }

    switch (user.type) {
      case USER.ROLES.ATTENDEE:
        if (
          ![
            "/attendee/profile",
            "/attendee/slots",
            "/attendee/wheel",
            "/attendee/badgedex",
            "/attendee/leaderboard",
            "/attendee/store",
            "/attendee/inventory",
            "/attendee/identifier",
            "/attendees/[uuid]",
            "/badge/[slug]",
            "/product/[slug]",
          ].includes(router.pathname)
        ) {
          router.replace("/404");
          return null;
        }
        break;
      case USER.ROLES.STAFF:
        if (
          ![
            "/staff/badges",
            "/staff/prizes",
            "/staff/prizes/[uuid]",
            "/staff/identifier",
            "/staff/leaderboard",
            "/staff/cv",
            "/attendees/[uuid]",
            ...(user.is_admin ? ["/staff/spotlights"] : []),
          ].includes(router.pathname)
        ) {
          router.replace("/404");
          return null;
        }
        break;
      case USER.ROLES.SPONSOR:
        if (
          ![
            "/sponsor/scanner",
            "/attendees/[uuid]",
            "/staff/badges",
            "/sponsor/visitors",
          ].includes(router.pathname)
        ) {
          router.replace("/404");
          return null;
        }
        break;
    }

    return <WrappedComponent {...props} />;
  };
}
