export default function Table({list, user, maxUsersToShow}) {
    /*
        Notes: we are assuming the list is already sorted
        We are comparing the user by their name. This can be unreliable
        as multiple people can share the same first and last names
    */
    const toShow = list.slice(0, Math.min(maxUsersToShow, list.length));

    const rows = toShow.map((entry, id) =>  <div key={id} className="grid-cols-3 border-t-2 border-t-slate-700 h-8 pt-2 mb-2">
                                                <div className={`col-span-1 font-iregular w-1/3 float-left text-left ${entry.name == user ? "text-quinary" : ""}`}>
                                                    {id + 1}
                                                </div>
                                                <div className={`col-span-1 font-ibold w-1/3 float-left text-center ${entry.name == user ? "text-quinary" : ""}`}>
                                                    {entry.name}
                                                </div>
                                                <div className={`col-span-1 font-iregular w-1/3 float-left text-right ${entry.name == user ? "text-quinary" : ""}`}>
                                                    {entry.badges}
                                                </div>
                                            </div>);

    var userId = 0;
    var userBadges = 0;
    for(var i = 0; i < list.length; i++) {
        if(list[i].name == user) {
            userId = i;
            userBadges = list[i].badges;
            break;
        }
    }

    let extraUser = userId < maxUsersToShow ? <></> : 
        <div className="grid-cols-3 border-t-2 border-t-slate-700 h-8 pt-2 pb-2">
            <div className="col-span-1 text-quinary font-iregular w-1/3 float-left text-left">
                {userId + 1}
            </div>
            <div className="col-span-1 text-quinary font-ibold w-1/3 float-left text-center">
                {user}
            </div>
            <div className="col-span-1 text-quinary w-1/3 font-iregular text-aqua float-left text-right">
                {userBadges}
            </div>
        </div>;

    return (
        <div className="overflow-hidden">
            <div className="grid-cols-3 mt-12 h-8 pt-2">
                <div className="col-span-1 font-iregular w-1/3 float-left text-left">
                    Rank
                </div>
                <div className="col-span-1 font-iregular w-1/3 float-left text-center">
                    Name
                </div>
                <div className="col-span-1 font-iregular w-1/3 float-left text-right">
                    Badges
                </div>
            </div>

            {rows}
            {extraUser}
        </div>
        
    );
}