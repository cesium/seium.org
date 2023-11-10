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

  const [local_error, updateError] = useState("");
  const [scanned, updateScanned] = useState(false);
  const [scanning, updateScanning] = useState(false);
  const pauseRef = useRef(false);
  pauseRef.current = false;

  const validateNickname = (nickname) => {
    return (
      nickname.length >= 2 &&
      nickname.length <= 15 &&
      nickname.match(/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-)[a-zA-Z0-9])*[a-zA-Z0-9]+$/)
    );
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const onFinish = (e) => {
    e.preventDefault();

    if (password !== password_confirmation) {
      updateError("The passwords must match");
    } else if (!uuid) {
      updateError("You must have a scanned QR code");
    } else if (!validateNickname(nickname)) {
      updateError(
        "Your nickname must be between 2 and 15 alphanumeric characters and can only contain underscores and dashes",
      );
    } else if (!validatePassword(password)) {
      updateError("Your password must be at least 8 characters long");
    } else {
      updateError("");

      sign_up({
        name,
        email,
        password,
        password_confirmation,
        nickname,
        uuid,
      });
    }
  };

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
        {(local_error || (!isLoading && errors)) && (
          <p className="mt-3 font-iregular text-lg text-red-400">
            {local_error || (!isLoading && errors)}
          </p>
        )}
      </Form>
    </>
  );
}
