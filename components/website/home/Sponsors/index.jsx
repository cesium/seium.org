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

            <div className="flex flex-col lg:flex-row justify-center pt-40">
                {sponsors[val].map((elem, key) => {
                    return(
                        <div key={key} className={`${key == 1 ? "border-t-2 lg:border-t-0 lg:border-l-2 border-white" : undefined } w-[100%] lg:w-1/2`}>
                            <div className="grid grid-cols-1 w-full place-items-center py-[5%] lg:py-0 lg:px-[10%]">
                                <p className="text-2xl lg:text-3xl font-iextrabold text-white pb-10"> {!val ? (key == 0 ? "Exclusive" : "Gold") : (key == 0 ? "Silver" : "Bronze")} </p>
                                <div className={`${!val && key == 0 ? "grid-cols-1" : "grid-cols-2"} grid gap-2 lg:gap-10`}>
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