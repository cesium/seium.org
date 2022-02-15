import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "/components/Auth";
import Return from "/components/moonstone/utils/Return";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MobileNavbar = ({
  href,
  sidebarOpen,
  setSidebarOpen,
  navigation,
  logout,
}) => {
  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-40 flex w-full lg:hidden"
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="bg-secondary absolute flex h-full w-full flex-1 flex-col md:max-w-md">
            <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center justify-between px-4">
                <Link href="/">
                  <img
                    className="h-8 w-auto hover:cursor-pointer"
                    src="/images/sei-logo.svg"
                    alt="Workflow"
                  />
                </Link>
                <button
                  type="button"
                  className="focus:ring-quaternary -ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <nav className="mt-5 flex-1">
                {navigation.map((item) => (
                  <Link key={item} href={item} passHref>
                    <a
                      className={classNames(
                        item == href
                          ? "bg-primary text-quinary"
                          : "hover:bg-primary text-white hover:bg-opacity-50",
                        "group border-tertiary font-ibold flex items-center border-b-2 border-opacity-50 px-8 py-8 text-xs"
                      )}
                    >
                      {item.toUpperCase()}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="border-quaternary flex flex-shrink-0 border-t p-4">
              <a
                href="#"
                onClick={() => logout()}
                className="font-iregular text-quinary px-4"
              >
                Log out 👋
              </a>
            </div>
          </div>
        </Transition.Child>
        <div className="w-14 flex-shrink-0" aria-hidden="true">
          {/* Force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default function Dashboard({
  title,
  href,
  description,
  navigation,
  children,
}) {
  const { logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <MobileNavbar
        href={href}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        navigation={navigation}
        logout={logout}
      />

      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
        <div className="bg-secondary flex min-h-0 flex-1 flex-col">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-10">
            <Return componentStyle="ml-4 mt-10 sm:mt-10" />
            <div className="mt-20 flex flex-shrink-0 items-center px-4">
              <Image src="/images/sei-logo.svg" width="220" height="120" />
            </div>
            <nav className="mt-5 flex-1">
              {navigation.map((item) => (
                <Link key={item} href={item} passHref>
                  <a
                    key={item}
                    className={classNames(
                      item == href
                        ? "bg-primary text-quinary"
                        : "hover:bg-primary text-white hover:bg-opacity-50",
                      "group border-tertiary font-ibold flex items-center border-b-2 border-opacity-50 px-8 py-8 text-xs"
                    )}
                  >
                    {item.toUpperCase()}
                  </a>
                </Link>
              ))}
            </nav>
            <a
              href="#"
              onClick={() => logout()}
              className="font-iregular text-quinary px-4"
            >
              Log out 👋
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col lg:pl-64">
        <div className="sticky top-0 z-10 flex justify-end pt-1 pl-1 sm:pl-3 sm:pt-3 lg:hidden">
          <button
            type="button"
            className="focus:ring-secondary inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl px-4 sm:px-6 lg:mx-20 lg:px-8">
              <p className="font-ibold text-secondary text-5xl lg:pt-20">
                {title}
              </p>
              <p className="font-iregular pt-2 text-lg text-black">
                {description}
              </p>
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
