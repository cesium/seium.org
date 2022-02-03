import { useRouter } from "next/router";
import { useAuth } from "./useAuth";

export function withAuth(WrappedComponent) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const router = useRouter();
    const { authenticated } = useAuth();

    if(!authenticated) {
      router.replace("/login");
    }
    return <WrappedComponent {...props} />;
  };
}
