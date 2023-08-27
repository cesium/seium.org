import { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { useAuth } from "@context/Auth";

const roleNavigations = {
  sponsor: ["scanner", "visitors"],
  attendee: [
    "profile",
    "wheel",
    "badgedex",
    "leaderboard",
    "store",
    "vault",
    "identifier",
  ],
  admin: ["scanner", "visitors", "badges", "users", "events"],
  manager: ["badges", "prizes", "identifier"],
};

type LayoutProps = {
  title?: string;
  description?: string;
  basePath?: string;
  navigation?: string[];
  children: ReactNode;
};

export default function Layout({
  title,
  description,
  basePath = "attendee",
  navigation,
  children,
}: LayoutProps) {
  const { user, logout } = useAuth();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const router = useRouter();

  const currentHref = router.asPath;
  const links = navigation || roleNavigations[user.type];

  const openNavbar = () => {
    setIsNavbarOpen(true);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <div className="text-white lg:flex">
      <MobileNavbar
        isOpen={isNavbarOpen}
        links={links}
        basePath={basePath}
        currentHref={currentHref}
        onClose={closeNavbar}
        onLogout={logout}
      />

      {/* NAVBAR */}
      <aside className="inset-y-0 hidden w-72 overflow-y-scroll border-r-2 bg-secondary px-8 py-5 lg:fixed lg:flex lg:flex-col">
        <div className="flex flex-1">
          <nav className="mt-10 flex flex-col">
            <Link href="/" className="font-iregular text-quinary">
              &lt; Back to SEI website
            </Link>

            <div className="my-4">
              <Image
                src="/images/sei-logo.svg"
                alt="SEI Logo"
                width="220"
                height="120"
              />
            </div>

            {user.type === "attendee" && (
              <div className="text-md mt-2 mb-4 text-white">
                <p className="font-ibold">You have:</p>
                <p className="font-iregular">💰 {user.token_balance} Tokens</p>
              </div>
            )}

            {links.map((link) => (
              <ActiveLink
                key={link}
                link={link}
                basePath={basePath}
                href={currentHref}
              />
            ))}
          </nav>
        </div>

        <button
          onClick={() => logout()}
          className="mt-4 w-full text-left font-iregular text-quinary"
        >
          Log out 👋
        </button>
      </aside>

      {/* OPEN SIDEBAR ON MOBILE */}
      <button
        type="button"
        onClick={openNavbar}
        className="absolute top-4 right-4 text-gray-500 lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* CONTENT */}
      <main className="w-full px-4 pb-6 pt-20 lg:ml-72 lg:px-20">
        <h2 className="font-ibold text-5xl">{title}</h2>
        <p className="mt-2 font-iregular text-lg">{description}</p>

        {children}
      </main>
    </div>
  );
}

interface IMobileNavbarProps {
  isOpen: boolean;
  links: string[];
  currentHref: string;
  basePath: string;
  onClose: () => void;
  onLogout: () => void;
}

function MobileNavbar({
  isOpen,
  links,
  currentHref,
  basePath,
  onClose,
  onLogout,
}: IMobileNavbarProps) {
  return (
    <Transition.Root show={isOpen}>
      <Dialog
        onClose={onClose}
        className="fixed inset-0 z-40 flex w-full text-white md:max-w-md"
      >
        <Dialog.Panel>
          <Transition.Child
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="-z-1 fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <Transition.Child
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            className="z-1 absolute h-full w-full justify-between bg-secondary p-8 "
          >
            <aside className="flex h-full flex-col justify-between">
              <div>
                <div className="flex justify-between">
                  <Link href="/" className="font-iregular text-quinary">
                    <Image
                      src="/images/sei-logo.svg"
                      alt="SEI Logo"
                      width="48"
                      height="32"
                    />
                  </Link>

                  <button type="button" onClick={onClose} className="h-12 w-12">
                    <span className="sr-only">Close sidebar</span>
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>

                <nav className="flex flex-col">
                  {links.map((link) => (
                    <ActiveLink
                      key={link}
                      link={link}
                      basePath={basePath}
                      href={currentHref}
                    />
                  ))}
                </nav>
              </div>

              <button
                onClick={onLogout}
                className="w-full border-t border-quaternary pt-4 text-left font-iregular text-quinary"
              >
                Log out 👋
              </button>
            </aside>
          </Transition.Child>
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  );
}

interface IActiveLinkProps {
  link: string;
  href: string;
  basePath: string;
}

function ActiveLink({ link, href, basePath }: IActiveLinkProps) {
  const activeStyle = href === `/${basePath}/${link}` && "text-quinary";

  return (
    <Link
      href={`/${basePath}/${link}`}
      className={`py-8 font-ibold text-xs uppercase transition duration-200 hover:text-quinary ${activeStyle}`}
    >
      {link}
    </Link>
  );
}
