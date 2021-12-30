export default function SponsorBadgeButton({ sponsor, all }) {
    let text = all ? <>a <b className="font-ibold">todos</b> na sala</> : sponsor;
    return (
        <div className="w-auto mt-8">
            <button className="block m-auto bg-quinary rounded-full w-full h-16">
                <p className="font-iregular"> 🏅 Dar Badge {text} </p>
            </button>
        </div>
    );
}