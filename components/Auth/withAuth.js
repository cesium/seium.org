import { useRouter } from "next/router";
import { useAuth } from "./useAuth";

export function withAuth(WrappedComponent) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const router = useRouter();
    const { user } = useAuth();

    if (!user) {
      router.replace("/login");
    }

    if (user && router.pathname == "/login") {
      router.replace("/");
    }

    return <WrappedComponent {...props} />;
  };
}
