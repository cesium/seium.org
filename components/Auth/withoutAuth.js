import { useRouter } from "next/router";
import { useAuth } from "./useAuth";

export function withoutAuth(WrappedComponent) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return <WrappedComponent {...props} />;
  };
}
