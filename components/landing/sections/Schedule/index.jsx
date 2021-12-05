import Table from './Table';
import Day from './Day';

export default function Schedule() {
    return (
        <div className="spacing grid grid-cols-2 bg-medium_blue pt-20">
            <div className="">
                <Day/>
            </div>

            <div className="">
                <Table/>
            </div>
        </div>
    );
}