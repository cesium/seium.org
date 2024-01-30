import { getCourses } from "@lib/api";

import SignUp from "@layout/SignUp";

export async function getServerSideProps() {
  const courses = await getCourses().then((response) =>
    response.data.concat({ id: "", name: "None" })
  );

  return { props: { courses: courses } };
}

export default SignUp;
