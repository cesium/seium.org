import Image from 'next/image'
import Navbar from '/components/website/utils/Navbar'
import Button from '/components/utils/Button'

export default function Error(){
    return(
        <div className="spacing overflow-y-hidden bg-black h-screen">
     
            <div className="absolute invisible xl:visible xl:w-full xl:h-screen left-0">
                {<Image src="/images/ponto.svg" layout="fill" alt="Question mark" /> }
            </div>
            <div className="pt-8">
                <Navbar button="aqua" fg_color="black" />
            </div>
        <div className="relative mt-12 lg:w-1/2 lg:h-1/2 lg:ml-28 lg:mt-32">
            <p className="text-blue-600 font-iextrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                404
            </p>
            <p className="text-white font-iextrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            You’re in the wrong line of code, pal.
            </p>

            <div className=" mt-5 lg:mt-7">
                <Button text="Back to Homepage" bg_color="darkest_blue" fg_color="white"/>
            </div>
        </div>
            <div className="absolute invisible xl:visible xl:w-1/4 xl:h-1/2 bottom-0 right-0">
                <Image src="/images/mascote-404.svg"  layout="fill" alt="Mascote Image"/>  
            </div>
      </div>
    )
}