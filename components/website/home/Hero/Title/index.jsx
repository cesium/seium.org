import UnderlineAnimation from "/components/website/utils/UnderlineAnimation";

export default function Title() {
    return (
        <div className="font-bold z-20 relative">
            <h5 className="font-iextrabold text-2xl text-quinary m-1">
                15-20 February 2022
            </h5>
            <h1 className="relative font-iextrabold text-white text-6xl w-11/12 md:text-8xl md:w-full xl:text-9xl 2xl:w-4/5 relative z-20">
                <span className="relative z-20">The software engineering week is back, let's just&nbsp;</span>
                <UnderlineAnimation text="Did you see what I did there?" afterText="that">SEI</UnderlineAnimation>
            </h1>
        </div>
    );
}