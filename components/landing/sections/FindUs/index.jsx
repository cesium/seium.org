import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
    ssr: false
});


export default function FindUs() {
    return (
        <section className="flex flex-col md:flex-row md:justify-between bg-medium_light_blue py-20 spacing">
            <div className="flex flex-col text-white mb-10">
                <h2 className="font-bold text-6xl mb-2">How to find us</h2>

                <p className="mb-8">The SEI is free for participants and is organized by volunteers from CeSIUM and from the university community.</p>

                <p className="font-bold mb-2">Centro de Estudantes de Engenharia Informática</p>
                <ul className="list-inside list-disc">
                    <li className="">E-mail: cesium@di.uminho.pt</li>
                    <li className="">Phone: +351 253 604 448</li>
                </ul>
            </div>
            <div>
                <Map />
            </div>
        </section>
    )
}