/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { motion as Motion } from "framer-motion";

import { useAuth } from "@context/Auth";

import Card from "@components/Card";
import { Router, useRouter } from "next/router";

import Return from "@components/Return";

import Title from "@layout/moonstone/authentication/Title";
import Text from "@layout/moonstone/authentication/Text";
import { LoginForm } from "./components";

function decodePathname(from : string | string[]) {
  if (from) {
    const pathname : string = typeof from === "string" ? from : from[0];
    try {
      return decodeURIComponent(pathname as string).replace(/\[|\]/i,"");
    } catch (e) {
      if (!(e instanceof URIError)) {
        throw e;
      }
    }
  }

  return "/";
}

function Login() {
  const router = useRouter();
  const { user } = useAuth();

  if (user) {
    router.replace({
       pathname: decodePathname(router.query.from)
    });
    return null;
  }

  return (
    <div className="min-h-screen select-none overflow-hidden bg-secondary">
      <Return componentStyle="sm:ml-20 mt-20 sm:mt-20" />
      <img
        className="absolute -left-[380px] bottom-0 hidden w-[750px] xl:block"
        src="/images/void.svg"
      />
      <div className="mt-10 flex flex-col items-center justify-center sm:mt-40">
        <Title text="Log in" />
        <LoginForm />
        <Text
          text="Don’t have an account?"
          link="Register here"
          href="/signup"
        />
        <div className="absolute bottom-0 right-60 hidden lg:block xl:hidden">
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ y: -15, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Card img="/images/void.svg" alt="MascotFooter" inverted={false}>
              Just really awesome people here. Please login and prepare to be
              amazed. 🔮
            </Card>
          </Motion.div>
        </div>
      </div>
    </div>
  );
}

export default Login;
