import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export default function Form(props) {
  return (
    <form className="sm:w-120 w-80 space-y-6" action="#" method="POST">
      {props.children}
    </form>
  );
}
