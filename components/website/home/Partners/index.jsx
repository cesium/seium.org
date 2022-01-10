import Image from "next/image";
import Link from "next/link";
import partners from "/data/partners";

export default function Partners() {
    
    const maxPerRow = 4;
    let rows = [];
    let cur = 0;

    while(cur <= partners.length) {
        let noElements = Math.min(partners.length - cur, maxPerRow);
        rows.push(  <div className={`spacing grid grid-cols-${noElements} gap-${noElements} mb-10`}>
                        {[...Array(noElements).keys()].map((entry, i) => 
                            <div className="m-auto w-1/4 filter grayscale" key={entry}>
                                <Link href={partners[i].url}>
                                    <a className="w-full h-full" target="_blank">
                                        <Image src={`/images/partners/${partners[entry].image}`} layout="responsive" width={partners[i].width} height={partners[i].height} />
                                    </a>
                                </Link>      
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