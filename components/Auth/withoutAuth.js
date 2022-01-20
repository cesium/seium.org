import { useRouter } from "next/router";
import { useAuth } from "./useAuth";

export function withoutAuth(WrappedComponent) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const router = useRouter();
    const { user } = useAuth();

    if (user) {
      if (user.registered) {
        router.replace(`/dashboard`);
      } else {
        router.replace("/register");
      }

      return null;
    }

    return <WrappedComponent {...props} />;
  };
}
