import Image from "next/image";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import Return from "/components/moonstone/utils/Return";

const navigation = ["dashboard", "spotlight"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
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
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-secondary">
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
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
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
                        "font-ibold group flex items-center px-8 py-8 text-xs border-b-2 border-tertiary border-opacity-50"
                      )}
                    >
                      {item.toUpperCase()}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
                <a href="#" className="flex-shrink-0 group block">
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
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      <div className="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-secondary">
          <div className="flex-1 flex flex-col pt-5 pb-10 overflow-y-auto">
            <Return ml="4" mt="10" mt_sm="10" />
            <div className="mt-20 flex items-center flex-shrink-0 px-4">
              <Image
                src="/images/sponsors/accenture.svg"
                width="220"
                height="120"
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
                    "group flex items-center px-8 py-8 text-xs font-ibold border-b-2 border-tertiary border-opacity-50"
                  )}
                >
                  {item.toUpperCase()}
                </a>
              ))}
            </nav>
            <a href="/login" className="text-quinary px-4 font-iregular">
              Log out 👋
            </a>
          </div>
        </div>
      </div>
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
          </button>
        </div>
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl md:mx-20 px-4 sm:px-6 md:px-8">
              <p className="pt-20 font-ibold text-5xl text-secondary">
                {props.title}
              </p>
              <p className="font-iregular text-lg text-black pt-2">
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
