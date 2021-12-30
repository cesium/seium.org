import Image from 'next/image'

import Navbar from '/components/website/utils/Navbar'
import Button from '/components/utils/Button'

export default function Error() {
    return (
        <div className="spacing overflow-y-hidden bg-secondary h-screen">
            <div className="absolute invisible xl:visible xl:w-full xl:h-screen left-0">
                {<Image src="/images/ponto.svg" layout="fill" alt="Question mark" />}
            </div>
            <div className="pt-14">
                <Navbar button="quinary" fg_color="black" />
            </div>
            <div className="pt-2">
                <div className="font-iextrabold z-50 relative">
                    <h5 className="text-7xl lg:text-8xl xl:text-9xl text-quinary">
                        404
                    </h5>
                    <h1 className="text-white text-7xl lg:text-8xl xl:text-9xl md:w-4/5 relative z-0">
                        You’re in the wrong line of code, pal.
                    </h1>
                </div>
                <div className="mt-5 lg:mt-7 w-1/2">
                    <Button text="Back to Homepage" bg_color="primary" fg_color="white" />
                </div>
            </div>
            <div className="absolute invisible xl:visible xl:w-1/4 xl:h-1/2 bottom-0 right-0">
                <Image src="/images/mascote-404.svg" layout="fill" alt="Mascote Image" />
            </div>
        </div>
    )
}