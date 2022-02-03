import { useRouter } from "next/router";
import { useAuth } from "./useAuth";

export function withAuth(WrappedComponent) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      router.replace("/login");
    }

    if (isAuthenticated && router.pathname == "/login") {
      router.replace("/");
    }

    return <WrappedComponent {...props} />;
  };
}
