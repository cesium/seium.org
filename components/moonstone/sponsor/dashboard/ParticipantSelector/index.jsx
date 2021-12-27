import { useState } from 'react';

function Participant({name, selected, onClick, last}) {
    return (
        <div className={`w-full h-16 ${selected ? "bg-aqua" : ""} ${last ? "" : "border-b-2 border-slate-400"}`}>
            <button onClick={onClick} className="h-full py-2 px-2 text-left w-full tems-center font-iregular font-md">{name}</button>
        </div>
    );
}

export default function ParticipantSelector({participants, onParticipantChange}) {
    
    var defaultState = [];
    for(var i = 0; i < participants.length; i++)
        defaultState.push(false);

    const [st, updateState] = useState(defaultState);
    console.log("RENDER");
    const changeParticipant = (n) => {
        //Making a deep copy of the state array so that when it is updated
        //the component rerenders. If we do a shallow copy, React will not
        //see a change as a state change as the reference didn't change
        var temp = JSON.parse(JSON.stringify(st));
        temp[n] = !temp[n];
        onParticipantChange(temp);
        updateState(temp);
    };

    return (
        <div>
            <ul>
            {participants.map((participant, index) => <li key={index}><Participant name={participant}
                                    selected={st[index]} last={index == participants.length - 1}
                                    onClick={(e) => changeParticipant(index)}/></li>)}
            </ul>    
        </div>
    );
}