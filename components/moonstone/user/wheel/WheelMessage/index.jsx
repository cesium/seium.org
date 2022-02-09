import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";

export default function WheelMessage({ title, description, onExit }) {
  const router = useRouter();
  return (
    <>
      <div className="fixed inset-0 z-30 h-full w-screen bg-white opacity-70"></div>
      <Dialog
        open={true}
        className="fixed top-1/2 left-1/2 z-50 -translate-y-2/4 -translate-x-2/4 overflow-y-auto rounded-3xl border-8 border-secondary p-10 px-12"
        onClose={(_) => {}}
      >
        <Dialog.Overlay />

        <Dialog.Title className="font-iextrabold text-6xl text-primary">
          {title}
        </Dialog.Title>
        <Dialog.Description className="mt-10 font-iregular text-lg">
          {description}
        </Dialog.Description>

        <button
          className="mt-10 h-12 w-28 rounded-full bg-quinary font-ibold text-lg"
          onClick={(e) => onExit(e)}
        >
          OK
        </button>
      </Dialog>
    </>
  );
}
