import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import ActiveLink from "./ActiveLink";
import Link from "next/link";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type IMobileNavbarProps = {
  isOpen: boolean;
  links: string[];
  currentHref: string;
  basePath: string;
  onClose: () => void;
  onLogout: () => void;
};

export default function MobileNavbar({
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
            className="z-1 no-scrollbar absolute h-full w-full justify-between overflow-y-scroll bg-secondary p-8 "
          >
            <aside className="flex h-full select-none flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
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
