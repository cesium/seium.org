import Block from './Block';

export default function Table(props)
{
    const schedule = require('./schedule.json');
    
    if (schedule[props.date] == undefined)
        return <Block/>;
    else
        return schedule[props.date].map((activity) => new Block(activity));
}