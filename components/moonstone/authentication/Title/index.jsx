import Image from "next/image";

export default function Title({ text }) {
  return (
    <>
      <div className="hidden sm:block">
        <Image
          src="/images/sei-logo.svg"
          alt="SEIUM"
          width="362"
          height="141"
        />
      </div>
      <div className="block sm:hidden">
        <Image
          src="/images/sei-logo.svg"
          alt="SEIUM"
          width="270"
          height="141"
        />
      </div>
      <p className="font-iextrabold text-quinary my-8 text-center text-4xl sm:text-5xl">
        {text}
      </p>
    </>
  );
}
