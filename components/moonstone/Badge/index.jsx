export default function Badge() {
    return (
        <div
            // onClick={handleClick}
        >
            <div>
                <img
                    src="/images/badges/teste.png"
                    className=""
                    alt="Error"
                ></img>
            </div>
            <div className="grid grid-rows-2 justify-items-center">
                <div> Badge Name</div>
                <div>10 💰 </div>
            </div>
        </div>
    );
}