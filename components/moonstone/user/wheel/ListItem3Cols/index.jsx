export default function ListItem3({user, badge, when, isLast = false, isFullBold = false}) {
    if (!isLast) {
        var border = "border-b-solid border-b-2";
    }
    if(isFullBold){

    }
    return (
        <div className={`w-full mb-5 pb-3 ${border} grid grid-cols-3`}>
            <div className="text-left">
                <p className="font-ibold">{user}</p>
            </div>
            <div className="text-center">
                <p className="text-iregular">{badge}</p>
            </div>
            <div className="text-right">
                <p className="font-bold text-aqua text-ibold pr-4">{when}</p>
            </div>
        </div>
    );
}