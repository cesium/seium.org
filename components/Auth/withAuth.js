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
            "/attendees/[slug]",
          ].includes(router.pathname)
        ) {
          return router.replace("/404");
        }
        break;
      case USER.ROLES.MANAGER:
        if (
          !["/manager/badges", "/manager/prizes", "/attendees/[slug]"].includes(
            router.pathname
          )
        ) {
          return router.replace("/404");
        }
        break;
      // case USER.ROLES.COMPANY:
      //   if (
      //   ![
      //     "/manager/badges",
      //     "/manager/wheel",
      //   ].includes(router.pathname)
      // ) {
      //   return router.replace("/404");
    }

    return <WrappedComponent {...props} />;
  };
}
