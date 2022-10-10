import { useState, useRef } from "react";

import { withoutAuth, useAuth } from "@components/Auth";
import Fade from "react-reveal/Fade";

import Button from "@components/utils/Button";
import Card from "@components/utils/Card";

import Return from "@components/moonstone/utils/Return";
import Form from "@components/moonstone/utils/Form";
import Input from "@components/moonstone/utils/Input";

import Title from "@components/moonstone/authentication/Title";
import Text from "@components/moonstone/authentication/Text";
import BarebonesQRScanner from "@components/moonstone/utils/QRScanner/BarebonesQRScanner";

function Signup() {
  const { sign_up, errors, isLoading } = useAuth();

  const [name, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [nickname, updateNickname] = useState("");
  const [password, updatePassword] = useState("");
  const [password_confirmation, updatePasswordConfirmation] = useState("");
  const [uuid, setUUID] = useState();
  const [scanned, updateScanned] = useState(false);
  const [scanning, updateScanning] = useState(false);
  const pauseRef = useRef(false);
  pauseRef.current = false;

  const onFinish = (e) => {
    e.preventDefault();
    sign_up({
      name,
      email,
      password,
      password_confirmation,
      nickname,
      uuid,
    });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-secondary">
      <Return componentStyle="sm:ml-14 mt-10 sm:mt-20 mb-6" />
      <div className="flex flex-col items-center justify-center sm:mt-16">
        <Title text="Sign up" />
        <Form onSubmit={onFinish}>
          <Input
            text="NAME"
            id="name"
            name="name"
            fgColor="white"
            bgColor="primary"
            onChange={(e) => updateName(e.currentTarget.value)}
          />
          <Input
            text="EMAIL"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            fgColor="white"
            bgColor="primary"
            onChange={(e) => updateEmail(e.currentTarget.value)}
          />
          <Input
            text="NICKNAME"
            id="nickname"
            name="nickname"
            fgColor="white"
            bgColor="primary"
            onChange={(e) => updateNickname(e.currentTarget.value)}
          />
          <Input
            text="PASSWORD"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            fgColor="white"
            bgColor="primary"
            onChange={(e) => updatePassword(e.currentTarget.value)}
          />
          <Input
            text="CONFIRM PASSWORD"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            fgColor="white"
            bgColor="primary"
            onChange={(e) => updatePasswordConfirmation(e.currentTarget.value)}
          />
          <Button
            text={scanning ? "STOP SCANNING" : "SCAN QR"}
            customStyle="text-secondary bg-quinary border-quinary"
            onClick={(e) => {
              e.preventDefault();
              updateScanning(!scanning);
            }}
          />
          {scanned && (
            <p className="mt-3 font-iregular text-lg text-quinary">
              QR Code scanned successfully: {uuid}
            </p>
          )}
          {scanning && (
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <BarebonesQRScanner
                pauseRef={pauseRef}
                handleCode={(code) => {
                  pauseRef.current = false;
                  updateScanning(false);
                  updateScanned(true);
                  setUUID(code);
                }}
              />
            </div>
          )}
          <Button
            type="submit"
            text={isLoading ? "Registering..." : "LET'S GO"}
            customStyle="text-secondary bg-quinary border-quinary"
          />
          {errors && (
            <p className="mt-3 font-iregular text-lg text-red-400">
              An error occured while registering.
            </p>
          )}
        </Form>
        <Text text="Already have an account?" link="Login here" href="/login" />
        <div className="absolute bottom-0 right-60 hidden lg:block">
          <Fade bottom>
            <Card
              img="/images/mascot-footer.svg"
              alt="MascotFooter"
              inverted={false}
            >
              Very restricted area. You just need to fill the form.
            </Card>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default withoutAuth(Signup);
