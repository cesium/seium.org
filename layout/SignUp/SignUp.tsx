import { withoutAuth } from "@context/Auth";

import { motion as Motion } from "framer-motion";

import Card from "@components/Card";
import Return from "@components/Return";
import { SignUpForm } from "./components";

import Title from "@layout/moonstone/authentication/Title";
import Text from "@layout/moonstone/authentication/Text";

function Signup({ courses }) {
  return (
    <div className="min-h-screen select-none overflow-hidden bg-secondary">
      <Return componentStyle="sm:ml-14 mt-10 sm:mt-20 mb-6" />
      <div className="flex flex-col items-center justify-center sm:mt-16">
        <Title text="Sign up" />
        <SignUpForm courses={courses} />
        <Text text="Already have an account?" link="Login here" href="/login" />
        <div className="absolute bottom-0 right-60 hidden lg:block">
          <Motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Card img="/images/void.svg" alt="MascotFooter" inverted={false}>
              Very restricted area. You just need to fill the form.
            </Card>
          </Motion.div>
        </div>
      </div>
    </div>
  );
}

export default withoutAuth(Signup);
