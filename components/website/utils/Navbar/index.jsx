import Link from "next/link";
import Image from "next/image";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
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
];

const userNavigation = [{ name: "Dashboard", slug: "/attendee/profile" }];

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
                        {isAuthenticated ? null : (
                          <Link key="login" href="/login" passHref>
                            <a className="font-iregular text-sm text-white text-opacity-40 hover:text-opacity-100">
                              Login
                            </a>
                          </Link>
                        )}
                      </div>
                      {isAuthenticated ? (
                        <Menu as="div" className="relative z-50 ml-3">
                          <div>
                            <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm ring-2 ring-quinary ring-offset-2 focus:outline-none">
                              <span className="sr-only">Open user menu</span>
                              {user && (
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={`${process.env.NEXT_PUBLIC_API_URL}${user.avatar}`}
                                  alt=""
                                />
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
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  <Link passHref href={item.slug}>
                                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                      {item.name}
                                    </a>
                                  </Link>
                                </Menu.Item>
                              ))}
                              <Menu.Item key="log_out">
                                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                  <button onClick={() => logout()}>
                                    Log out
                                  </button>
                                </div>
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      ) : (
                        <JoinUs fgColor={fgColor} button={button} />
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
              {isAuthenticated &&
                userNavigation.map((item) => (
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
              {!isAuthenticated && (
                <Disclosure.Button
                  key="login"
                  as="a"
                  className="block rounded-md py-6 text-center font-ibold text-3xl text-white hover:text-quinary"
                >
                  <Link key="login" href="/login" passHref>
                    Login
                  </Link>
                </Disclosure.Button>
              )}
              {isAuthenticated && (
                <Disclosure.Button
                  key="login"
                  as="a"
                  className="block rounded-md py-6 text-center font-ibold text-3xl text-white hover:text-quinary"
                >
                  <button onClick={() => logout()}>Log Out</button>
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
