import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { Router, useRouter } from "next/router";
import { useAuth } from ".";

export function withoutAuth(WrappedComponent) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const router = useRouter();
    const { user } = useAuth();

    if (user) {
      router.replace(
        (router.query.from && decodeURIComponent(router.query.from)) ?? "/"
      );
      return null;
    }
    return <WrappedComponent {...props} />;
  };
}
