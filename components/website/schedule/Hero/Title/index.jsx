import UnderlineAnimation from '/components/website/utils/UnderlineAnimation';

export default function Title() {
    return (
        <div className="font-bold z-50 relative">
            <h5 className="font-iextrabold text-2xl text-quinary m-1">
                Schedule
            </h5>
            <h1 className="font-iextrabold text-white text-6xl w-11/12 md:text-8xl md:w-full xl:text-9xl 2xl:w-4/5 relative z-0">
                Five awesome days of learning, sharing and &nbsp;
                <UnderlineAnimation text="Did you see what I did there?" afterText="">winning</UnderlineAnimation>
            </h1>
        </div>
    );
}