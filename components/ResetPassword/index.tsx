import { useState } from "react";
import { resetPassword } from "@lib/api";
import Notification from "@components/Notification";

export default function ResetPassword(user: any) {
  const [showNotification, setShowNotification] = useState(false);

  const onResetPassword = (user: any) => {
    resetPassword(user.email)
      .then((_) => {
        setShowNotification(true);
      })
      .catch((_) => {
        setShowNotification(false);
      });
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  return (
    <>
      <button
        className="inline-block h-auto pl-6 pb-5 text-quinary underline"
        onClick={(e) => {
          e.preventDefault();
          onResetPassword(user);
        }}
      >
        Reset Password
      </button>
      {showNotification && (
        <Notification
          title="Password reset email sent"
          onClose={handleNotificationClose}
        />
      )}
    </>
  );
}
