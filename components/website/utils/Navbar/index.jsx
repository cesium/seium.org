import Link from "next/link";
import Image from "next/image";

import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { useAuth } from "/components/Auth";
import JoinUs from "/components/website/utils/JoinUs";
import styles from "./style.module.css";

const navigation = [
  { name: "Schedule", slug: "/schedule" },
  { name: "Hackathon", slug: "/hackathon" },
  // { name: 'Team', slug: '/team' },
  { name: "Challenges", slug: "/challenges" },
  { name: "Speakers", slug: "/speakers" },
  { name: "FAQs", slug: "/faq" },
  { name: "Join Staff", slug: "https://forms.gle/4EwD1Gs8FGCGRdYX8" },
];

export default function Navbar({ bgColor, fgColor, button, children }) {
  const { user, isAuthenticated } = useAuth();

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className={`spacing pt-14 pb-4 bg-${bgColor}`}>
            <div className="flex h-16 items-center justify-between">
              <div className="relative z-50 flex flex-auto">
                <div className="grid w-full grid-cols-4">
                  <Link href="/" passHref>
                    <div className={styles.logo}>
                      <Image
                        className="cursor-pointer opacity-60 hover:opacity-100"
                        src="/images/sei-logo.svg"
                        width="50"
                        height="40"
                        alt="SEIUM"
                      />
                    </div>
                  </Link>
                  <div className="col-span-3 hidden justify-self-end lg:block">
                    <div className="flex flex-auto gap-x-20">
                      <div className="grid grid-cols-3 gap-x-20 gap-y-6 xl:gap-y-0">
                        {navigation.map((item) => (
                          <Link key={item.slug} href={item.slug} passHref>
                            <a className="font-iregular text-sm text-white text-opacity-40 hover:text-opacity-100">
                              {item.name}
                            </a>
                          </Link>
                        ))}
                        {isAuthenticated ? (
                          <Link
                            key="moonstone"
                            href="/attendee/profile"
                            passHref
                          >
                            <a className="font-iregular text-sm text-white text-opacity-40 hover:text-opacity-100">
                              Go to dashboard
                            </a>
                          </Link>
                        ) : (
                          <Link key="login" href="/login" passHref>
                            <a className="font-iregular text-sm text-white text-opacity-40 hover:text-opacity-100">
                              Login
                            </a>
                          </Link>
                        )}
                      </div>
                      <div className="hidden xl:block">
                        <JoinUs fgColor={fgColor} button={button} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-50 flex lg:hidden">
                <Disclosure.Button className="inline-flex h-6 w-6 items-center justify-center text-white">
                  {open ? (
                    <FontAwesomeIcon icon={faTimes} />
                  ) : (
                    <FontAwesomeIcon icon={faBars} />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className={`lg:hidden bg-${bgColor}`}>
            <div className="relative z-50 min-h-screen object-cover px-2 pt-12">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.slug}
                  as="a"
                  className="block rounded-md py-6 text-center font-ibold text-3xl text-white hover:text-quinary"
                >
                  <Link key={item.slug} href={item.slug} passHref>
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
          {open ? <div className="hidden lg:block">{children}</div> : children}
        </>
      )}
    </Disclosure>
  );
}
