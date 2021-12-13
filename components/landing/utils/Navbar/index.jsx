import Image from "next/image";

const navigation = [
    { name: 'Schedule', href: '/schedule' },
    { name: 'Hackathon', href: '/hackathon' },
    { name: 'Team', href: '/team' },
    { name: 'Challenges', href: '/challenges' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Moonstone', href: '/login' },
]

export default function Navbar({button, fg_color}) {
    return (
        <div className="flex flex-auto z-50 relative">
            <div className="grid grid-cols-4 w-full">
                <a href="/" className="">
                    <Image src="/images/sei-logo.svg" width="50" height="40" />
                </a>
                <div className="justify-self-end col-span-3 invisible xl:visible flex flex-auto gap-x-20">
                    <div className="grid grid-cols-3 gap-x-20">
                        {navigation.map((item) => (
                            <a className="font-iregular text-white text-opacity-40 hover:text-opacity-100"
                                href={item.href}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <a 
                        href="/signup"
                        className={`transform rotate-15 -mt-5 text-xl font-inter_bold items-center justify-center flex h-28 w-28 text-${fg_color} bg-${button} rounded-full translate-x-0`}>
                            Join us 👋
                    </a>
                </div>
            </div>
        </div>
    );
}