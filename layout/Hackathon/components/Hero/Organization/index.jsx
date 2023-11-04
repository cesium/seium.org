import Image from "next/image";

export default function Organization() {
  return (
    <div className="grid grid-rows-2">
      <h5 className="text-sm text-white">Powered by</h5>
      <Image
        src="/images/cesium-logo.svg"
        width="120"
        height="41"
        alt="CeSIUM"
      />
    </div>
  );
}
