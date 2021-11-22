import Table from './Table';
import Day from './Day';

export default function Schedule() {
    return (
        <div className="grid grid-cols-2 bg-medium_blue pt-20 px-60">
            <div className="">
                <Day/>
            </div>

            <div className="">
                <Table/>
            </div>
        </div>
    );
}