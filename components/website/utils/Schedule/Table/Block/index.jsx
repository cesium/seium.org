import styles from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react'

export default function Block(props) {

    const id = `${props.date}-${props.id}`;

    const block = (
        <div id={id} className={`${styles.gridBlock} ${props.coffeeBreak ? styles.coffee : styles.notCoffee}`} style={{maxHeight: 200}}>
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

            <p className={`text-xl text-white font-imedium`}>
                <span className='font-iextrabold'>{`${props.activityType} `}</span>
               { props.summary }
            </p>

            <ul className={`${styles.authors} text-sm text-gray-400 font-iregular flex`}>
                { props.authors?.map((author, index) => [
                    <li className={styles.listElem} key={index * 2}>
                        {
                            author.speakerId !== undefined ?
                                <Link href={`speakers#${author.speakerId}`}>
                                    <a className={styles.author}> {author.name} </a>
                                </Link>
                            :
                                author.name
                        }
                    </li>,
                    <li className={styles.listElem} key={index * 2 + 1}>
                        {index + 1 == props.authors.length ? "" : ",\u00A0"}
                    </li>
                ])}
            </ul>

            { props.description !== undefined &&
                <div className={styles.description} style={{opacity: props.focused ? 1 : 0}}>
                    { props.description.split("\n").map((text, i) => <p key={i} className={`mb-2 text-lg text-white font-iregular`}>{text}</p>) }
                </div>
            }

            <p className={`${styles.location} text-sm text-gray-400 font-iregular`}>{props.location}</p>

            { !props.coffeeBreak &&
                <div className={styles.bottomRightCorner}>
                    { props.hyperlink !== undefined &&
                        <a href={props.hyperlink} target="_blank" className={`${styles.hyperlink} text-lg text-quinary font-ibold`}>
                            Join
                        </a>
                    }

                    { props.detailed && (
                        props.focused ? 
                            <Link href={{hash: ""}}>
                                <a className={styles.expand}>-</a>
                            </Link>
                         :
                            <span className={styles.expand}>+</span>
                    )}
                </div>
            }
        </div>
    );

    useEffect(() => {
        const b = document.getElementById(id);
        b.style.maxHeight = (props.focused ? (b.scrollHeight + 50 + 'px') : '200px');
    }, [props.focused])

    const skipLink = props.coffeeBreak || props.focused;

    return (
        <div className={skipLink ? "" : styles.clickable}>
            { !skipLink && 
                <Link href={`schedule/#${id}`}>
                    <a className={styles.outerLink}/>
                </Link>
            }
            { block }
        </div>
    );
}