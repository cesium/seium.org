import Block from './Block';

export default function Table() {
    return (
        <div>
            <Block startTime="10:00" endTime="11:00" activityType="Talk" description="Uma talk bué fixe" author="Rui Oliveira" coffeeBreak={false}/>
            <Block startTime="10:00" endTime="11:00" activityType="Coffee Break" coffeeBreak={true}/>
            <Block startTime="10:00" endTime="11:00" activityType="Talk" description="Uma talk bué fixe" author="Rui Oliveira" coffeeBreak={false}/>
            <Block startTime="10:00" endTime="11:00" activityType="Talk" description="Uma talk bué fixe" author="Rui Oliveira" coffeeBreak={false}/>
            <Block startTime="10:00" endTime="11:00" activityType="Talk" description="Uma talk bué fixe" author="Rui Oliveira" coffeeBreak={false}/>
            <Block startTime="10:00" endTime="11:00" activityType="Talk" description="Uma talk bué fixe" author="Rui Oliveira" coffeeBreak={false}/>
        </div>
    );
}