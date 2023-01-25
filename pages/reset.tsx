import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { withoutAuth } from "@components/Auth";

import { resetPasswordWithToken } from "@lib/api";

import { motion as Motion } from "framer-motion";
import Link from "next/link";

import Button from "@components/utils/Button";
import ImageButton from "@components/moonstone/utils/ImageButton";
import Card from "@components/utils/Card";

import Return from "@components/moonstone/utils/Return";
import Form from "@components/moonstone/utils/Form";
import Input from "@components/moonstone/utils/Input";

import Title from "@components/moonstone/authentication/Title";

export async function getServerSideProps({ query }) {
  if (query.token === undefined) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}

function Reset() {
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
    <div className="min-h-screen overflow-hidden bg-secondary">
      <Return componentStyle="sm:ml-14 mt-10 sm:mt-20 mb-20" />
      <div className="flex flex-col items-center justify-center sm:mt-40">
        <Title text="Recover your password" />

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
                <a>
                  <Button
                    type="button"
                    text="BACK TO LOGIN"
                    customStyle="text-secondary bg-quinary border-quinary"
                  />
                </a>
              </Link>
            </div>
          </>
        )}

        <div className="absolute bottom-0 right-60 hidden lg:block">
          <Motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Card
              img="/images/mascot-footer.svg"
              alt="MascotFooter"
              inverted={false}
            >
              Try to not forget your password
            </Card>
          </Motion.div>
        </div>
      </div>
    </div>
  );
}

export default withoutAuth(Reset);
