import Image from "next/image";

export default function Organization() {
    return (
        <div className="grid grid-rows-2 absolute right-0">
            <h5 className="font-inter_medium text-white text-sm">
                Organization
            </h5>
            <Image src="/images/cesium-logo.svg" width="120" height="41" alt="" />
        </div>
    );
}