import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";

export default function ErrorMessage() {
  const router = useRouter();
  return (
    <>
      <div className="fixed inset-0 z-30 h-full w-screen bg-white opacity-70"></div>
      <Dialog
        open={true}
        className="fixed top-1/2 left-1/2 z-50 -translate-y-2/4 -translate-x-2/4 overflow-y-auto rounded-3xl border-8 border-secondary p-10 px-12"
        onClose={() => router.replace("/")}
      >
        <Dialog.Overlay />

        <Dialog.Title className="font-iextrabold text-6xl text-primary">
          An error occured
        </Dialog.Title>
        <Dialog.Description className="mt-10 font-iregular text-lg">
          An error occured communicating with the server. Try again later and if
          the error persists contact the team.
        </Dialog.Description>

        <p className="mt-8 font-iregular text-lg">
          You will be redirected to the home page
        </p>

        <button
          className="mt-10 h-12 w-28 rounded-full bg-quinary font-ibold text-lg"
          onClick={() => router.replace("/")}
        >
          OK
        </button>
      </Dialog>
    </>
  );
}
