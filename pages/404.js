import Image from 'next/image'

import Navbar from '/components/website/utils/Navbar'
import Button from '/components/utils/Button'

export default function Error() {
    return (
        <>
            <div className="absolute w-screen h-screen bg-secondary z-0"></div>
            <div className="spacing bg-secondary relative z-10">
                <div className="absolute secondary invisible xl:visible xl:w-full xl:h-screen left-0">
                    {<Image src="/images/ponto.svg" layout="fill" alt="Question mark" />}
                </div>
                <Navbar bgColor="secondary" button="quinary" fgColor="black">
                    <div className="pt-14 bg-secondary">
                        <div className="font-iextrabold z-50 relative">
                            <h5 className="text-7xl lg:text-8xl xl:text-9xl text-quinary">
                                404
                            </h5>
                            <h1 className="text-white text-7xl lg:text-8xl xl:text-9xl md:w-4/5 relative z-0">
                                You’re in the wrong line of code, pal.
                            </h1>
                        </div>
                        <div className="mt-5 lg:mt-7 w-1/2 relative z-50">
                            <Button onClick={(e) => window.location.href = "/"} text="Back to Homepage" customStyle="text-white bg-primary border-tertiary hover:bg-tertiary" />
                        </div>
                    </div>
                </Navbar>
                <div className="fixed invisible bg-secondary xl:visible w-1/4 h-1/2 bottom-0 right-0">
                    <Image src="/images/mascote-404.svg" layout="fill" alt="Mascote Image" />
                </div>
            </div>
        </>
    )
}