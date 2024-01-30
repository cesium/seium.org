import Profile from "@layout/Attendee/Profile";

import { getCourses } from "@lib/api";

export async function getServerSideProps() {
  const courses = await getCourses().then((response) =>
    response.data.concat({ id: "", name: "None" })
  );

  return { props: { courses: courses } };
}

export default Profile;
