export default function SponsorBadgeButton({ sponsor }) {
    return (
        <div className="w-auto mt-8">
            <button className="block m-auto bg-aqua rounded-full w-full h-16">
                <p className="font-ibold"> 🏅 Dar Badge {sponsor} </p>
            </button>
        </div>
    );
}