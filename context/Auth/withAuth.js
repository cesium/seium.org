import { useRouter } from "next/router";
import { useAuth } from "./useAuth";
import * as USER from "/lib/user";

export function withAuth(WrappedComponent) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const router = useRouter();
    const { user } = useAuth();

    if (!user) {
      router.replace("/login");
      return null;
    }

    switch (user.type) {
      case USER.ROLES.ATTENDEE:
        if (
          ![
            "/attendee/profile",
            "/attendee/wheel",
            "/attendee/badgedex",
            "/attendee/leaderboard",
            "/attendee/store",
            "/attendee/vault",
            "/attendees/[uuid]",
            "/badge/[slug]",
            "/product/[slug]",
          ].includes(router.pathname)
        ) {
          return router.replace("/404");
        }
        break;
      case USER.ROLES.MANAGER:
        if (
          ![
            "/manager/badges",
            "/manager/prizes",
            "/manager/prizes/[uuid]",
            "/manager/identifier",
            "/attendees/[uuid]",
          ].includes(router.pathname)
        ) {
          return router.replace("/404");
        }
        break;
      case USER.ROLES.SPONSOR:
        if (
          ![
            "/sponsor/scanner",
            "/attendees/[uuid]",
            "/sponsor/remote/dashboard",
            "/manager/badges",
            "/sponsor/visitors",
          ].includes(router.pathname)
        ) {
          return router.replace("/404");
        }
        break;
    }

    return <WrappedComponent {...props} />;
  };
}
