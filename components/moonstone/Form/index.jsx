import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export default function Form(props) {
    return (
        <form className="space-y-6 w-80 sm:w-120" 
              action="#" 
              method="POST"
        >
            {props.children}
        </form>
    );
}