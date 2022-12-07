import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "/components/Auth";
import Return from "/components/moonstone/utils/Return";

const navigation = ["redeem prizes", "scan qr"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MobileNavbar = ({ sidebarOpen, setSidebarOpen }) => {
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
          <div className="absolute flex h-full w-full flex-1 flex-col bg-secondary md:max-w-md">
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
                  className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-quaternary"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <nav className="mt-5 flex-1">
                <Link href="/staff/redeem">
                  <a
                    className={classNames(
                      "w-full text-white hover:bg-primary hover:bg-opacity-50",
                      "group flex items-center border-b-2 border-tertiary border-opacity-50 px-8 py-8 font-ibold text-xs"
                    )}
                  >
                    REDEEM PRIZES
                  </a>
                </Link>
                <Link href="/staff/badges">
                  <a
                    className={classNames(
                      "w-full text-white hover:bg-primary hover:bg-opacity-50",
                      "group flex items-center border-b-2 border-tertiary border-opacity-50 px-8 py-8 font-ibold text-xs"
                    )}
                  >
                    SCAN QR CODE
                  </a>
                </Link>
              </nav>
            </div>
            <div className="flex flex-shrink-0 border-t border-quaternary p-4">
              <a
                href="#"
                onClick={() => logout()}
                className="px-4 font-iregular text-quinary"
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
  description,
  children,
  onReedem,
  onQr,
}) {
  const { logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <MobileNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-secondary">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-10">
            <Return componentStyle="ml-4 mt-10 sm:mt-10" />
            <div className="mt-20 flex flex-shrink-0 items-center px-4">
              <Image src="/images/sei-logo.svg" width="220" height="120" />
            </div>
            <nav className="mt-5 flex-1">
              <Link href="/staff/redeem">
                <a
                  className={classNames(
                    "w-full text-white hover:bg-primary hover:bg-opacity-50",
                    "group flex items-center border-b-2 border-tertiary border-opacity-50 px-8 py-8 font-ibold text-xs"
                  )}
                >
                  REDEEM PRIZES
                </a>
              </Link>
              <Link href="/staff/badges">
                <a
                  className={classNames(
                    "w-full text-white hover:bg-primary hover:bg-opacity-50",
                    "group flex items-center border-b-2 border-tertiary border-opacity-50 px-8 py-8 font-ibold text-xs"
                  )}
                >
                  SCAN QR CODE
                </a>
              </Link>
            </nav>
            <a
              href="#"
              onClick={() => logout()}
              className="px-4 font-iregular text-quinary"
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
            className="inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl px-4 sm:px-6 lg:mx-20 lg:px-8">
              <p className="font-ibold text-5xl text-secondary lg:pt-20">
                {title}
              </p>
              <p className="pt-2 font-iregular text-lg text-black">
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
