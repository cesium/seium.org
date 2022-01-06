
import UnderlineAnimation from '/components/website/utils/UnderlineAnimation';

export default function Title() {
    return (
        <div className="font-iextrabold z-50 relative">
            <h5 className="text-2xl text-quinary m-1">
                Challenges
            </h5>
            <h1 className="font-bold text-white text-6xl w-11/12 md:text-8xl md:w-full xl:text-9xl 2xl:w-4/5 relative z-0">
                <span className="relative z-50">Participate in new challenges every </span>
                <UnderlineAnimation text="You can also win awards every day. But that's highly unlikely, I would say....">day</UnderlineAnimation>     
            </h1>     
        </div>
    );
}