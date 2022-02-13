import { useState } from "react";

import { withAuth, useAuth } from "/components/Auth";

import Form from "/components/moonstone/utils/Form";
import Input from "/components/moonstone/utils/Input";

import Dashboard from "/components/moonstone/user/utils/Dashboard";
import Heading from "/components/moonstone/utils/Heading";

import CodeInput from "/components/moonstone/user/profile/CodeInput";
import CheckpointTracker from "/components/moonstone/user/profile/CheckpointTracker";

import { resetPassword } from "/lib/api";

function getFirstName(fullName) {
  const names = fullName.split(" ");

  if (names.length > 0) {
    return names[0];
  }

  return "";
}

function Profile() {
  const { user, editUser } = useAuth();

  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState(user.nickname || "");

  const companyBadges = user.badges.filter((entry) => entry.type == 4).length;
  const level = companyBadges == 19 ? 4 : Math.floor(companyBadges / 20);
  const neededBadges =
    level == 3 ? 19 - companyBadges : (level + 1) * 5 - companyBadges;

  const levelEntries = [10, 30, 60, 100];

  const onResetPassword = () => {
    resetPassword(user.email)
      .then((_) =>
        alert(
          "An email has been sent to your account for you to recover your password"
        )
      )
      .catch((_) => alert("An error occured"));
  };

  return (
    <Dashboard
      href="profile"
      title={`Hello, ${getFirstName(user.name)} 👋`}
      description={`Welcome to your profile!`}
    >
      {JSON.stringify(user)}
      <div className="mt-12 grid-cols-2 overflow-hidden">
        <div className="col-span-1 float-left w-full xl:w-1/2">
          <Heading text="User Profile">
            <div className="w-auto">
              <button
                className="w-full items-center rounded-full border border-quinary bg-quinary py-1 px-2 text-center font-iregular text-sm text-secondary shadow-sm"
                onClick={() => {
                  if (editing) {
                    editUser(username);
                    setEditing(false);
                  } else {
                    setEditing(true);
                  }
                }}
              >
                {editing ? "Save Changes" : "Edit"}
              </button>
            </div>
          </Heading>
          <div className="pl-6">
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}${user.avatar}`}
              className="overflow-hidden rounded-full"
              width="220"
              height="220"
            />
          </div>
          <Form>
            <Input
              text="NAME"
              id="name"
              name="name"
              value={user.name || ""}
              bgColor="white"
              fgColor="black"
              enabled={false}
            />
            <Input
              text="USERNAME"
              id="username"
              name="username"
              value={username}
              bgColor="white"
              fgColor="black"
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
            <Heading text="Achievements"></Heading>

            <div className="grid-cols-2 overflow-hidden">
              <div className="col-span-1 float-left w-1/2 font-iregular">
                💰 {user.token_balance} Tokens
              </div>
              <div className="col-span-1 float-left w-1/2 font-iregular">
                🏅 {user.badge_count} Badges
              </div>
            </div>

            <div className="mt-4 grid-cols-2 overflow-hidden">
              <div className="col-span-1 float-left w-1/2 font-iregular">
                🏆 {user.entries} Entries Final Draw
              </div>
              <div className="col-span-1 float-left w-1/2 font-iregular">
                🏁 Level {level} Checkpoint
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Heading text="Checkpoints"></Heading>
            <p className="font-iregular">
              <b className="font-ibold">Level 1</b> 5 companies &rarr; +
              {levelEntries[0]}
              entries
            </p>
            <p className="font-iregular">
              <b className="font-ibold">Level 2</b> 10 companies &rarr; +
              {levelEntries[1]}
              entries
            </p>
            <p className="font-iregular">
              <b className="font-ibold">Level 3</b> 15 companies &rarr; +
              {levelEntries[2]}
              entries
            </p>
            <p className="font-iregular">
              <b className="font-ibold">Level 4</b> 19 companies &rarr; +
              {levelEntries[3]}
              entries
            </p>

            <CheckpointTracker checkpoints={4} progress={level} />

            {level != 4 && (
              <>
                <p className="font-iregular">
                  You just need {neededBadges} more bages to go to Level{" "}
                  {level + 1} (and win +{levelEntries[level]} entries to the
                  final draw). Hurry!
                </p>
                <CodeInput />
              </>
            )}
          </div>

          <div className="mt-10">
            <Heading text="Upload CV"></Heading>
            <p className="font-iregular">
              {" "}
              Get a chance to win a spot at the Corporate dinner by submiting
              you CV!
            </p>

            <a
              href="mailto:cv@seium.org"
              className="mt-5 inline-block h-auto rounded-full bg-quinary px-5 py-3 text-center font-iregular"
            >
              SEND YOUR CV
            </a>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}

export default withAuth(Profile);
