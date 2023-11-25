import { resetPassword } from "@lib/api";
import Swal from "sweetalert2";

const onResetPassword = (user: any) => {
  resetPassword(user.email)
    .then((_) =>
      Swal.fire({
        icon: "success",
        title: "Password Reset",
        text: "An email has been sent to your account for you to recover your password!",
      })
    )
    .catch((_) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    });
};

export default function ResetPassword(user) {
  return (
    <button
      className="inline-block h-auto pl-6 pb-5 text-quinary underline"
      onClick={(e) => {
        e.preventDefault();
        onResetPassword(user);
      }}
    >
      Reset Password
    </button>
  );
}
