import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { ROLES } from "@lib/user";
import { useAuth, IUser, IStaff } from "@context/Auth";
import JoinUs from "@components/JoinUs";
import BackOfficeWrapper from "@components/FeatureFlags/BackOfficeWrapper";

import styles from "./style.module.css";

const navigation = [
  { name: "Schedule", slug: "/schedule" },
  { name: "Team", slug: "/team" },
  { name: "Challenges", slug: "/challenges" },
  { name: "Speakers", slug: "/speakers" },
  { name: "FAQs", slug: "/faqs" },
];

const roleNavigation = (user) => {
  switch (user.type) {
    case ROLES.ATTENDEE:
      return [{ name: "Dashboard", slug: "/attendee/profile" }];

    case ROLES.STAFF:
      return [
        { name: "Leaderboard", slug: "/staff/leaderboard" },
        { name: "Give Badges", slug: "/staff/badges" },
        { name: "Give Prizes", slug: "/staff/prizes" },
        { name: "Upload CV", slug: "/staff/cv" },
        ...(user.is_admin
          ? [{ name: "Spotlights", slug: "/staff/spotlights" }]
          : []),
      ];

    case ROLES.SPONSOR:
      return [
        { name: "Scanner", slug: "/sponsor/scanner" },
        { name: "Visitors", slug: "/sponsor/visitors" },
      ];

    default:
      throw new Error(`Unknown USER TYPE: ${user.type}`);
  }
};

export default function Navbar({ bgColor, fgColor, button, children }) {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className={`spacing pt-14 pb-4 bg-${bgColor}`}>
            <div className="flex h-16 items-center justify-between">
              <div className="relative z-50 flex flex-auto">
                <div className="grid w-full grid-cols-4">
                  <Link href="/">
                    <div className={`${styles.logo} select-none pt-4 lg:pt-8`}>
                      <Image
                        className="cursor-pointer transition-colors duration-75 ease-in hover:text-quinary"
                        src="/images/sei-logo.svg"
                        width="50"
                        height="40"
                        alt="SEI Logo"
                      />
                    </div>
                  </Link>
                  <div className="col-span-3 hidden justify-self-end lg:block">
                    <div className="flex select-none items-center">
                      <div className="grid grid-cols-3 gap-y-8 gap-x-20 pt-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.slug}
                            href={item.slug}
                            className="font-iregular text-sm text-white transition-colors duration-75 ease-in hover:text-quinary"
                          >
                            {item.name}
                          </Link>
                        ))}
                        <BackOfficeWrapper>
                          {isAuthenticated ? null : (
                            <Link
                              key="login"
                              href="/login"
                              className="font-iregular text-sm text-white transition-colors duration-75 ease-in hover:text-quinary"
                            >
                              Login
                            </Link>
                          )}
                        </BackOfficeWrapper>
                      </div>
                      {isAuthenticated ? (
                        <Menu as="div" className="relative z-50 ml-20">
                          <div className="pt-8 pb-1">
                            <Menu.Button className="flex max-w-xs items-center rounded-full bg-primary text-sm ring-2 ring-white ring-offset-2 focus:outline-none">
                              <span className="sr-only">Open user menu</span>
                              {user?.avatar ? (
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={user.avatar}
                                  alt="Avatar"
                                />
                              ) : (
                                <span className="flex h-10 w-10 items-center justify-center rounded-full">
                                  <img
                                    src="/images/mascot-head.png"
                                    alt="Mascote"
                                    className="h-10 w-10 rounded-full"
                                  />
                                </span>
                              )}
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {user &&
                                roleNavigation(user).map((item) => (
                                  <Menu.Item key={item.name}>
                                    <Link
                                      href={item.slug}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                      {item.name}
                                    </Link>
                                  </Menu.Item>
                                ))}
                              <Menu.Item key="log_out">
                                <button
                                  onClick={() => logout()}
                                  className="w-full"
                                >
                                  <div className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                                    Log out
                                  </div>
                                </button>
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      ) : (
                        <div className="pl-20 pt-4">
                          <JoinUs />
                        </div>
                      )}
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
            <div className="relative z-50 select-none object-cover px-2 pt-12">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.slug}
                  as="a"
                  className="font-terminal-uppercase block rounded-md py-6 text-center text-3xl text-white hover:text-quinary"
                >
                  <Link key={item.slug} href={item.slug}>
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
              {isAuthenticated &&
                user &&
                roleNavigation(user).map((item) => (
                  <Disclosure.Button
                    key={item.slug}
                    as="a"
                    className="font-terminal-uppercase block rounded-md py-6 text-center text-3xl text-white hover:text-quinary"
                  >
                    <Link key={item.slug} href={item.slug}>
                      {item.name}
                    </Link>
                  </Disclosure.Button>
                ))}
              <BackOfficeWrapper>
                {!isAuthenticated && (
                  <Disclosure.Button
                    key="login"
                    as="a"
                    className="font-terminal-uppercase block rounded-md py-6 text-center text-3xl text-white hover:text-quinary"
                  >
                    <Link key="login" href="/login">
                      Login
                    </Link>
                  </Disclosure.Button>
                )}
              </BackOfficeWrapper>
              {isAuthenticated && (
                <Disclosure.Button
                  key="login"
                  as="a"
                  className="font-terminal-uppercase block rounded-md py-6 text-center text-3xl text-white hover:text-quinary"
                >
                  <button className="uppercase" onClick={() => logout()}>
                    Log Out
                  </button>
                </Disclosure.Button>
              )}
            </div>
          </Disclosure.Panel>
          {open ? <div className="hidden lg:block">{children}</div> : children}
        </>
      )}
    </Disclosure>
  );
}
