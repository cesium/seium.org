import AgendaBlock from '../AgendaBlock';


export default function AgendaTable(props) {
    return (
        <div>
            <AgendaBlock startTime="10:00" endTime="11:00" activityType="Talk" description="Uma talk bué fixe" author="Rui Oliveira" coffeeBreak={false}/>
            <AgendaBlock startTime="10:00" endTime="11:00" activityType="Coffee Break" coffeeBreak={true}/>
            <AgendaBlock startTime="10:00" endTime="11:00" activityType="Talk" description="Uma talk bué fixe" author="Rui Oliveira" coffeeBreak={false}/>
            <AgendaBlock startTime="10:00" endTime="11:00" activityType="Talk" description="Uma talk bué fixe" author="Rui Oliveira" coffeeBreak={false}/>
            <AgendaBlock startTime="10:00" endTime="11:00" activityType="Talk" description="Uma talk bué fixe" author="Rui Oliveira" coffeeBreak={false}/>
            <AgendaBlock startTime="10:00" endTime="11:00" activityType="Talk" description="Uma talk bué fixe" author="Rui Oliveira" coffeeBreak={false}/>
        </div>
    );
}