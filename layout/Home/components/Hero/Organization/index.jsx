import Image from "next/image";

export default function Organization() {
  return (
    <div className="grid grid-rows-2">
      <h5 className="font-imedium text-sm text-white">Organization</h5>
      <a href="https://cesium.di.uminho.pt">
        <Image
          src="/images/cesium-logo.svg"
          width="120"
          height="41"
          alt="CeSIUM"
          className="select-none"
        />
      </a>
    </div>
  );
}
