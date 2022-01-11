import Image from "next/image";

export default function Title({ text }) {
    return (
        <>
            <div className="hidden sm:block">
                <Image src="/images/moonstone-logo.svg" width="362" height="141" />
            </div>
            <div className="block sm:hidden">
                <Image src="/images/moonstone-logo.svg" width="270" height="141" />
            </div>
            <p className="mt-4 font-iextrabold text-white text-4xl sm:text-5xl">
                {text}
            </p>
        </>
    );
}