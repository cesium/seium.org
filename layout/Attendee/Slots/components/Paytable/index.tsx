import { Dialog } from "@headlessui/react";

export default function Paytable({ onExit }) {
  return (
    <>
      <div className="fixed inset-0 z-30 h-full w-screen bg-white opacity-70"></div>
      <Dialog
        open={true}
        className="fixed top-1/2 left-1/2 z-50 -translate-y-2/4 -translate-x-2/4 select-none overflow-y-auto rounded-3xl border-8 border-secondary bg-white p-10 px-12 drop-shadow-xl"
        onClose={(_) => {}}
      >
        <Dialog.Overlay />

        <Dialog.Title className="font-terminal-uppercase text-6xl text-primary">
          Paytable
        </Dialog.Title>
        <Dialog.Description className="mt-10 font-iregular text-lg">
          <img src="/images/slots/paytable.svg"></img>
        </Dialog.Description>

        <button
          className="mt-10 h-12 w-28 rounded-full bg-quinary font-ibold text-lg text-white outline-none ring-0"
          onClick={(e) => onExit(e)}
        >
          OK
        </button>
      </Dialog>
    </>
  );
}
