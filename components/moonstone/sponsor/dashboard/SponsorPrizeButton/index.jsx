export default function SponsorPrizeButton({ prize }) {
    return (
        <div className="w-auto mt-8">
            <button className="block m-auto bg-quinary rounded-full w-full h-16">
                <p className="font-iregular"> 🏅 Prémio: {prize} </p>
            </button>
        </div>
    );
}