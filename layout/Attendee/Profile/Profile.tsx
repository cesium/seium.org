import { useState, useEffect } from "react";

import { withAuth, useAuth, IAttendee } from "@context/Auth";

import Form from "@components/Form";
import Input from "@components/Input";
import Select from "@components/Select";

import Layout from "@components/Layout";
import Button from "@components/Button";
import Heading from "@components/Heading";
import ResetPassword from "@components/ResetPassword";

import { CheckpointTracker } from "./components";
import CVInput from "./components/CVInput";
import { getFirstName } from "@lib/naming";
import { getCourses } from "@lib/api";

interface Course {
  id: any;
  name: string;
}

function Profile() {
  const { user, editUser } = useAuth() as {
    user: IAttendee;
    editUser: (username: FormData) => void;
  };
  const [avatar, setAvatar] = useState(null);
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState(user.nickname || "");
  const [course, setCourse] = useState(user.course?.toString() || "");

  const [courses, setCourses] = useState<Course[]>([{ id: "", name: "None" }]);

  useEffect(() => {
    getCourses().then((response) => {
      setCourses(response.data.concat(courses));
    });
  }, []);

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
  } else if (companyBadges < 25) {
    level = 4;
    neededBadges = 25 - companyBadges;
  } else if (companyBadges < 28) {
    level = 5;
    neededBadges = 28 - companyBadges;
  } else {
    level = 6;
    neededBadges = 0;
  }

  const levelEntries = [10, 30, 60, 100, 120, 150];

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("attendee[nickname]", username);
    formData.append("attendee[course_id]", course);
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
      <div className="mt-12 grid-cols-2">
        <div className="col-span-1 float-left w-full xl:w-1/2">
          <Heading text="User Profile">
            <div className="w-auto">
              <Button
                title={editing ? "Save Changes" : "Edit"}
                className="w-full items-center border border-quinary bg-quinary py-2 px-4 text-center font-iregular text-sm text-white shadow-sm"
                type="submit"
                form="profile-form"
              />
            </div>
          </Heading>

          <Form
            onSubmit={handleSubmitForm}
            id="profile-form"
            className="flex flex-col justify-center sm:justify-start"
          >
            <div className="flex w-auto justify-center pl-0 sm:block sm:w-full sm:pl-6">
              <div className="relative h-[220px] w-[220px] select-none overflow-hidden rounded-full border-2 border-white">
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

            <div className="w-full sm:w-96">
              <Input
                text="NAME"
                id="name"
                name="name"
                value={user.name || ""}
                bgColor="primary"
                fgColor="white"
                enabled={false}
              />
              <Input
                text="USERNAME"
                id="username"
                name="username"
                value={username}
                bgColor="primary"
                fgColor="white"
                enabled={editing}
                onChange={(e) => setUsername(e.currentTarget.value)}
              />
              <Select
                text="COURSE"
                id="course"
                bgColor="primary"
                fgColor="white"
                value={course}
                options={courses.map((course) => ({
                  key: course.id,
                  name: course.name,
                }))}
                enabled={editing}
                onChange={(e) => setCourse(e.currentTarget.value)}
              />
              <div className="mt-4">
                <ResetPassword user={user} />
              </div>
            </div>
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
              <b className="font-ibold">Level 5</b> 25 companies &rarr; +
              {levelEntries[4]} entries
            </p>
            <p className="font-iregular">
              <b className="font-ibold">Level 6</b> 28 companies &rarr; +
              {levelEntries[5]} entries
            </p>

            <CheckpointTracker checkpoints={6} progress={level} />

            {level != 6 && (
              <p className="font-iregular text-white">
                You just need {neededBadges} more badges to go to Level{" "}
                {level + 1} (and win +{levelEntries[level]} entries to the final
                draw). Hurry!
              </p>
            )}
          </div>
          <div className="mt-10 text-white">
            <Heading text="Upload CV" />
            <CVInput cv={user?.cv} onSubmit={submitCV} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(Profile);
