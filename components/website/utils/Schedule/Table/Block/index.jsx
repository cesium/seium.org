import styles from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react'

function BlockItem({ id, coffeeBreak, startTime, endTime, activityType, summary, 
    author, description, focused, location, detailed, hyperlink}) {

    useEffect(() => {
        const block = document.getElementById(id);
        if (block)
        block.style.maxHeight = (focused ? (block.scrollHeight + 50 + 'px') : '225px');
    }, [focused]);

    const skipLink = coffeeBreak || focused;

    const block = (
        <div id={id} className={`${styles.gridBlock} ${coffeeBreak ? styles.coffee : styles.notCoffee}`} style={{maxHeight: 225}}>
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
                { author &&
                    <li className={styles.listElem}>
                        <Link href={`speakers?speaker=${author}`}>
                            <a className={styles.author}> {author} </a>
                        </Link>
                    </li>
                }
            </ul>

            { description &&
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

export default function Block({date, detailed,  elems}) {

    return (
        <div className={`grid grid-cols-${elems.length}`}>
            {elems.map((elem, id) => <BlockItem key={id}  id={`${date}-${elem.id}`} focused={elem.focused} detailed={detailed} {...elem.activity}/>)}
        </div>
    );
}