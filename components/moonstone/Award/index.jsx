import Image from 'next/image';

export default function Award({image, cost, available, message, enabled}) {
    return (
        <div className="block text-center">
            <div className={enabled ? "opacity-100" : "opacity-50"}>
                <Image src={image} width="200" height="200"></Image>
                <div className="w-auto mt-8">
                    <button className="block m-auto bg-aqua rounded-full w-64 h-20">
                        <p className="font-bold">REDEEM</p>
                        <p>{cost} tokens💰</p>
                    </button>
                </div>
            </div>
            
            <div className="text-center mt-6">
                <p className="font-bold">{available} available</p>
                <p>{message}</p>
            </div>
        </div>
    );
}