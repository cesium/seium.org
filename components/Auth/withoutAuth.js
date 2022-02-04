import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { Router, useRouter } from "next/router";
import { useAuth } from "./useAuth";

export function withoutAuth(WrappedComponent) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const { user } = useAuth();
    const router = useRouter();

    if (user && router.pathname == "/login") {
      router.replace("/");
    }
    return <WrappedComponent {...props} />;
  };
}
