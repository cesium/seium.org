import { useState } from "react";

import { withAuth, useAuth } from "/components/Auth";

import Form from "/components/moonstone/utils/Form";
import Input from "/components/moonstone/utils/Input";

import Dashboard from "/components/moonstone/user/utils/Dashboard";
import Heading from "/components/moonstone/utils/Heading";

import CodeInput from "/components/moonstone/user/profile/CodeInput";
import CheckpointTracker from "/components/moonstone/user/profile/CheckpointTracker";

function getFirstName(fullName) {
  const names = fullName.split(" ");

  if (names.length > 0) {
    return names[0];
  }

  return "";
}

function Profile() {
  const { user } = useAuth();

  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState(user.nickname || "");

  const companyBadges = user.badges.filter(entry => entry.type == 4).length;
  const level = companyBadges == 19 ? 4 : Math.floor(companyBadges / 20);
  const neededBadges = (level == 3) ? 19 - companyBadges : (level + 1) * 5 - companyBadges;

  const levelEntries = [10, 30, 60, 100];

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
              <button className="w-full items-center rounded-full border border-quinary bg-quinary px-4 py-1 text-center font-iregular text-sm text-secondary shadow-sm"
                onClick={() => {
                  if(editing) {
                    
                  } else {
                    setEditing(true);
                  }               
                }}>
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
              text="USERNAME"
              id="username"
              name="username"
              value={username}
              bgColor="white"
              fgColor="black"
              enabled={editing}
              onChange={e => setUsername(e.currentTarget.value)}
            />

            <button className="inline-block h-auto pl-6 pb-5 text-quinary underline">
              Reset Password
            </button>
          </Form>
        </div>

        <div className="col-span-1 float-right w-full xl:w-1/2 xl:pl-6">
          <div>
            <Heading text="Achievements"></Heading>

            <div className="grid-cols-2 overflow-hidden">
              <div className="col-span-1 float-left w-1/2 font-iregular">
                💰{user.token_balance} Tokens
              </div>
              <div className="col-span-1 float-left w-1/2 font-iregular">
                🏅{user.badge_count} Badges
              </div>
            </div>

            <div className="mt-4 grid-cols-2 overflow-hidden">
              <div className="col-span-1 float-left w-1/2 font-iregular">
                🏆{user.entries} Entries Final Draw
              </div>
              <div className="col-span-1 float-left w-1/2 font-iregular">
                🏁Level {level} Checkpoint
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Heading text="Checkpoints"></Heading>
            <p className="font-iregular">
              <b className="font-ibold">Level 1</b> 5 companies &rarr; +{levelEntries[0]}
              entries
            </p>
            <p className="font-iregular">
              <b className="font-ibold">Level 2</b> 10 companies &rarr; +{levelEntries[1]}
              entries
            </p>
            <p className="font-iregular">
              <b className="font-ibold">Level 3</b> 15 companies &rarr; +{levelEntries[2]}
              entries
            </p>
            <p className="font-iregular">
              <b className="font-ibold">Level 4</b> 19 companies &rarr; +{levelEntries[3]}
              entries
            </p>

            <CheckpointTracker checkpoints={4} progress={level} />

            {level != 4 && <><p className="font-iregular">
              You just need {neededBadges} more bages to go to Level {level + 1} (and win +{levelEntries[level]} entries
              to the final draw). Hurry!
            </p>
            <CodeInput /></>}
          </div>

          <div className="mt-10">
            <Heading text="Upload CV"></Heading>
            <p className="font-iregular">
              {" "}
              Get a chance to win a spot at the Corporate dinner by submiting you
              CV!
            </p>

            <a href="mailto:cv@seium.org" className="inline-block h-auto pl-6 pb-5 text-quinary underline">SEND YOUR CV</a>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}

export default withAuth(Profile);


/*
<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5">
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="hover:text-quintary relative cursor-pointer rounded-md bg-white font-medium text-quinary"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF</p>
                  </div>
                </div>
              </div>
            </div>
*/