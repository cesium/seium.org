import { useState } from "react";
import { withoutAuth } from "/components/Auth";

import Fade from "react-reveal/Fade";

import Button from "/components/utils/Button";
import Card from "/components/utils/Card";

import Return from "/components/moonstone/utils/Return";
import Form from "/components/moonstone/utils/Form";
import Input from "/components/moonstone/utils/Input";

import Title from "/components/moonstone/authentication/Title";

function RecoverPassword() {
  /*

    Null  -> No reset yet
    True  -> Reset successful
    False -> Reset failed

    */
  const [st, updateState] = useState(true);

  return (
    <div className="min-h-screen overflow-hidden bg-secondary">
      <Return componentStyle="sm:ml-14 mt-10 sm:mt-20 mb-20" />
      <div className="flex flex-col items-center justify-center sm:mt-40">
        <Title text="Recover your password" />

        {st != true ? (
          <Form>
            <Input
              text="PASSWORD"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              fgColor="white"
              bgColor="primary"
            />
            <Input
              text="CONFIRM PASSWORD"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              fgColor="white"
              bgColor="primary"
            />
            <Button
              type="submit"
              text="LET'S GO"
              customStyle="text-secondary bg-quinary border-quinary"
            />
          </Form>
        ) : (
          <></>
        )}

        {st == false ? (
          <p className="mt-10 font-iregular text-red-600">
            An error has occured. Please try again later
          </p>
        ) : (
          <></>
        )}

        {st == true ? (
          <>
            <p className="mt-10 mb-10 font-iregular text-quinary">
              Password reset successfully
            </p>
            <div className="w-96">
              <Button
                type=""
                text="BACK TO MOONSTONE"
                customStyle="text-secondary bg-quinary border-quinary"
              />
            </div>
          </>
        ) : (
          <></>
        )}

        <div className="absolute bottom-0 right-60 hidden lg:block">
          <Fade bottom>
            <Card
              img="/images/mascot-footer.svg"
              alt="MascotFooter"
              inverted={false}
            >
              Try not to forget the password this time.
            </Card>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default withoutAuth(RecoverPassword);
