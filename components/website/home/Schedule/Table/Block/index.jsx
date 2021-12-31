import styles from './style.module.css';
import Image from 'next/image';

export default function Block(props) {

    const id = `${props.date}-${props.id}`;

    const block = (
        <div id={id} className={`${styles.block} ${props.coffeeBreak ? styles.coffee : styles.notCoffee}`}>
            { props.coffeeBreak &&
                <div className={styles.imgWrapper}> 
                    <Image src="/images/Coffee.svg" layout="fill"/>
                </div>
            }
            
            { !props.coffeeBreak &&
                <p className="text-xl text-white font-iextrabold">
                    {props.startTime}-{props.endTime}
                </p>
            }
            
            <p className={`text-xl text-white font-iregular`}>
                <span className='font-iextrabold'>{`${props.activityType} `}</span>
               { props.summary }
            </p>
            <p className={`${styles.author} text-sm text-gray-400 font-iregular`}>{props.author}</p>
            <p className={`${styles.location} text-sm text-gray-400 font-iregular`}>{props.location}</p>

            { !props.coffeeBreak &&
                <div className={styles.bottomRightCorner}>
                    { props.hyperlink !== undefined &&
                        <a href={props.hyperlink} target="_blank" className={`${styles.hyperlink} text-lg text-quinary font-ibold`}>
                            Join
                        </a>
                    }

                    { props.detailed &&
                        <span className={styles.expand}>
                            { props.focused ? "-" : "+" }
                        </span>
                    }
                </div>
            }
        </div>
    );

    if (props.coffeeBreak)
        return block;
    else
        return (
            <div className={styles.clickable}>
                <a className={styles.outerLink} href={`agenda/#${id}`}/>
                { block }
            </div>
        );
}