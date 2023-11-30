import { getCourses } from "@lib/api";

import SignUp from "@layout/SignUp";

export async function getServerSideProps(context) {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=3600"
  );

  const courses = await getCourses().then((response) =>
    response.data.concat({ id: "", name: "None" })
  );

  return { props: { courses: courses } };
}

export default SignUp;
