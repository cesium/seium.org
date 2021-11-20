import Table from './Table';
import Day from './Day';

import styles from './style.module.css';


export default function Agenda(props) {
    return (
        <div className="grid grid-cols-2 bg-black py-20">
            <div className="pl-20">
                <Day/>
            </div>

            <div className="pl-20 pr-20">
                <Table/>
            </div>
        </div>
    );
}