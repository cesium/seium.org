import { useRouter } from "next/router";
import { useAuth } from "./useAuth";
import * as USER from "/lib/user";

export function withAuth(WrappedComponent) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const router = useRouter();
    const { user } = useAuth();
    const component = <WrappedComponent {...props} />;

    if (!user) {
      router.replace("/login");
      return null;
    }

    switch (user.type) {
      case USER.ROLES.ATTENDEE:
        if (
          router.pathname == "/attendee/profile" ||
          router.pathname == "/attendee/wheel" ||
          router.pathname == "/attendee/badgedex" ||
          router.pathname == "/attendee/leaderboard" ||
          router.pathname == "/attendee/awards"
        ) {
          return component;
        } else {
          router.replace("/404");
        }
      case USER.ROLES.MANAGER:
        if (
          router.pathname == "/manager/badges" ||
          router.pathname == "/manager/wheel"
        ) {
          return component;
        } else {
          router.replace("/404");
        }
      // case USER.ROLES.COMPANY:
      //   if (router.pathname == "/manager/badges" ||
      //       router.pathname == "/manager/wheel"   ) {
      //     return component;
      //   }
      // else return null;
    }

    return;
  };
}
