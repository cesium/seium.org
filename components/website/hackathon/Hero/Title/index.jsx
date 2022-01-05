import { useState } from 'react';

export default function Title() {
    const [hovered, setHover] = useState(false);
    return (
        <div className="font-iextrabold z-50 relative">
            <h5 className="text-2xl text-quinary m-1">
                Hackathon
            </h5>
            <h1 className="font-bold text-white text-6xl w-11/12 md:text-8xl md:w-full xl:text-9xl 2xl:w-4/5 relative z-0">
                Create products, train skills and learn new technologies.           
            </h1>     
        </div>
    );
}