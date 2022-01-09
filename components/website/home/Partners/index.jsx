import Image from "next/image";
import Link from "next/link";
import partners from "/data/partners";

export default function Partners() {
    
    const maxPerRow = 4;
    let rows = [];
    let cur = 0;
    console.log(partners.length);
    while(cur <= partners.length) {
        let noElements = Math.min(partners.length - cur, maxPerRow);
        console.log(cur);
        rows.push(  <div className={`spacing grid grid-cols-${noElements} gap-${noElements} mb-10`}>
                        {[...Array(noElements).keys()].map((entry, i) => 
                            <div className="m-auto" key={entry}>
                                <Image src={`/images/partners/${partners[entry].image}`} width={partners[i].width} height={partners[i].height}/>
                            </div>)}
                    </div>);
        cur += maxPerRow;
    }

    return (
        <div className="bg-secondary w-full pt-10 pb-10">
            <h2 className="text-6xl font-iextrabold py-10 px-6 flex justify-center text-white">Partners who made this possible</h2>
            {rows}
        </div>
    );
}
