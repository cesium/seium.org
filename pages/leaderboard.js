import { useState } from 'react';

import Dashboard from "/components/moonstone/user/utils/Dashboard";
import LeaderboardTable from "/components/moonstone/user/leaderboard/LeaderboardTable";

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

    const testUser = {
        name: "John Doe",
        badges: 42,
    }

    const me = {
        name: "Me",
        badges: 0
    }

    const list = [testUser, testUser, testUser, testUser, testUser, testUser, testUser, testUser, me];

    return (
        <Dashboard href="leaderboard" title="Leaderboard" description="Check the users with the highest number of badges">
            <div className="grid-cols-2 overflow-hidden mt-12">
                <div className="col-span-1 w-full md:w-1/2 float-left">
                    DAY PICKER
                </div>
                <div className="col-span-1 w-full md:w-1/2 float-left">
                    <b className="text-ibold">Board</b>
                    <button className={`font-iregular bg-${st.hallOfFame ? "white" : "quinary"} rounded-full h-12 ml-24 text-center items-center px-4 py-1`}
                        onClick={(e) => changeLeaderboard(false)}>LEADERBOARD</button>
                    <button className={`font-iregular bg-${st.hallOfFame ? "quinary" : "white"} rounded-full h-12 ml-12 text-center items-center px-4 py-1`}
                        onClick={(e) => changeLeaderboard(true)}>HALL OF FAME</button>

                    <LeaderboardTable list={list} user="Me" maxUsersToShow={5}/>
                </div>
            </div>
        </Dashboard>
    );
}