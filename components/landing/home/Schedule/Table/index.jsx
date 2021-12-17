import Block from './Block';
import { useEffect, useState } from 'react'

function filterElem(filters)
{
    return function(elem)
    {
        //TODO
        return true;
    }
}

export default function Table(props)
{
    const schedule = require('/data/schedule.json');
    const obj = schedule.find((obj) => obj.date === props.date);

    const [focused, updateFocused] = useState(-1);

    //reset focused element when changing date
    useEffect(() => {
        updateFocused(-1);
    }, [props.date]);

    //set focused element based on URL hash
    useEffect(() => {
        const onHashChanged = function() {
            const arr = window.location.hash.split("-");
            if (props.detailed && arr.length == 2)
                updateFocused(parseInt(arr[1]));
        };
    
        window.addEventListener("hashchange", onHashChanged);
        onHashChanged();
    
        return () => {
            window.removeEventListener("hashchange", onHashChanged);
        };
    }, []);

    if (obj == undefined)
        return [];
    else
        return obj.activities.filter(filterElem(props.filters)).map((activity, id) =>
            <Block detailed={props.detailed} focused={focused == id} date={props.date} id={id} {...activity}/>);
}