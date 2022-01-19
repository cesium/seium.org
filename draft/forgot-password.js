import Fade from "react-reveal/Fade";

import Button from "/components/utils/Button";
import Card from "/components/utils/Card";

import { useState } from "react";

import Return from "/components/moonstone/utils/Return";
import Form from "/components/moonstone/utils/Form";
import Input from "/components/moonstone/utils/Input";

import Title from "/components/moonstone/authentication/Title";
import Text from "/components/moonstone/authentication/Text";

export default function ForgotPassword() {
  /*
    
    Null  -> No email sent
    True  -> Email sent successfully
    False -> Error occured sending email

    */
  const [st, updateState] = useState(null);

  return (
    <div className="overflow-hidden bg-secondary min-h-screen">
      <Return componentStyle="sm:ml-14 mt-10 sm:mt-20" />
      <div className="mt-10 sm:mt-40 flex flex-col items-center justify-center">
        <Title text="Reset password" />
        {st != true ? (
          <div className="mt-8">
            <Form>
              <Input
                text="YOUR EMAIL"
                id="email"
                name="email"
                type="email"
                fgColor="white"
                bgColor="primary"
                autoComplete="email"
              />
              <Button
                type="submit"
                text="LET'S GO"
                customStyle="text-secondary bg-quinary border-quinary"
              />
            </Form>
          </div>
        ) : (
          <></>
        )}
        {st == false ? (
          <p className="mt-10 font-iregular text-red-600">
            An error has occured. Please make sure the email you provided is
            correct and try again later
          </p>
        ) : (
          <></>
        )}

        {st == true ? (
          <p className="mt-10 font-iregular text-quinary">
            An email has bent sent. Please check your inbox to recover your
            password
          </p>
        ) : (
          <></>
        )}

        {st != true ? (
          <Text
            text="Don’t have an account?"
            link="Signup here"
            href="/signup"
          />
        ) : (
          <></>
        )}
        <div className="hidden lg:block absolute bottom-0 right-60">
          <Fade bottom>
            <Card
              img="/images/mascot-footer.svg"
              alt="MascotFooter"
              inverted={false}
            >
              Just really awesome people here. Please login and prepare to be
              amazed. 🔮
            </Card>
          </Fade>
        </div>
      </div>
    </div>
  );
}
