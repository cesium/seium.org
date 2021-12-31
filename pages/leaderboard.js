import { useState } from 'react';

import Dashboard from "/components/moonstone/user/utils/Dashboard";
import Schedule from '/components/website/home/Schedule';

export default function Leaderboard() {
    const defaultState = {
        hallOfFame: false,
        date: "23-02-2021",
    }

    const [st, updateState] = useState(defaultState);

    const changeLeaderboard = (b) => {
        updateState({
            hallOfFame: b,
            date: st.date,
        });
    }
    return (
        <Dashboard href="leaderboard" title="Leaderboard" description="Check the users with the highest number of badges">
            <div className="grid-cols-2 overflow-hidden mt-12">
                <div className="col-span-1 w-full md:w-1/2 float-left">
                    DAY PICKER
                </div>
                <div className="col-span-1 w-full md:w-1/2 float-left">
                    <b className="text-ibold">Board</b>
                    <button className={`font-iregular bg-${st.hallOfFame ? "white" : "quinary"} rounded-full h-12 ml-24 text-center items-center px-4 py-1`}
                        onClick={(e) => changeLeaderboard(false)}>Leaderboard</button>
                    <button className={`font-iregular bg-${st.hallOfFame ? "quinary" : "white"} rounded-full h-12 ml-12 text-center items-center px-4 py-1`}
                        onClick={(e) => changeLeaderboard(true)}>Hall Of Fame</button>
                </div>
            </div>
        </Dashboard>
    );
}