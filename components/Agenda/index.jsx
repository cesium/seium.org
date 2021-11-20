import Table from './Table';
import Day from './Day';

import styles from './style.module.css';


export default function Agenda(props) {
    return (
        <div className="grid grid-cols-2 bg-black py-20 px-60">
            <div className="">
                <Day/>
            </div>

            <div className="">
                <Table/>
            </div>
        </div>
    );
}