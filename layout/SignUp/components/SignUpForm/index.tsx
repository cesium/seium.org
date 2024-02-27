import { useState, useEffect, useRef } from "react";

import { useAuth } from "@context/Auth";

import Button from "@components/Button";
import Form from "@components/Form";
import Input from "@components/Input";
import Select from "@components/Select";
import PasswordInput from "@components/PasswordInput";

import BarebonesQRScanner from "@components/QRScanner/BarebonesQRScanner";
import Checkbox from "@components/Checkbox";
import Link from "next/link";

interface Course {
  id: any;
  name: string;
}

export default function SignUpForm({ courses }) {
  const { sign_up, isLoading, errors } = useAuth();

  const [name, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [nickname, updateNickname] = useState("");
  const [course, updateCourse] = useState("");
  const [password, updatePassword] = useState("");
  const [password_confirmation, updatePasswordConfirmation] = useState("");
  const [uuid, setUUID] = useState<string | undefined>();

  const [local_error, updateError] = useState("");
  const [scanned, updateScanned] = useState(false);
  const [showQRScanner, setShowQRScanner] = useState(false);
  const pauseScanRef = useRef(false);

  const [termsAccepted, setTermsAccepted] = useState(false);

  const pauseRef = useRef(false);
  pauseRef.current = false;

  const validateNickname = (nickname) => {
    return (
      nickname.length >= 2 &&
      nickname.length <= 15 &&
      nickname.match(/^[\w\d-_]{3,15}$/)
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
        "Your nickname must be between 2 and 15 alphanumeric characters and can only contain underscores and dashes"
      );
    } else if (!validatePassword(password)) {
      updateError("Your password must be at least 8 characters long");
    } else if (!termsAccepted) {
      updateError("You must accept the privacy policy and general regulation");
    } else {
      updateError("");

      sign_up({
        name,
        email,
        password,
        password_confirmation,
        nickname,
        uuid,
        course,
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
        <Select
          text="COURSE"
          id="course"
          fgColor="white"
          bgColor="primary"
          defaultValue={0}
          options={courses.map((course) => ({
            key: course.id,
            name: course.name,
          }))}
          onChange={(e) => updateCourse(e.currentTarget.value)}
        />
        <PasswordInput
          text="PASSWORD"
          id="password"
          name="password"
          fgColor="white"
          bgColor="primary"
          onChange={(e) => updatePassword(e.currentTarget.value)}
        />
        <PasswordInput
          text="CONFIRM PASSWORD"
          id="confirm"
          name="confirm"
          fgColor="white"
          bgColor="primary"
          onChange={(e) => updatePasswordConfirmation(e.currentTarget.value)}
        />
        <Button
          title={showQRScanner ? "STOP SCANNING" : "SCAN QR"}
          className="h-12 w-full border-quinary bg-quinary text-secondary"
          onClick={(e) => {
            e.preventDefault();
            setShowQRScanner(!showQRScanner);
          }}
        />
        <Checkbox
          selected={termsAccepted}
          onChange={(e) => setTermsAccepted(!termsAccepted)}
        >
          I have read and understood the &nbsp;
          <Link
            href="/docs/privacy_policy.pdf"
            target="_blank"
            className="text-quinary"
          >
            privacy policy
          </Link>{" "}
          and the &nbsp;
          <Link
            href="/docs/regulation.pdf"
            target="_blank"
            className="text-quinary"
          >
            general regulation
          </Link>
        </Checkbox>
        {scanned && (
          <p className="mt-3 font-iregular text-lg text-quinary">
            QR Code scanned successfully: {uuid}
          </p>
        )}
        {showQRScanner && (
          <div className="fixed top-1/2 left-1/2 h-full max-h-[512px] w-full max-w-[512px] -translate-x-1/2 -translate-y-1/2 p-2">
            <BarebonesQRScanner
              handleQRCode={(code: string) => {
                pauseScanRef.current = false;
                setShowQRScanner(false);
                updateScanned(true);
                setUUID(code);
              }}
              isScanPaused={pauseScanRef}
            />
          </div>
        )}
        <Button
          type="submit"
          title={isLoading ? "Registering..." : "LET'S GO"}
          className="h-12 w-full border-quinary bg-quinary text-secondary"
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
