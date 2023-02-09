import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { Router, useRouter } from "next/router";
import { useAuth } from "./useAuth";

export function withoutAuth(WrappedComponent) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const router = useRouter();
    const { user } = useAuth();

    if (user && router.pathname == "/login") {
      router.replace("/");
    }
    return <WrappedComponent {...props} />;
  };
}
