import { useState } from 'react';

import Image from 'next/image'

import Tab from './Tab';

import sponsors from '/data/sponsors.json'

export default function Sponsors(props) {
    const [val, setValue] = useState(0);

    return (
        <div className="spacing bg-tertiary text-white py-20">
            <h2 className="text-6xl font-iextrabold py-10 flex justify-center"> Our amazing sponsors </h2>
            <div className="flex justify-center">
                <Tab tabName="Exclusive & Gold" selected={!val} onSelect={() => setValue(0)} />
                <Tab tabName="Silver & Bronze" selected={val} onSelect={() => setValue(1)} />
            </div>

            <div className="flex flex-row justify-center pt-16 md:pt-[6vw]">
                {sponsors[val].map((elem, key) => {
                    return(
                        <div key={key} className={`${key == 1 ? "border-l-2 border-white" : undefined } w-1/2`}>
                            <div className="grid grid-cols-1 w-full place-items-center px-[10%]">
                                <p className="text-2xl md:text-3xl font-iextrabold text-white pb-10"> {!val ? (key == 0 ? "Exclusive" : "Gold") : (key == 0 ? "Silver" : "Bronze")} </p>
                                <div className={`${!val && key == 0 ? "grid-cols-1" : "grid-cols-2"} grid gap-2 md:gap-10`}>
                                    {elem.map((sponsor,i) => {
                                        return(
                                            <a key={i} href={sponsor.link}>
                                                <Image src={`/images/sponsors/${sponsor.image}.svg`} width={250} height={66} alt={sponsor.image}/>
                                            </a>
                                        )})
                                    }
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    );
}