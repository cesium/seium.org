import { Dialog } from '@headlessui/react';
import { useRouter } from 'next/router';

export default function ErrorMessage() {
  const router = useRouter();
  return (
      <>
        <div className="fixed w-screen h-full inset-0 bg-white opacity-70 z-30"></div>
        <Dialog open={true} className="p-10 px-12 border-secondary rounded-3xl border-8 fixed z-50 top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 overflow-y-auto" 
            onClose={() => router.replace("/")}>
            <Dialog.Overlay />
            
            <Dialog.Title className="font-iextrabold text-primary text-6xl">An error occured</Dialog.Title>
            <Dialog.Description className="mt-10 font-iregular text-lg">
                An error occured communicating with the server. Try again later and if the error persists contact the team.
            </Dialog.Description>

                <p className="mt-8 font-iregular text-lg">You will be redirected to the home page</p>

            <button className="bg-quinary rounded-full h-12 w-28 font-ibold text-lg mt-10" onClick={() => router.replace("/")}>OK</button>
        </Dialog>
    </>
  );
}