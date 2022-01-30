import Link from "next/link";
import Image from "next/image";

import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import JoinUs from "/components/website/utils/JoinUs";
import styles from "./style.module.css";

const navigation = [
  { name: "Schedule", href: "/schedule" },
  { name: "Hackathon", href: "/hackathon" },
  // { name: 'Team', href: '/team' },
  { name: 'Challenges', href: '/challenges' },
  { name: "Speakers", href: "/speakers" },
  { name: "FAQs", href: "/faq" },
  // { name: 'Login', href: '/login' },
  { name: "Join Staff", href: "https://forms.gle/4EwD1Gs8FGCGRdYX8" },
];

export default function Navbar(props) {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className={`spacing pt-14 pb-4 bg-${props.bgColor}`}>
            <div className="flex h-16 items-center justify-between">
              <div className="relative z-50 flex flex-auto">
                <div className="grid w-full grid-cols-4">
                  <Link href="/" className="" passHref>
                    <div className={styles.logo}>
                      <Image
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
                        {navigation.map((item, i) => (
                          <a
                            key={i}
                            className="font-iregular text-sm text-white text-opacity-40 hover:text-opacity-100"
                            href={item.href}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div className="hidden xl:block">
                        <JoinUs fgColor={props.fgColor} button={props.button} />
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

          <Disclosure.Panel className={`lg:hidden bg-${props.bgColor}`}>
            <div className="relative z-50 min-h-screen object-cover px-2 pt-12">
              {navigation.map((item, i) => (
                <Disclosure.Button
                  as="a"
                  href={item.href}
                  className="block rounded-md py-6 text-center font-ibold text-3xl text-white hover:text-quinary"
                  key={item.href}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
          {open ? (
            <div className="hidden lg:block">{props.children}</div>
          ) : (
            props.children
          )}
        </>
      )}
    </Disclosure>
  );
}
