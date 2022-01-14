import Block from './Block';
import { isSelected } from '../Day/Filters'

function filterElem(filters)
{
    return function(elem)
    {
        let result = elem.activity.author == filters;
        if(result)
            return true;
        if (filters === "")
            return true;

        switch (elem.activity.activityType)
        {
            
            case "Coffee Break":    result = isSelected(filters, "Breaks"); break;
            case "Talk":            result = isSelected(filters, "Talks"); break;
            case "Pitch":           result = isSelected(filters, "Pitch"); break;
            case "Workshop":        result = isSelected(filters, "Workshops"); break;
            case "Hackathon":       result = isSelected(filters, "Hackathons"); break;
            default:                break;
        }

    }
}

/*
 *  Groups the activities into arrays. Two elements will be in the same array if they happen at the same
 *  time
 */
function group(list) {
    var result = [];

    for(var i = 0; i < list.length; i++) {
        var temp = [];
        for(var j = i; j < list.length && list[j].activity.startTime == list[i].activity.startTime 
            && list[j].activity.endTime == list[i].activity.endTime; j++) {

            temp.push(list[j]);
        }
        result.push(temp);
        i += temp.length - 1;
    }

    return result;
}

export default function Table({date, updateHasFocused, hash, filters, detailed}) {
    const schedule = require('/data/schedule.json');
    const obj = schedule.find((obj) => obj.date == date);

    if (obj === undefined || obj.activities === undefined)
    {
        updateHasFocused(false);
        return [];
    }

    let filtered = obj.activities.map((activity, id) => ({activity: activity, id: id, focused: hash === `${date}-${id}`}))
                                   .filter(filterElem(filters));

    updateHasFocused(filtered.filter(activity => activity.focused).length != 0);
    
    filtered = group(filtered);

    return filtered.map((elem,id) =>
        <Block key={`${date}-${id}`} index={id} detailed={detailed} focused={elem.focused} date={date} elems={elem}/>);
}