import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const navigation = [
    { name: 'Schedule', href: '/schedule' },
    { name: 'Hackathon', href: '/hackathon' },
    { name: 'Team', href: '/team' },
    { name: 'Challenges', href: '/challenges' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Moonstone', href: '/login' },
]

export default function Navbar({ button, fg_color }) {
    return (
        <div className="pt-8 flex flex-auto z-50 relative">
            <div className="grid grid-cols-4 w-full">
                <a href="/" className="">
                    <Image src="/images/sei-logo.svg" width="50" height="40" />
                </a>
                <div className="justify-self-end col-span-3 block xl:hidden w-5 h-5 text-white">
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="justify-self-end col-span-3 hidden xl:block">
                    <div className="flex flex-auto gap-x-20">
                        <div className="grid grid-cols-4 gap-x-10">
                            {navigation.map((item, i) => (
                                <a key={i}
                                    className="font-iregular text-white text-opacity-40 hover:text-opacity-100"
                                    href={item.href}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <a
                            href="/signup"
                            className={`transform rotate-15 -mt-5 text-xl font-ibold items-center justify-center flex h-28 w-28 text-${fg_color} bg-${button} rounded-full translate-x-0`}>
                            Join us 👋
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}