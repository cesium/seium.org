import { useState } from "react";

import { withAuth, useAuth } from "@context/Auth";

import Form from "@components/Form";
import Input from "@components/Input";

import Layout from "@components/Layout";
import Heading from "@components/Heading";

import { CheckpointTracker, CodeInput } from "./components";
import CVInput from "./components/CVInput";
import { resetPassword } from "@lib/api";
import { getFirstName } from "@lib/naming";

function Profile() {
  const { user, editUser } = useAuth();
  const [avatar, setAvatar] = useState(null);
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState(user.nickname || "");

  const [photoFileUrl, setPhotoFileUrl] = useState<string>(user.avatar);

  const companyBadges = user.badges.filter((entry) => entry.type == 4).length;
  let level = 0;
  let neededBadges = 0;
  if (companyBadges < 5) {
    level = 0;
    neededBadges = 5 - companyBadges;
  } else if (companyBadges < 10) {
    level = 1;
    neededBadges = 10 - companyBadges;
  } else if (companyBadges < 15) {
    level = 2;
    neededBadges = 15 - companyBadges;
  } else if (companyBadges < 20) {
    level = 3;
    neededBadges = 20 - companyBadges;
  } else if (companyBadges < 24) {
    level = 4;
    neededBadges = 24 - companyBadges;
  } else {
    level = 5;
    neededBadges = 0;
  }

  const levelEntries = [10, 30, 60, 100, 150];

  const onResetPassword = () => {
    resetPassword(user.email)
      .then((_) =>
        alert(
          "An email has been sent to your account for you to recover your password",
        ),
      )
      .catch((_) => alert("An error occured"));
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("attendee[nickname]", username);
    formData.append("attendee[avatar]", avatar);

    if (editing) {
      editUser(formData);
    }

    setEditing(!editing);
  };

  const handleOnFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (!file) return;

    setPhotoFileUrl(URL.createObjectURL(file));
    setAvatar(file);
  };

  const submitCV = (f: File) => {
    const formData = new FormData();
    formData.append("attendee[cv]", f);
    editUser(formData);
  };

  return (
    <Layout
      title={`Hello, ${getFirstName(user.name)} 👋`}
      description={`Welcome to your profile!`}
    >
      <div className="mt-12 grid-cols-2 overflow-hidden">
        <div className="col-span-1 float-left w-full xl:w-1/2">
          <Heading text="User Profile">
            <div className="w-auto">
              <button
                className="w-full items-center rounded-full border border-quinary bg-quinary py-2 px-4 text-center font-iregular text-sm text-secondary shadow-sm"
                type="submit"
                form="profile-form"
              >
                {editing ? "Save Changes" : "Edit"}
              </button>
            </div>
          </Heading>

          <Form onSubmit={handleSubmitForm} id="profile-form">
            <div className="pl-6">
              <div className="relative h-[220px] w-[220px] overflow-hidden rounded-full border-2 border-white hover:border-quinary">
                {photoFileUrl == null ? (
                  <img
                    src="/images/mascot-head.png"
                    alt="Avatar Photo"
                    className="h-[220px] w-[220px] object-cover"
                  />
                ) : (
                  <img
                    src={photoFileUrl}
                    alt="Avatar Photo"
                    className="h-[220px] w-[220px] object-cover"
                  />
                )}

                {editing && (
                  <label className="absolute top-0 left-0 flex h-[220px] w-[220px] cursor-pointer items-center justify-center rounded-full bg-quinary text-black opacity-50 transition-all ease-linear hover:opacity-90">
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleOnFileChange}
                    />
                    Edit photo
                  </label>
                )}
              </div>
            </div>

            <Input
              text="NAME"
              id="name"
              name="name"
              value={user.name || ""}
              bgColor="white"
              fgColor="white"
              enabled={false}
            />
            <Input
              text="USERNAME"
              id="username"
              name="username"
              value={username}
              bgColor="white"
              fgColor="white"
              enabled={editing}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />

            <button
              className="inline-block h-auto pl-6 pb-5 text-quinary underline"
              onClick={(e) => {
                e.preventDefault();
                onResetPassword();
              }}
            >
              Reset Password
            </button>
          </Form>
        </div>

        <div className="col-span-1 float-right w-full xl:w-1/2 xl:pl-6">
          <div>
            <Heading text="Achievements">
              <button
                className="w-full items-center rounded-full border border-quinary bg-quinary py-2 px-4 text-center font-iregular text-sm text-secondary opacity-0 shadow-sm"
                type="submit"
                form="profile-form"
                disabled
              >
                {editing ? "Save Changes" : "Edit"}
              </button>
            </Heading>
            <div className="grid-cols-2 overflow-hidden text-white">
              <div className="col-span-1 float-left w-1/2 font-iregular">
                💰 {user.token_balance} Tokens
              </div>
              <div className="col-span-1 float-left w-1/2 font-iregular">
                🏅 {user.badge_count} Badges
              </div>
            </div>

            <div className="mt-4 grid-cols-2 overflow-hidden text-white">
              <div className="col-span-1 float-left w-1/2 font-iregular">
                🏆 {user.entries} Entries Final Draw
              </div>
              <div className="col-span-1 float-left w-1/2 font-iregular">
                🏁 Level {level} Checkpoint
              </div>
            </div>
          </div>

          <div className="mt-10 text-white">
            <Heading text="Checkpoints"></Heading>
            <p className="font-iregular">
              <b className="font-ibold">Level 1</b> 5 companies &rarr; +
              {levelEntries[0]} entries
            </p>
            <p className="font-iregular">
              <b className="font-ibold">Level 2</b> 10 companies &rarr; +
              {levelEntries[1]} entries
            </p>
            <p className="font-iregular">
              <b className="font-ibold">Level 3</b> 15 companies &rarr; +
              {levelEntries[2]} entries
            </p>
            <p className="font-iregular">
              <b className="font-ibold">Level 4</b> 20 companies &rarr; +
              {levelEntries[3]} entries
            </p>
            <p className="font-iregular">
              <b className="font-ibold">Level 5</b> 24 companies &rarr; +
              {levelEntries[4]} entries
            </p>

            <CheckpointTracker checkpoints={4} progress={level} />

            {level != 5 && (
              <p className="font-iregular text-white">
                You just need {neededBadges} more badges to go to Level{" "}
                {level + 1} (and win +{levelEntries[level]} entries to the final
                draw). Hurry!
              </p>
            )}
          </div>

          <div className="my-10 text-white">
            <Heading text="Redeem referral code" />
            <p className="font-iregular">Redeem a badge using a unique code</p>

            <CodeInput />
          </div>

          <div className="mt-10 text-white">
            <Heading text="Upload CV" />
            <CVInput cv={user?.cv} onSubmit={submitCV}></CVInput>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(Profile);
