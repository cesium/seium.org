import Block from './Block';
import { isSelected } from '../Day/Filters'
import { useState } from 'react'

function filterElem(filters)
{
    return function(elem)
    {
        if (filters === "")
            return true;

        //TODO
        switch (elem.activity.activityType)
        {
            case "Coffee Break":    return isSelected(filters, "Breaks");
            case "Talk":            return isSelected(filters, "Talks");
            default:                return false;
        }
    }
}

export default function Table(props)
{
    const schedule = require('/data/schedule.json');
    const obj = schedule.find((obj) => obj.date === props.date);

    if (obj === undefined || obj.activities === undefined)
    {
        props.updateHasFocused(false);
        return [];
    }

    const filtered = obj.activities.map((activity, id) => ({activity: activity, id: id, focused: props.hash === `${props.date}-${id}`}))
                                   .filter(filterElem(props.filters));

    props.updateHasFocused(filtered.filter(activity => activity.focused).length != 0);
    
    return filtered.map(elem =>
        <Block key={`${props.date}-${elem.id}`} detailed={props.detailed} focused={elem.focused} date={props.date} id={elem.id} {...elem.activity}/>);
}