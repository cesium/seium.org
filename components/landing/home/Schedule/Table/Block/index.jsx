import styles from './style.module.css';
import Image from 'next/image';

export default function Block(props) {

    const id = `${props.date}-${props.id}`;

    const block = (
        <div id={id} className={`${styles.block} ${props.coffeeBreak ? styles.coffee : styles.notCoffee}`}>
            <div className={`${styles.imgWrapper} ${props.coffeeBreak ? "flex" : "hidden"}`}> 
                <Image src="/images/Coffee.svg" layout="fill"/>
            </div>
            <p className={`text-xl text-white font-iextrabold ${props.coffeeBreak ? "hidden" : "flex"}`}>
                {props.startTime}-{props.endTime}
            </p>
            <p className={`text-xl text-white font-iregular`}>
                <span className='font-iextrabold'>{props.activityType}</span>
                {` ${props.summary === undefined ? "" : props.summary}`}
            </p>
            <p className={`${styles.author} text-sm text-gray-400 font-iregular`}>{props.author}</p>
            <p className={`${styles.location} text-sm text-gray-400 font-iregular`}>{props.location}</p>
            <span className={`${styles.expand} ${!props.coffeeBreak && props.detailed ? "flex" : "hidden"}`}>
                { props.focused ? "-" : "+" }
            </span>
        </div>
    );

    if (props.coffeeBreak)
        return block;
    else
        return (
            <a className={styles.clickable} href={`agenda/#${id}`}>
                { block }
            </a>
        );
}