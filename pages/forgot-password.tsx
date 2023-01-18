import { useState, useRef } from "react";
import { withoutAuth } from "@components/Auth";
import { sendResetEmail } from "@lib/api";

import { motion as Motion } from "framer-motion";
import ImageButton from "@components/moonstone/utils/ImageButton";
import Card from "@components/utils/Card";
import Return from "@components/moonstone/utils/Return";
import Form from "@components/moonstone/utils/Form";
import Input from "@components/moonstone/utils/Input";
import Title from "@components/moonstone/authentication/Title";
import Text from "@components/moonstone/authentication/Text";

function ForgotPassword() {
  const [success, updateSuccess] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const emailRef = useRef(null);

  function onSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const email = emailRef.current.value;

    sendResetEmail({ email })
      .then(() => updateSuccess(true))
      .catch(() => updateSuccess(false))
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="min-h-screen overflow-hidden bg-secondary">
      <Return componentStyle="sm:ml-14 mt-10 sm:mt-20" />
      <div className="my-10 flex flex-col items-center justify-center sm:mt-40">
        <Title text="Reset password" />
        {!success && (
          <div className="mt-8">
            <Form onSubmit={onSubmit}>
              <Input
                text="YOUR EMAIL"
                id="email"
                name="email"
                type="email"
                fgColor="white"
                bgColor="primary"
                autoComplete="email"
                ref={emailRef}
              />
              <ImageButton
                type="submit"
                text="LET’S GO"
                customStyle="text-secondary bg-quinary border-quinary"
                imageSrc={isLoading ? "/images/loading.gif" : ""}
                imageAlt="HANG TIGHT..."
                disabled={isLoading}
              />
            </Form>
          </div>
        )}

        {success == false && (
          <p className="mt-10 font-iregular text-red-600">
            An error has occured. Please make sure the email you provided is
            correct and try again later
          </p>
        )}

        {success && (
          <p className="mt-10 font-iregular text-quinary">
            An email has bent sent. Please check your inbox to reset your
            password
          </p>
        )}

        {!success && (
          <Text
            text="Don’t have an account?"
            link="Register here"
            href="https://sei22.eventbrite.pt"
          />
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
              Happens to the best of us, don’t worry
            </Card>
          </Motion.div>
        </div>
      </div>
    </div>
  );
}

export default withoutAuth(ForgotPassword);
