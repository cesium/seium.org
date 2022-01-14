import styles from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react'

function BlockItem({date, id, coffeeBreak, startTime, endTime, activityType, summary, 
    authors, description, focused, location, detailed, hyperlink}) {
     
    const ident = `${date}-${id}`;


    useEffect(() => {
        const b = document.getElementById(ident);
        b.style.maxHeight = (focused ? (b.scrollHeight + 50 + 'px') : '225px');
    }, [focused])

    const skipLink = coffeeBreak || focused;

    const block = (
        <div id={ident} className={`${styles.gridBlock} ${coffeeBreak ? styles.coffee : styles.notCoffee}`} style={{maxHeight: 225}}>
            { coffeeBreak &&
                <div className={styles.imgWrapper}> 
                    <Image src="/images/Coffee.svg" layout="fill"/>
                </div>
            }
            
            { !coffeeBreak &&
                <p className="text-xl text-white font-iextrabold">
                    {startTime}-{endTime}
                </p>
            }

            <p className={`text-xl text-white font-imedium`}>
                <span className='font-iextrabold'>{`${activityType} `}</span>
               { summary }
            </p>

            <ul className={`${styles.authors} text-sm text-gray-400 font-iregular flex`}>
                { authors?.map((author, index) => [
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
                        {index + 1 == authors.length ? "" : ",\u00A0"}
                    </li>
                ])}
            </ul>

            { description !== undefined &&
                <div className={styles.description} style={{opacity: focused ? 1 : 0}}>
                    { description.split("\n").map((text, i) => <p key={i} className={`mb-2 text-lg text-white font-iregular`}>{text}</p>) }
                </div>
            }

            <p className={`${styles.location} text-sm text-gray-400 font-iregular`}>{location}</p>

            { !coffeeBreak &&
                <div className={styles.bottomRightCorner}>
                    { hyperlink !== undefined &&
                        <a href={hyperlink} target="_blank" className={`${styles.hyperlink} text-lg text-quinary font-ibold`}>
                            Join
                        </a>
                    }

                    { detailed && (
                        focused ? 
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

export default function Block({detailed, focused, date, elems}) {
    console.log(JSON.stringify(elems));
    return (
        <div className={`grid grid-cols-${elems.length}`}>
            {elems.map((elem, id) => <BlockItem key={id} date={date} id={id} focused={focused} detailed={detailed} {...elem.activity}/>)}
        </div>
    );
}