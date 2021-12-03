import Block from './Block';

export default function Table(props)
{
    const schedule = require('./schedule.json');
    const obj = schedule.find((obj) => obj.date === props.date);

    if (obj == undefined)
        return [];
    else
        return obj.activities.map((activity) => new Block(activity));
}