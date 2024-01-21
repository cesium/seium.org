import Image from "next/image";

import Navbar from "@components/Navbar";
import Button from "@components/Button";

export default function Error() {
  return (
    <>
      <div className="absolute z-0 h-screen w-screen bg-secondary"></div>
      <div className="spacing relative z-10 select-none bg-secondary">
        <div className="secondary invisible absolute left-0 xl:visible xl:h-screen xl:w-full">
          {<Image src="/images/ponto.svg" layout="fill" alt="Question mark" />}
        </div>
        <Navbar bgColor="secondary" button="quinary" fgColor="white">
          <div className="bg-secondary pt-14">
            <div className="font-terminal-uppercase relative z-20">
              <h5 className="text-7xl text-quinary lg:text-8xl xl:text-9xl">
                404
              </h5>
              <h1 className="relative z-0 text-7xl text-white md:w-4/5 lg:text-8xl xl:text-9xl">
                You’re in the wrong line of code, pal.
              </h1>
            </div>
            <div className="relative z-50 mt-5 w-1/2 lg:mt-7">
              <button
                onClick={(e) => (window.location.href = "/")}
                className="w-full items-center rounded-full border-tertiary px-4 py-4 text-center font-iregular text-sm text-white shadow-sm hover:text-quinary"
              >
                Back to Homepage
              </button>
            </div>
          </div>
        </Navbar>
        <div className="invisible fixed bottom-0 right-0 h-1/2 w-1/4 bg-secondary xl:visible">
          <Image
            src="/images/mascote-404.svg"
            layout="fill"
            alt="Mascote Image"
          />
        </div>
      </div>
    </>
  );
}
