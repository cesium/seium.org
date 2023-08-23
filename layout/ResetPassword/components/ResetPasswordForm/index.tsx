import { useRef, useState } from "react";
import { useRouter } from "next/router";

import { resetPasswordWithToken } from "@lib/api";

import Link from "next/link";

import Button from "@components/Button";
import ImageButton from "@components/ImageButton";

import Form from "@components/Form";
import Input from "@components/Input";

export default function ResetPasswordForm() {
  const router = useRouter();
  const { token } = router.query;

  const [success, updateSuccess] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);
  const [errorMsg, updateErrorMsg] = useState(null);

  function onSubmit(event) {
    event.preventDefault();

    const password = passwordRef.current.value;
    const passwordConfirmation = passwordConfirmationRef.current.value;

    if (password !== passwordConfirmation) {
      updateErrorMsg("The passwords must match");
      return null;
    }

    if (password.length < 7) {
      updateErrorMsg("The password isn't strong enough");
      return null;
    }

    setLoading(true);

    resetPasswordWithToken({ token, password })
      .then(() => updateSuccess(true))
      .catch(() => updateSuccess(false))
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      {success === null && (
        <Form onSubmit={onSubmit}>
          <Input
            text="PASSWORD"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            fgColor="white"
            bgColor="primary"
            ref={passwordRef}
          />
          <Input
            text="CONFIRM PASSWORD"
            id="confirm"
            name="confirm"
            type="password"
            autoComplete="current-password"
            fgColor="white"
            bgColor="primary"
            ref={passwordConfirmationRef}
          />
          <p className="mt-10 mb-10 text-center font-iregular text-failure">
            {errorMsg}
          </p>
          <ImageButton
            type="submit"
            text="LET’S GO"
            customStyle="text-secondary bg-quinary border-quinary"
            imageSrc={isLoading ? "/images/loading.gif" : ""}
            imageAlt="HANG TIGHT..."
            disabled={isLoading}
          />
        </Form>
      )}

      {success === false && (
        <p className="mt-10 mb-10 text-center font-iregular text-red-700">
          An error has occurred. Please try again later.
        </p>
      )}

      {success && (
        <>
          <p className="mt-10 mb-10 font-iregular text-quinary">
            Password reset successfully!
          </p>
          <div className="w-96">
            <Link href="/login" passHref>
              <Button
                type="button"
                text="BACK TO LOGIN"
                customStyle="text-secondary bg-quinary border-quinary"
              />
            </Link>
          </div>
        </>
      )}
    </>
  );
}
