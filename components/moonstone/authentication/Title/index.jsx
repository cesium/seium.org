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
      <p className="mt-8 font-iextrabold text-4xl text-quinary sm:text-5xl">
        {text}
      </p>
    </>
  );
}
