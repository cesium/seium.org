import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { useAuth } from "/components/Auth";
import Return from "/components/moonstone/utils/Return";

const navigation = ["profile", "wheel", "badgedex", "leaderboard", "awards"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard(props) {
  const { logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex md:hidden"
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
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-secondary">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                  </button>
                </div>
              </Transition.Child>
              <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                <div className="flex flex-shrink-0 items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <nav className="mt-5 flex-1">
                  {navigation.map((item) => (
                    <a
                      key={item}
                      href={item}
                      className={classNames(
                        item == props.href
                          ? "bg-primary text-quinary"
                          : "text-white hover:bg-primary hover:bg-opacity-50",
                        "group flex items-center border-b-2 border-tertiary border-opacity-50 px-8 py-8 font-ibold text-xs"
                      )}
                    >
                      {item.toUpperCase()}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex flex-shrink-0 border-t border-indigo-800 p-4">
                <a href="#" className="group block flex-shrink-0">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-white">
                        Tom Cook
                      </p>
                      <p className="text-sm font-medium text-indigo-200 group-hover:text-white">
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-secondary">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-10">
            <Return componentStyle="ml-4 mt-10 sm:mt-10" />
            <div className="mt-20 flex flex-shrink-0 items-center px-4">
              <Image
                src="/images/moonstone-logo.svg"
                width="220"
                height="120"
              />
            </div>
            <div className="text-md my-8 px-4 text-white">
              <p className="font-ibold">You have:</p>
              <p className="font-iregular">💰 170 Tokens</p>
            </div>
            <nav className="mt-5 flex-1">
              {navigation.map((item) => (
                <Link key={item} href={item} passHref>
                  <a
                    key={item}
                    className={classNames(
                      item == props.href
                        ? "bg-primary text-quinary"
                        : "text-white hover:bg-primary hover:bg-opacity-50",
                      "group flex items-center border-b-2 border-tertiary border-opacity-50 px-8 py-8 font-ibold text-xs"
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
              className="px-4 font-iregular text-quinary"
            >
              Log out 👋
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col md:pl-64">
        <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
          </button>
        </div>
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl px-4 sm:px-6 md:mx-20 md:px-8">
              <p className="pt-20 font-ibold text-5xl text-secondary">
                {props.title}
              </p>
              <p className="pt-2 font-iregular text-lg text-black">
                {props.description}
              </p>
              {props.children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
