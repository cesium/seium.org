import Image from "next/image";

export default function Organization() {
  return (
    <div className="absolute right-0 grid grid-rows-2">
      <h5 className="font-terminal-uppercase text-sm text-white">
        Organization
      </h5>
      <Image
        src="/images/cesium-logo.svg"
        width="120"
        height="41"
        alt="CeSIUM"
      />
    </div>
  );
}
