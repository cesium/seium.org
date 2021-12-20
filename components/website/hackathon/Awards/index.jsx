function Prize({place, prize}) {
    return (
        <div>
            <h3 className="font-bold text-2xl md:text-3xl">{place}</h3>
            <p className="font-bold">{prize}</p>
        </div>
    );
}

export default function Awards() {
    return (
        <div className="w-full bg-aqua text-center">
            <h2 className="font-bold pt-10 text-6xl md:text-8xl md:w-full relative">Awards</h2>
            <div className="flex flex-col justify-center lg:flex-row pt-20 pb-20 spacing">
                <div className="grid gap-y-8 gap-x-2 grid-cols-3 justify-items-center lg:gap-x-8 w-full">
                    <div>
                        <Prize place={<span>2<sup>nd</sup> place</span>} prize="🏆 250€ in gift card"/>
                    </div>
                    <div>
                        <Prize place={<span>1<sup>st</sup> place</span>} prize="🏆 450€ in gift card"/>
                    </div>
                    <div>
                        <Prize place={<span>3<sup>rd</sup> place</span>} prize="🏆 150€ in gift card"/>
                    </div>
                </div>
            </div>
        </div>        
    );
}