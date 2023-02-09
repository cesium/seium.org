import { useState, useEffect, useRef } from "react";

import { useAuth } from "@context/Auth";

import Button from "@components/Button";
import Form from "@components/Form";
import Input from "@components/Input";

import BarebonesQRScanner from "@components/QRScanner/BarebonesQRScanner";

export default function SignUpForm() {
  const { sign_up, isLoading, errors } = useAuth();

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

  useEffect(() => {
    console.log("scanning", scanning);
  }, [scanning]);

  useEffect(() => {
    console.log("scanned", scanned);
  }, [scanned]);

  useEffect(() => {
    console.log("uuid", uuid);
  }, [uuid]);

  return (
    <>
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
    </>
  );
}
