import styles from './style.module.css';
import Image from 'next/image';
import Button from '/components/utils/Button';
import { useState, useEffect } from 'react'

export default function Block(props) {

    const id = `${props.date}-${props.id}`;

    const block = (
        <div id={id} className={`${styles.block} ${props.coffeeBreak ? styles.coffee : styles.notCoffee}`}>
            <div className={`${styles.imgWrapper} ${props.coffeeBreak ? "flex" : "hidden"}`}> 
                <Image src="/images/Coffee.svg" layout="fill"/>
            </div>
            <p className={`${styles.paragraph} ${styles.bold} ${props.coffeeBreak ? "hidden" : "flex"}`}>
                {props.startTime}-{props.endTime}
            </p>
            <p className={styles.paragraph}><b>{props.activityType}</b> {props.summary}</p>
            <p className={styles.author}>{props.author}</p>
            <p className={styles.location}>{props.location}</p>
            <button className={`${styles.expand} ${!props.coffeeBreak && props.detailed ? "flex" : "hidden"}`}>
                { props.focused ? "-" : "+" }
            </button>
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